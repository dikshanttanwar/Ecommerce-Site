import React from 'react'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import Details from './Details'
import Create from './Create'
import Edit from './Edit'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/details/:id' element={<Details />} />
        <Route path='/create' element={<Create />} />
        <Route path='/edit/:id' element={<Edit/>} />
      </Routes>
    </div>
  )
}

export default App
