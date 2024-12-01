import React, { useContext, useState } from "react";
import { useNavigate} from 'react-router-dom'
import { ProductContext } from '../Utility/Context'
import {nanoid} from 'nanoid'
import {toast} from 'react-toastify'
const Create = () => {

    const [products,setProducts] = useContext(ProductContext)

    const formSubmitHandler=(e)=>{
        e.preventDefault();   

        if(
          title.trim().length < 5 ||
          price.trim().length < 2 ||
          category.trim().length < 3 ||
          description.trim().length < 5 ||
          image.trim().length < 5
      ){
        alert("Each and every input must have 4 characters!!");
        return;
        }
      
        const product = {
            id:nanoid(),
            title,
            image,
            category,
            description,
            price
        }
        setProducts([...products,product]);
        localStorage.setItem('product',JSON.stringify([...products,product]))
        navigate('/')
        toast.success('Item Added Successfully!!!!');
    }


    const [title,setTitle] = useState('')
    const [price,setprice] = useState('')
    const [category,setcategory] = useState('')
    const [description,setdescription] = useState('')
    const [image,setimage] = useState('')

    const navigate = useNavigate();
    const backHandler =()=>{
        navigate('/')
    }
    
    // console.log(products)

  return (
    <div className="w-full h-screen flex justify-center items-center">
        <button onClick={backHandler} className='absolute top-10 left-7 py-2 px-5 border-red-400 border-2 rounded-md text-lg font-semibold text-red-400 hover:bg-red-400 hover:text-white'>Back</button>

      <form onSubmit={formSubmitHandler} className=" flex flex-col gap-5 w-1/3 h-[75%] border-[1px] rounded-md border-black p-5">
        <h1 className="text-4xl font-semibold">Add Product</h1>
        
        <input 
        type="text" 
        placeholder="Title" 
        className="outline-none w-full border-[1px] border-gray-500 rounded-md px-2 py-1 text-lg font-medium"
        value={title}
        onChange={(e)=>{setTitle(e.target.value)}}
        />

        <input 
        type="url" 
        className="outline-none w-full border-[1px] border-gray-500 rounded-md px-2 py-1 text-lg font-medium"
        placeholder="Image Link" 
        value={image}
        onChange={(e)=>{setimage(e.target.value)}}
        />

        <div className="flex gap-4">

            <input 
            type="number" 
            placeholder="Price" 
            className="outline-none w-full border-[1px] border-gray-500 rounded-md px-2 py-1 text-lg font-medium"
            value={price}
            onChange={(e)=>{setprice(e.target.value)}}
            />
            <input 
            type="text" 
            className="outline-none w-full border-[1px] border-gray-500 rounded-md px-2 py-1 text-lg font-medium"
            placeholder="category" 
            value={category}
            onChange={(e)=>{setcategory(e.target.value)}}
            />
            
        </div>

        <textarea 
        rows={6}
        placeholder="Description here.."
        className="outline-none w-full border-[1px] border-gray-500 rounded-md px-2 py-1 text-lg font-medium"
        value={description}
        onChange={(e)=>{setdescription(e.target.value)}}
        ></textarea>

        <button className='py-2 px-5 w-fit self-center border-blue-400 border-2 rounded-md text-lg font-semibold text-blue-400 hover:bg-blue-400 hover:text-white'>Add Product</button>

      </form>
    </div>
  );
};

export default Create;
