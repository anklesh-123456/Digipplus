import React from 'react'
import { Link } from 'react-router-dom';
import './MypaymentStyle.css';
export const Payment = () => {
  return (
    <>
  <div className='container'>
  
    <div className="payment-menu">
    <h3>PAYMENT NAVIGATION</h3>
<ul className='links'>
  <li>
    <Link className="payment-links" to="/invoice">Invoice</Link>
  </li>
  <li>
    <Link className="payment-links" to="/bankdetail">Bankdetail</Link> 
  </li>
</ul>
    </div>
   
    <div className="payment-recipt">
      <p>Payment Date: <span>Octo 25,2022,11.07 a.m.</span>  Amount Paid: <span> 3150</span> </p>
<p>Payment Mode For Project</p>
<p>K10 Maths Text Book Solution</p>
<p>K12 Maths Text Book Solution</p>
</div>

    </div>


    </>
  )
}
