import React from 'react'

function HeroSection() {
  return (
    <div className='Conatiner-flex-herosection'>
        <div className='inner-container-box'>
        <div>
            <div className='herosection-heading-one'>
                check your 
            </div>
            <div  className='herosection-heading-two' >
            <div> CREDIT SCORE</div>
            </div>
            <div className='herosection-heading-three'>
            Absolutely Free
            </div>
            
            <div className='button-flex'>
                <button className='button-one'>Check Now</button>
                <button className='button-two'>Need Help</button>
            </div>
        </div>
        <div>
            <img src='/Image/Untitled-1 2.png' />
        </div>
        </div>
    </div>
  )
}

export default HeroSection