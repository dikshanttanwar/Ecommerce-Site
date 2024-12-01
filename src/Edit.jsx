import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams} from 'react-router-dom'
import { ProductContext } from '../Utility/Context'

const Edit = () => {
    const [products,setProducts] = useContext(ProductContext)
    const {id} = useParams();
    const navigate = useNavigate();
    const [product,setProduct] = useState({
        title : '',price:'',category:'',image:'',description:''
    });
    
    const onchangeHandler = (e)=>{
        setProduct({...product,[e.target.name]:e.target.value})
    }

    // const getFilterData = ()=>{
    //     const [object] = products.filter((e)=>e.id == id)
    //     setProduct(object)
    // }

    useEffect(() => {
        setProduct(products.filter((e) => e.id == id)[0]);
    }, [id]);


    // useEffect(()=>{
    //     getFilterData()
    // },[id])

    const formSubmitHandler=(e)=>{
        e.preventDefault();   

        const index = products.findIndex((e) => e.id == id);
        const copydata = [...products];
        copydata[index] = {...products[index],...product}
        // console.log(copydata)
        setProducts(copydata);
        localStorage.setItem('product',JSON.stringify(copydata));
        navigate(-1)
        // console.log(products)
    }

    const backHandler =()=>{
        navigate(-1)
    }
  return (
    <div className="w-full h-screen flex justify-center items-center">
        <button onClick={backHandler} className='absolute top-10 left-7 py-2 px-5 border-red-400 border-2 rounded-md text-lg font-semibold text-red-400 hover:bg-red-400 hover:text-white'>Back</button>

      <form onSubmit={formSubmitHandler} className=" flex flex-col gap-5 w-1/3 h-[75%] border-[1px] rounded-md border-black p-5">
        <h1 className="text-4xl font-semibold">Edit Product</h1>
        
        <input 
        type="text" 
        placeholder="Title" 
        className="outline-none w-full border-[1px] border-gray-500 rounded-md px-2 py-1 text-lg font-medium"
        value={product && product.title}
        onChange={onchangeHandler}
        name="title"
        />

        <input 
        type="url" 
        className="outline-none w-full border-[1px] border-gray-500 rounded-md px-2 py-1 text-lg font-medium"
        placeholder="Image Link" 
        value={product && product.image}
        onChange={(e)=>{setimage(e.target.value)}}
        name="image"
        />

        <div className="flex gap-4">

            <input 
            type="number" 
            placeholder="Price" 
            className="outline-none w-full border-[1px] border-gray-500 rounded-md px-2 py-1 text-lg font-medium"
            value={product && product.price}
            onChange={(e)=>{setprice(e.target.value)}}
            name="price"
            />
            <input 
            type="text" 
            className="outline-none w-full border-[1px] border-gray-500 rounded-md px-2 py-1 text-lg font-medium"
            placeholder="category" 
            value={product && product.category}
            onChange={(e)=>{setcategory(e.target.value)}}
            name="category"
            />
            
        </div>

        <textarea 
        rows={6}
        placeholder="Description here.."
        className="outline-none w-full border-[1px] border-gray-500 rounded-md px-2 py-1 text-lg font-medium"
        value={product && product.description}
        onChange={(e)=>{setdescription(e.target.value)}}
        name="description"
        ></textarea>

        <button className='py-2 px-5 w-fit self-center border-blue-400 border-2 rounded-md text-lg font-semibold text-blue-400 hover:bg-blue-400 hover:text-white'>Edit Product</button>

      </form>
    </div>
  );
}

export default Edit
