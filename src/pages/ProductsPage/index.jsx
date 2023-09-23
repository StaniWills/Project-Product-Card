import React from 'react'
import { Link } from 'react-router-dom'
import AddProductForm from '../../components/AddProductForm'
import ProductsContainer from '../../components/ProductsContainer'

export default function ProductsPage() {
  return (
    <div>
      <Link to='/'>
        <button>Main page</button>
      </Link>
      <AddProductForm />
      <ProductsContainer />
    </div>
  )
}