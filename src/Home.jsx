import React, { useContext, useEffect, useState } from 'react'
import Navbar from './Navbar'
import Loading from './Loading'
import {ProductContext} from '../Utility/Context'
import {Link, useAsyncError, useLocation} from 'react-router-dom'
import axios from '../Utility/axios'
const Home = () => {
    const [products,setProducts] = useContext(ProductContext);
    const {search} = useLocation();
    const category = decodeURIComponent(search.split('=')[1]);
    // console.log(products)
    const [filteredProduct,setfilteredProduct] = useState(null);

    // const filterProduct =async ()=>{
    //     try {
    //         const {data} = await axios.get(`products/category/${category}`)
    //         setfilteredProduct(data);
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    useEffect(()=>{
        if(!filteredProduct || category == 'undefined'){setfilteredProduct(products)}
        if(category != 'undefined'){
            // filterProduct()
            setfilteredProduct(products.filter((e)=>e.category == category))
        }
    },[category,products])


    // console.log(filteredProduct)
  return filteredProduct ? (
    <div className='w-full h-screen '>
        <Navbar/>
        <div className='min-w-1/2 w-full h-full p-10 flex flex-wrap gap-6'>

            {filteredProduct && filteredProduct.map((e,i)=>
            <Link to={`/details/${e.id}`} className='card w-[15%] h-[33vh] border-[1px]  border-zinc-400 rounded-md flex flex-col justify-start gap-3 p-3 items-center'>

                <div className='w-[76%] h-[76%] rounded-md overflow-hidden hover:overflow-visible '>
                    <img className='w-full h-full object-contain hover:scale-105' src={e.image} alt="" />
                </div>
                <div className=' w-full h-9 overflow-hidden'>
                    <h1 className='text-lg font-medium tracking-tight leading-none text-center'>{e.title}</h1>
                </div>
                
            </Link>
            )}

        </div>
    </div>
  ) : <Loading /> ;
}

export default Home
