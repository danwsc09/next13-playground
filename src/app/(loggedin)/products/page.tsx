import Image from 'next/image'
import React, { use } from 'react'
import { ProductResponse } from '../../../types/product'

const fetchProducts = async (): Promise<ProductResponse> => {
  const response = await fetch('https://dummyjson.com/products?limit=3')
  console.log('in fetch')
  return response.json()
}

export default function ProductsPage() {
  // const {products, total} = await fetchProducts()
  const {total, products} = use(fetchProducts())

  // console.log(products)
  return (
    <div>
      <p>Products page</p>
      <p>There are {total} products in total.</p>
      {products.map(product => (
        <div key={product.id}>
          <p>{product.title}</p>
          <Image src={product.images[0]} alt={product.title} width="300" height='300'/>
        </div>
      ))}
    </div>
  )
}
