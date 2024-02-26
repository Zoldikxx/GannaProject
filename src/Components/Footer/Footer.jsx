import React from 'react'
import styles from './Footer.module.css';

export default function Footer() {
  return <>
      <footer className=' position-static bottom-0 mt-5 p-5 ' >
        <div>
            <h5>Get the FreshCart app</h5>
            <p>We will send you a link, open it on your phone to download the app.</p>
        </div>  
        <div className='container p-0'>
            <div className="row">
                <div className='input-footer col-md-9'>
                <input placeholder='Email ..' className=' form-control' type="email" />

                </div>
                <div className='btn-footer col-md-3 mb-3'>
                <button className=' btn btn-sm bg-main text-white m-1 ps-4 pe-4'> Share App Link</button>
                </div>
                <hr />
            </div>
        </div>

        <div className="container p-0">
            <div className=' mt-2 mb-2 icons-footer d-flex justify-content-between'>
                  <div className=' partners d-flex '>
                        <p>Payment Partners</p>
                          <i className="fa-brands fa-cc-amazon-pay ps-2 pt-1"></i>
                          <i className="fa-brands fa-cc-amex ps-2 pt-1"></i>
                          <i className="fa-brands fa-cc-mastercard ps-2 pt-1"></i>
                          <i className="fa-brands fa-cc-paypal ps-2 pt-1"></i>
                  </div>
                  <div className="stores d-flex">
                    <p>Get deliveries with FreshCart</p>
                  <i className="fa-brands fa-app-store ps-3 pt-1"> App Store</i>
                  <i className="fa-brands fa-google-play ps-3 pt-1"> Google Play</i>
                  </div>
            </div>
            <hr />
        </div>
    </footer>
  </>
}
