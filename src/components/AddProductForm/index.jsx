import React, { useContext } from 'react'
import s from './index.module.css'
import { addProduct } from '../../requests/products';
import { Context } from '../../context'

export default function AddProductForm() {

  const { createNewProduct } = useContext(Context);

  const submit = event => {
    event.preventDefault();
    const { title, description, price } = event.target;
    addProduct(
    {
      title: title.value, 
      description: description.value, 
      price: price.value,
      categoryId: 1,
      images: ["https://placeimg.com/640/480/any"]
    }, createNewProduct);
    title.value = '';
    description.value = '';
    price.value = '';
  }

  return (
    <form onSubmit={submit} className={s.add_product_form}>
      <input type='text' name='title' placeholder='Title' />
      <input type='text' name='description' placeholder='Description' />
      <input type='text' name='price' placeholder='Price' />
      <button>Add product</button>
    </form>
  )
}