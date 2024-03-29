import React from 'react'
import logo from '../../projects_assets/freshcart-logo.svg'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css';


export default function NavBar() {
  return <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                  <img src={logo} alt="" />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      
                       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                          <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                          </li>

                          <li className="nav-item">
                            <Link className="nav-link" to='products'>Products</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to='categories'>Categories</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to='cart'>Cart</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to='orders'>Orders</Link>
                          </li>
                      </ul>
                      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                          
                          <li className="nav-item d-flex align-items-center">
                            <i className=' fab mx-2 fa-facebook'> </i>
                            <i className=' fab mx-2 fa-twitter'> </i>
                            <i className=' fab mx-2 fa-instagram'> </i>
                            <i className=' fab mx-2 fa-tiktok'> </i>
                            <i className=' fab mx-2 fa-linkedin'> </i>
                            <i className=' fab mx-2 fa-youtube'> </i>
                          </li>
                          
                            <li className="nav-item">
                            <Link className="nav-link" to='login'>Login</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" to='register'>Register</Link>
                          </li>
                          <li className="nav-item">
                            <Link className="nav-link" >Logout</Link>
                          </li>
                      </ul>
                </div>
          </div>
      </nav>
  </>
}
