import React from 'react';
import image from '../images/sahil.jpg'
export default function Navbar()
{
    return(
        <div>
            <nav>
                <img src={image} alt='Sohail' />
                <h2>Some Interesting Facts about Sahil Nigam (aka Sohail)</h2>
            </nav>
        </div>
    )
}