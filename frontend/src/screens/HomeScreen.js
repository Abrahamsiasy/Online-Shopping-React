import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";

// import products from '../products';
import { useDispatch, useSelector } from 'react-redux'
import Product from '../component/Product';
import Loader from '../component/Loader';
import Messages from '../component/Messages';

import { listProducts } from '../actions/productAction';



const HomeScreen = () => {

    const dispach = useDispatch()

    const productList = useSelector(state => state.productList)
    const { loading, error, products } = productList

    // console.log(useParams())


    useEffect(() => {
        dispach(listProducts())
    }, [dispach]
    )
    // const products = []

    return (
        <div>
            <div className='flex content-center  items-center flex-grow px-2 py-3 mr-auto ml-auto flex-wrap md:justify-center lg:justify-start sm:justify-center flex-2'>
                {
                    loading ? <Loader /> :
                        error ? <Messages> {error} </Messages> :
                            products.map((product) =>
                                <Product key={product._id} product={product} sochial />
                            )
                }


            </div>
        </div>
    )
};

export default HomeScreen;
