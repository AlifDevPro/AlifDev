'use client'

import React, {useEffect} from 'react'
import './review.css'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";


function Review({title, desc, name, avatar, rating}) {
 
  return (
    <div className='review'>
        <h2 className='reviewHeader'>{title}</h2>
        <p className='reviewDesc'>{desc}</p>
        <div className='reviewFooter'>
            <div className='reviewer'>
                <div className='reviewerAvatar'>
                    <Image src={avatar} alt='reviewer' width='100' height='100' />
                </div>
                <span>{name}</span>
            </div>
            <div className='reviewStar'>
                <FaStar className='star'/>
                <FaStar className='star'/>
                <FaStar className='star'/>
                <FaStar className='star'/>
                <FaStar className='star'/>
            </div>
        </div>
    </div>
  )
}

export default Review