import React from 'react';
import products from '../products';
import Product from '../component/Product';


const HomeScreen = () => {
    return (
        <div className='flex content-center  items-center flex-grow px-2 py-3 w-full flex-wrap md:justify-center lg:justify-start sm:justify-center flex-1'>  
            {
                products.map( (product) => 
                
                <Product key={product._id} product={product} sochial/>
                )
            }
        </div>
    )
};

export default HomeScreen;
