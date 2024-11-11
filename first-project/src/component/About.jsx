

import React, { useEffect } from 'react'
import bhadra from '../assets/images/bhadra.jpg'
import productContext from '../Context/productContext'
import { useContext } from 'react'
const About = () => {
const context = useContext(productContext)
const {product,update , news} = context
console.log("this is ")

/* console.log("this is product",product) */
useEffect(()=>{
  update()
},[])


  return (
   /* <div>
      <h4>this is about us  component . my product name is : {product.name} and price is {product.price}</h4>
    </div> */
      <>
      <div className="container">
          <div className="row">
              {/*  <h4> this is about us component. my product name is: {product.name} and price:{product.price}</h4>  */}
              <h4 className="news-header">
                  My News
              </h4>
              {news &&news.map((item)=>{
                  return(
                      <div key={item.source.id} className="card col-md-3">
                      <img src={bhadra} className="card-img-top" alt="..."/>
                          <div className="card-body">
                              <h5 className="card-title">{item.author}</h5>
                              <p className="card-text">{item.description}</p>
                              <a href={item.url} target="blank" className="btn btn-primary">Go somewhere</a>
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
