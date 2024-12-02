import React, {  useContext, useEffect,useState } from 'react'
import { BsThreeDots } from "react-icons/bs"

import Bhadra from '../assets/images/bhadra.jpg'
import productContext from '../Context/productContext'

import EditProductModal from './EditProductModal';

const About = () => {
    const context = useContext(productContext)
    const {state:{cart},dispatch, product, editProduct} = context

    console.log("this is cart" ,cart)


    
    const [menuVisible, setMenuVisible] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)


    const toggleMenu = (id) => {
        setMenuVisible(prevState => ({
            ...prevState,
            [id]: !prevState[id]
        }))
    }

    const openEditModal = (product) => {
        setSelectedProduct(product)
        setModalVisible(true)
    }
    const closeEditModal = () => {
        setModalVisible(false);
        setSelectedProduct(null);
    };
    const saveEdit = (updateData) => {
        editProduct(selectedProduct._id, updateData)
    }
    const handleDelete = async () => {
        console.log("deleting product");
        // await deleteProduct(id)

    }

   
     /* console.log("this is product",product)  */
       useEffect(() => {
          editProduct()
      }, []) 
    return (

        <>
            <div className="container">
                <div className="row">
                    {/* <h4> this is about us component. my product name is: {product.name} and price:{product.price}</h4> */}

                    <h4 className="our-product-title">
                        Our Product
                      
                    </h4>
                    {product.map((item) => {
                        return (
                            <div className='col-md-3'>
                                <div key={item.id} className="card ">
                                    <img src={Bhadra  } className="card-img-top" alt="..." />
                                    <div className="card-body">
                                    <div className='three-dots'>
                                        <h5 className="card-title">{item.name}</h5>
                                        <BsThreeDots onClick={() => toggleMenu(item.id)} />
                                            {menuVisible[item.id] && (
                                                <div className='menu-options'>
                                                    <button onClick={() => openEditModal(item)}>Edit</button>
                                                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                                                </div>
                                            )}
                                            </div>
                                        <p className="card-text">{item.description}</p>
                                        <p className="card-text">Rs. {item.price}</p>
                                       {/*  <button className='btn btn-primary'>Add to cart</button> 
                                        <button className='btn btn-danger'>Remove from cart</button> */}
                                        {cart && cart.some(p=>p.id==item.id)?(
                                             <button className='btn btn-danger mx-1 '
                                             onClick={()=>{
                                                dispatch({
                                                    type:"REMOVE_FROM_CART",
                                                    payload:item
                                                 })
                                             }}>Remove from cart</button>
                                        ):

                                        ( <button className='btn btn-primary mx-1'
                                        onClick={()=>{
                                          dispatch  ({
                                            type:"ADD_TO_CART",
                                            payload:item
                                            })
                                        }}  >Add to cart</button>)}
                                    </div>
                                </div>
                                {modalVisible && selectedProduct && selectedProduct.id === item.id && (
                                    <EditProductModal
                                        product={selectedProduct}
                                        onClose={closeEditModal}
                                        onSave={saveEdit}

                                    />
                                )}
                            </div>
                        )

                    })}

                </div>
            </div>
        </>
    )
}

export default About