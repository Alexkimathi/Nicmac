// import { useEffect, useState } from "react"
import React,{useState,useEffect} from 'react'
import "./slider.css";
import data from "./data"


function Slider() {
    const [people]= useState(data);
    const[index, setIndex] = useState(0)


    useEffect(()=>{
        const lastIndex = people.length-1
        if (index < 0){
            setIndex(lastIndex)
        }
        if(index > lastIndex){
            setIndex(0)
        }
    }, [index,people])


    useEffect(()=>{
        let slider = setInterval(()=>{
            setIndex(index + 1)
        }, 4000)
        return () => {
            clearInterval(slider)

        }

    }, [index])
  return (
   <section className='section'>
  
    <div className='section-center'>
        {people.map((item, indexPeople)=>{
            const {id ,image} = item;
            let position = "nextSlide"
            if(indexPeople === index){
                position ="activeSlide"
            }
            if(indexPeople === index - 1 || (index === 0 && indexPeople === people.length -1)){
                position = "lastSlide"
            }

            return(
                <article className={position} key={id}>
                    <img src={image} alt="hello" className="person-img" />
                   

                </article>
            )
        })}

    </div>

   </section>
  )
}

export default Slider