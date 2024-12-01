import React, { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../Utility/Context'
import { useNavigate, useParams, Link } from 'react-router-dom'
import Loading from './Loading'

const Details = () => {
    const [products,setProducts] = useContext(ProductContext)
    const {id} = useParams();

    const [filterData,setfilterdata] = useState(null);

    useEffect(()=>{
      getFilterData();
    },[products,id])

    const getFilterData = ()=>{
      const [object] = products.filter((e)=>e.id == id)
      setfilterdata(object)
    }

    const navigate = useNavigate();
    const backHandler = () =>{
        navigate('/')
    }

    const deleteHandler = (id) =>{
        const deleteProduct = products.filter((e)=>e.id != id);
        setProducts(deleteProduct)
        localStorage.setItem('product',JSON.stringify(deleteProduct));
        navigate('/')
    }

  return filterData ? (
    <div className='w-full h-screen  flex gap-5 justify-center items-center'>

    <button onClick={backHandler} className='absolute top-10 left-7 py-2 px-5 border-red-400 border-2 rounded-md text-lg font-semibold text-red-400 hover:bg-red-400 hover:text-white'>Back</button>

      <div className='w-[40%] h-[70%] overflow-hidden flex justify-center items-center'>
            <img className='w-[95%] h-[95%] object-contain mix-blend-multiply bg-transparent' src={filterData.image} alt="" />
      </div>

      <div className='w-[40%] h-[55%] flex flex-col gap-2 justify-start'>
        <h1 className='text-4xl font-semibold font-serif'>{filterData.title}</h1>
        <h1 className='font-semibold opacity-55'>{filterData.category}</h1>
        <h1 className='text-2xl font-semibold text-pretty'>$ {filterData.price}</h1>
        <h1 className='font-light w-[80%] max-h-[142px] overflow-hidden'>{filterData.description}</h1>

        <div className='w-full flex gap-10 mt-5'>


            <Link to={`/edit/${filterData.id}`} className='py-2 px-5 border-blue-400 border-2 rounded-md text-lg font-semibold text-blue-400 hover:bg-blue-400 hover:text-white'>Edit</Link>


            <button onClick={()=>deleteHandler(filterData.id)} className='py-2 px-5 border-red-400 border-2 rounded-md text-lg font-semibold text-red-400 hover:bg-red-400 hover:text-white'>Delete</button>
        </div>
      </div>

    </div>
  ) : <Loading />;
}

export default Details
