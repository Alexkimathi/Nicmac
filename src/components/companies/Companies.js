import React from 'react'
import './companies.css'
import logo1 from "../../img/logo1.png"
import logo2 from "../../img/logo2.png"
import logo3 from "../../img/logo3.png"
import logo4 from "../../img/logo4.jpg"
import logo5 from "../../img/logo5.jpg"
import logo6 from "../../img/logo6.jpg"
import logo7 from "../../img/logo7.png"

function Companies() {
  return (
    <section className='c-wrapper'>
        
        <div className='c-container'>
            <img src={logo1} alt=''/>
            <img src={logo2} alt=''/>
            <img src={logo3} alt=''/>
            <img src={logo4} alt=''/>
            <img src={logo5} alt=''/>
            <img src={logo6} alt=''/>
            <img src={logo7} alt=''/>

        </div>


    </section>
  )
}

export default Companies