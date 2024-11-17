import React, { useState } from 'react'
import ProductContext from './productContext'

const ProductState = (props) => {
  let p1 = {
    name: "apple",
    price: 100
  }
  const prod = [
  {
      id: 1,
      name: "apple",
      description: "this is fresh and healthy",
      price: 100,
      instock: 5

    },
    {
      id: 2,
      name: "mango",
      description: "this is local product from Nepal",
      price: 200,
      instock: 4
    }
  ]
  const [product, setProduct] = useState(prod)
  
  // const [article, setArticle] = useState([])



  const update = () => {
    setTimeout(() => {
      setProduct({
        name: "orange",
        price: 50
      })
    }, 5000);
  }
  // const fetchApi =async()=>{
  //   try {
  //     const response = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=d125d26fbc6d49728775e0b977bddc5a")
  //     if (!response.ok){
  //       throw new Error("response not comming")
  //     }
  //     const data= await response.json()
  //     setArticle(data.articles)
  //   } catch (error) {
  //     throw new Error("response not comming")
  //   }
  // }

  return (
    <ProductContext.Provider value={{ product }}>
      {props.children}
    </ProductContext.Provider>
  )
}

export default ProductState