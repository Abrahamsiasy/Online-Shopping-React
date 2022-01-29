import React from 'react';
import Rating from '../component/Rating'

import prodcuts from '../products'
import { useParams } from "react-router-dom";




const ProdcutScreen = () => {
  let { id } = useParams();

  const product = prodcuts.find(p => p._id === id)
  return (

    <div>
      <div className="md:flex my-3 md:ml-auto md:mr-auto ">
        <div className="md:flex-shrink-0 md:justify-center items-center">
          <div className='flex justify-center items-center ml-auto mr-auto'>
            <img className="w-96 rounded-lg items-center" src={product.image} alt="Woman paying for a purchase" />
          </div>
        </div>
        <div className="mt-4 ml-2 md:mt-0 md:ml-6 flex-1 0">
          <div className="uppercase text-3xl tracking-wide text-gray-700 font-bold">{product.name}</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">{product.brand}</a>
          <p className="mt-2 text-gray-600">{product.description}</p>
          <Rating value={product.rating} text={`${product.numReviews} Reviews`} color='ml-10 text-yellow-400' />

          <p className='font-bold text-xl ml-10'> <span className='text-lg font-light'>Price</span> <span className='text-red-500 text-3xl'>  {product.price}</span></p>

          {
            product.countInStock > 0 ?
              <p className='font-bold text-xl ml-10'>{product.countInStock}
                <span className='font-light'>in stock</span>
              </p>
              :
              <p className='font-light text-red-900 text-xl ml-10'>
                Out Of stock
              </p>
          }
          {
            product.countInStock > 0 ?
              <button className="bg-gray-800 text-white hover:bg-black text-xs font-bold uppercase px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ml-10 my-3 " type="button">
                <i className="fas fa-cart-plus mr-2"></i>
                add to cart
              </button>
              :
              <button className="bg-gray-800 text-white hover:bg-black text-xs font-bold uppercase px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ml-10 my-3 opacity-50 cursor-not-allowed" type="button">
                <i className="fas fa-cart-plus mr-2"></i>
                add to cart
              </button>}


        </div>


      </div>
    </div>

  )
};

export default ProdcutScreen;
