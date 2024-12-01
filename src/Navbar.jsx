import React, { useContext } from 'react'
import Logo from './assets/Logo.png'
import { ProductContext } from '../Utility/Context'
import { Link } from 'react-router-dom';
const Navbar = () => {
  const [products,setProducts] = useContext(ProductContext);

  let category = products && products.reduce((acc,cv)=>[...acc,cv.category],[])
  category = [...new Set(category)];

  return (
    <div className='w-full flex justify-between items-center px-14 py-2'>

      <Link to={'/'} className='w-20 h-w-20'>
        <img className='w-full h-full object-contain' src={Logo} alt="" />
      </Link>

      <div>
        <ul className='flex justify-evenly gap-7'>
            {category.map((e,i)=><Link to={`/?category=${e}`}><li className='text-lg font-medium'>
              {e}</li></Link>)}
        </ul>
      </div>

      <div>
        <Link to={`/create`} className='px-3 py-2 bg-red-400 rounded-md font-semibold text-white'>Add Product</Link>
      </div>

    </div>
  )
}

export default Navbar
