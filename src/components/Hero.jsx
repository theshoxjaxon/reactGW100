import React from 'react'
import { FaInstagramSquare } from "react-icons/fa";
const Hero = ({ head, img, text }) => {
    return (
        <div>
            <div>
                <img src={img} alt="hero" />
                <h1>{head}</h1>
                <p>{text}</p>
                <span><FaInstagramSquare /></span>
            </div>

        </div>
    )
}

export default Hero