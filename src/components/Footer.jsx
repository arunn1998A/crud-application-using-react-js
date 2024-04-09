import React from 'react'
import { Link } from 'react-router-dom'
function Footer() {
  return (
    <div style={{height:'300px'}} className='container mt-5 w-100'>
      <div className='footer-content d-flex justify-content-between'>
        <div style={{width:'400px'}} className='blog'>
        <h5 style={{fontSize:'25px',marginLeft:"-20px",fontWeight:'600'}} className='d-flex'><i className=" me-3 mt-2" style={{fontSize:'30px',color:'white'}}></i>NEWS-HUB</h5>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil ratione laboriosam asperiores, fuga eius harum ullam tempore modi! Corporis earum molestias quasi veritatis, autem quibusdam qui et vel hic recusandae!</p>
        </div>
         <div className='link d-flex flex-column'>
          <Link style={{textDecoration:"none"}} to={'/'}>Home</Link>
          <Link style={{textDecoration:"none"}} to={'/About'}>About</Link>
          <Link style={{textDecoration:"none"}} to={'/AddEditBlog'}>Addglog</Link>
          <Link style={{textDecoration:"none"}} to={'/Blog'}>Blog</Link>
         </div>
         <div className="guides d-flex flex-column">
          <h5>Guides</h5>
          <a href="https://react.dev/" target='_blank' style={{textDecoration:'none'}}>React Js</a>
          <a href="https://react.dev/" target='_blank' style={{textDecoration:'none'}}>React Routing</a>
          <a href="https://react.dev/" target='_blank' style={{textDecoration:'none'}}>React</a>
        </div>
        <div className="contact">
          <h5 >CONTACT US</h5>
          <div className="d-flex">
            <input type="text" className='form-control me-1' placeholder='Eamil Id Please' />
            <button className='btn btn-info'><i className='fa-solid fa-arrow-right mt-2'></i></button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a href=""><i className='fa-brands fa-instagram'></i></a>
            <a href=""><i className='fa-brands fa-facebook'></i></a>
            <a href=""><i className='fa-brands fa-linkedin'></i></a>
            <a href=""><i className='fa-brands fa-whatsapp'></i></a>
          </div>
        </div>
      </div>
      <p className='text-center mt-5'>Copyright &copy;2024 Blog-Hub.Built with React</p>
    </div>
  )
}

export default Footer
