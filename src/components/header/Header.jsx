import React from 'react';
import { AiOutlineDown } from 'react-icons/ai';

function Header() {
  return (
    <div className='navbar-container'>
        <div className="flex-justify-center">
        <div>filcon</div>
        <div className='flex-row' >
            <div className='flex'>
                Service <AiOutlineDown/>
            </div>
            <div>
                About
            </div>
            <div className='flex'>
                Tools <AiOutlineDown/>
            </div>
            <div>
                Contact Us
            </div>

        </div>

        <div  className='flex-row-signin'>
            <div>SignIN</div>
            <div>|</div>
            <div>Signout</div>
        </div>
        </div>
    </div>
  )
}

export default Header