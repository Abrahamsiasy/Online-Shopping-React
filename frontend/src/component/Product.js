import React from 'react';
import Rating from './Rating';
import { Link } from "react-router-dom";

const Product = ({ product }) => {
    return (
        
        <div className="max-w-sm rounded overflow-hidden shadow-lg   mb-2 mt-2 ml-auto mr-auto" >
            
            <Link to={`product/${product._id}`}>
                <img className="w-full rounded-t-xl" src={product.image} alt="Sunset in the mountains" />
            </Link>
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{product.name}</div>
                <p className="text-gray-700 text-base"> {product.description}</p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{product.brand}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{product.category}</span>
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{product.price}</span>
            </div>
            <div className=''>
                <Rating
                    value={product.rating}
                    text={`${product.numReviews} Reviews`} 
                    color='ml-10 text-yellow-400'
                    />
                <p className='font-bold text-xl ml-10'> price <span className='text-red-500 text-3xl'>  {product.price}</span></p>
            </div>
        </div>
    )
};

export default Product;
