import React, { useEffect, useState } from 'react';
// import products from '../products';
import Product from '../component/Product';
import axios from 'axios';



const HomeScreen = () => {
    const [products, setProducts] = useState([])

    useEffect( () => {
        const fetchProducts = async () => {
            const res = await axios.get('/api/products')
            setProducts(res.data)
            }
            fetchProducts()
        }, []
    )
    return (
        <div className='flex content-center  items-center flex-grow px-2 py-3 mr-auto ml-auto flex-wrap md:justify-center lg:justify-start sm:justify-center flex-2'>
            
            {
                products.map((product) =>

                    <Product key={product._id} product={product} sochial />
                )
            }
        </div>
    )
};

export default HomeScreen;
