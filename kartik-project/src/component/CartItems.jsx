import React, { useContext } from 'react'

import productContext from '../Context/productContext'
import bhadra from '../assets/images/bhadra.jpg'

import { MdDelete } from "react-icons/md";


const CartItems = () => {
    const context = useContext(productContext)
    const {state:{cart} ,dispatch} = context
    const Total = cart.reduce((acc ,curr)=>acc + curr.price * curr.qty ,0)
   console.log("cartprice", Total)
  return (
   
  /*   <div className='container'>
        <div className='productContainer-cart'>
        <ul className='list-group'>
                {cart && cart.map((item)=>{
                    <li className='list-group-item' key={item.id}>
                        <div className='row'>
                        <div className='col-md-2'>
                        <img src={bhadra} alt="" />
                        </div>
                        <div className='col-md-2'>
                       <h4>Name:{item.name}</h4>
                        </div>
                        <div className='col-md-2'>
                       <h4>Price:{item.price}</h4>
                        </div>
                        </div>
                    </li>
                })}
        </ul>

        </div>
  
    </div> */
    <div className='container cart-page '>
    <div className='productContainer-cart'>
        <ul className='list-group'>
            {cart && cart.map((item) => (
                <li className='list-group-item' key={item.id}>
                    <div className='row'>
                        <div className='col-md-2'>
                            {/* <img src={bhadra} alt='prduct list image' /> */}
                            <img src={bhadra} className="card-img" alt="..." />
                        </div>
                        <div className='col-md-2'>
                            <h4>Name:{item.name}</h4>
                        </div>
                        <div className='col-md-2'>
                            <h4>Price:{item.price}</h4>
                        </div>
                        <div className='col-md-2'>
                            <select value={item.qty}
                                onChange={(e) =>
                                    dispatch({
                                        type: "CHANGE_CART_QTY",
                                        payload: {
                                            id: item.id,
                                            qty: e.target.value
                                        }
                                    })
                                } className='from-control'>
                                    {[...Array(item.instock).keys()].map((x)=>(
                                        <option key={x+1}>{x+1}</option>
                                    )

                                    )}
                                  
                                </select>
                        </div>
                        <div className='col-md-2'>
                          
                            
{/*                             <button type='button' className='btn btn-light'
                             onClick={() => dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: item
                                        })
                                    }>
                                        <MdDelete />
                                    </button>
 */}                                    <button type='button' className='btn btn-light' onClick={() =>
                                        dispatch({
                                            type: "REMOVE_FROM_CART",
                                            payload: item
                                        })
                                    }>
                                        <MdDelete />
                                        </button>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    </div>
    <div className='filter-summary'>
            <div className='title'>total item:{cart.length}</div>
            <h4>Total:{Total}</h4>
            <button className='btn btn-primary'>Proceed to checkout</button>
    </div>
</div>
  )
}

export default CartItems
