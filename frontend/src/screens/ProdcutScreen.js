import React, { useEffect, useState } from 'react';
import Rating from '../component/Rating'
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetails } from '../actions/productAction';

// import prodcuts from '../products'
// import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import Loader from '../component/Loader';
import Messages from '../component/Messages';






const ProdcutScreen = () => {
  let history = useNavigate();
  //console.log(history)
  // const { id } = match.params
  const [qty, setQty] = useState(1)
  let { id } = useParams();
   //console.log(id)
  // const [product, setProduct] = useState([])
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const { loading, error, product } = productDetails
  // console.log(useParams())
  useEffect(() => {
    dispatch(listProductDetails(id))
  }, [dispatch, id])
  // let { id } = useParams();


  const addToCartHandler = () => {
    history(`/cart/${id}?qty=${qty}`)
  }
  // const product = prodcuts.find(p => p._id === id)

  return (

    <div>
      <div className='flex justify-end '>
        <button
          className="bg-white text-gray-800 flex items-end mr-4"
          type="button">
          <i className="fas fa-backward mr-2"></i>
          back</button>
      </div>
      {
        loading ? <Loader /> : error ? <Messages> {error}</Messages> : (
          <div className="md:flex my-3 md:ml-auto md:mr-auto ">
            <div className="md:flex-shrink-0 md:justify-center items-center">
              <div className='flex justify-center items-center ml-auto mr-auto'>
                <img className="zoom w-96 rounded-lg items-center hover:scale-150 hover:mt-20  hover:mb-20 hover:ml-20" src={product.image} alt="Woman paying for a purchase" />

              </div>
            </div>

            <div className="mt-4 ml-2 md:mt-0 md:ml-6 flex-1 0">
              <div className="uppercase text-3xl tracking-wide text-gray-700 font-bold">{product.name}</div>
              <p className="block mt-1 text-lg leading-tight font-semibold text-gray-900 hover:underline">{product.brand}</p>
              <p className="mt-2 text-gray-600">{product.description}</p>
              <Rating value={product.rating} text={`${product.numReviews} Reviews`} color='ml-10 text-yellow-400' />

              <p className='font-bold text-xl ml-10'> <span className='text-lg font-light'>Price</span> <span className='text-red-500 text-3xl'>  {product.price}</span></p>

              {
                product.countInStock > 0 ?
                  <p className='font-bold text-xl ml-10'>{product.countInStock}
                    <span className='font-light'> in stock</span>
                  </p>
                  :
                  <p className='font-light text-red-900 text-xl ml-10'>
                    Out Of stock
                  </p>
              }





            </div>




            <div className='text-3xl p-2 border-2 items-start mr-5'>


              <div className='border-2'>

                <p className='font-light text-xl '> Price {product.price} </p>

                {
                  product.countInStock > 0 ?
                    <p className='font-bold text-xl'>{product.countInStock}
                      <span className='font-light'> in stock</span>
                    </p>
                    :
                    <p className='font-light text-red-900 text-xl'>
                      Out Of stock
                    </p>
                }
              </div>
              <div className='flex flex-row text-sm border-1'>
                <div className='py-2 px-4 pr-8'>QTY</div>
                <div className='py-2'>

                  <select className=" bg-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight"
                    value={qty}
                    as='select'
                    onChange={(e) => setQty(e.target.value)}
                  >
                    {
                      [...Array(product.countInStock).keys()].map((x) =>
                        <option key={x + 1} value={x + 1}
                          className="bg-gray-200 text-gray-700"
                        >
                          {x + 1}
                        </option>
                      )
                    }


                  </select>
                 
                 
                 



                </div>
              </div>
              <div>
                {
                  product.countInStock > 0 ?
                    <button className="bg-gray-800 text-white hover:bg-black text-xs font-bold uppercase px-4  py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ml-3 my-3 " 
                    type="button"
                    onClick={addToCartHandler}
                    >
                      <i className="fas fa-cart-plus mr-2"></i>
                      add to cart
                    </button>
                    :
                    <button className="bg-gray-800 text-white hover:bg-black text-xs font-bold uppercase px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none ml-3 my-3 opacity-50 cursor-not-allowed" type="button">
                      <i className="fas fa-cart-plus mr-2"></i>
                      add to cart
                    </button>
                }
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
};

export default ProdcutScreen;
