import React from 'react'
import '../Component/Counter.css';

export default function Header() {
    return (
        <>
            <div className="header">
                <div className="logo">
                     <button className='toggle-btn' id='btn'>|||</button>
                    <p>Gucci</p>
                </div>
                <div >
                    <ul className='ul'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Blog</li>
                        <li>Service</li>
                        <li>Contect</li>
                    </ul>
                </div>
            </div>
      
        </>
        
      )
}