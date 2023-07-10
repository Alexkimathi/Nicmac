import React from 'react'
import './properties.css'
import {Swiper,SwiperSlide, useSwiper} from 'swiper/react'
import 'swiper/css'
import data from './data'

function Properties() {
  return (
    <section className='r-wrapper'>
      <div className='paddings innerWidth r-container'>
        <div className='r-head flexColStart'>
          <span className='orange'>Best Prices</span>
          <span className='primaryText'>Popular Land for sale</span>
        </div>

        <Swiper>
          {
            data.map((card, i)=>(
              <SwiperSlide key={i}>
                <div className='flexColStart r-card'>
                  <img src={card.image} alt='home'/>

                  <span className='secondaryText r-price'>
                    <span style={{color: "orange"}}>Ksh</span>
                    <span>{card.price}</span>
                    </span>
                    <span className='primaryText'>{card.name}</span>
                    <span className='secondaryText'>{card.detail}</span>


                </div>
              </SwiperSlide>
            ))}

        </Swiper>

      </div>

    </section>
  )
}

export default Properties