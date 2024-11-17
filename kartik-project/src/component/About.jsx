import React, { useEffect } from 'react'

import bhadra from '../assets/images/bhadra.jpg'
import productContext from '../Context/productContext' 
import { useContext } from 'react'

const About = () => {
    const context = useContext(productContext)
    const { product } = context
    console.log("this is ")
    /* console.log("this is product",product) */
  /*   useEffect(() => {
        update()
    }, []) */
    return (
      
            <>
                <div className="container">
                    <div className="row">
                        {/* <h4> this is about us component. my product name is: {product.name} and price:{product.price}</h4> */}
    
                        <h4 className="our-product-title">
                            Our Product
                            <h1></h1>
                        </h4>
                        { product.map((item) => {
                            return (
                                <div className='col-md-3'>
                                    <div key={item.id} className="card ">
                                        <img src={bhadra} className="card-img-top" alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <p className="card-text">{item.description}</p>
                                            <p className="card-text">Rs. {item.price}</p>
                                            <button className='btn btn-primary'>Add to cart</button>
                                        </div>
                                    </div>
                                </div>
                            )
    
                        })}
    
                    </div>
                </div>
            </>
        )
    }
    
    export default About