import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Blogs from './components/Blogs';
import CreateBlog from './components/CreateBlog';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BlogDetail from './components/BlogDetail';
import EditBlog from './components/EditBlog';


function App() {

  return (
    <>
        <div className='bg-primary text-center py-2 shadow-lg'>
            <h1 className='text-white'>Wander & Write & bki b dahk</h1>
        </div>
        {/*<div className='text-center'>
          <h5>hada a khoti wahd maw9i3 iliktroni kanketebo fih blogat </h5>
        </div>*/} 
        <Routes>
            <Route path='/' element={ <Blogs />} />
            <Route path='/create' element={ <CreateBlog />} />
            <Route path='/blog/:id' element={ <BlogDetail />} />
            <Route path='/blog/edit/:id' element={ <EditBlog />} />
        </Routes>   
        <ToastContainer />   
    </>
  )
}

export default App