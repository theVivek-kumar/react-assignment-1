import React from 'react'

function Subscribe() {
  return (
    <section>

        <div className='container-box-flex'>
            <p className='heading1'>
                Subscribe Our Newsletter
            </p>
            <p className='heading2'>
               Scubscribe to our email & get Updates right your inbox 
            </p>
            <div ><input className='email-ex' type='email' placeholder="Email Address"/></div>
            <div className='subscribe-btn'> <button className='btn-btn'>Subscribe Now</button></div>
            <div> by subscribe you agree to our Policies</div>
        </div>
    </section>
  )
}

export default Subscribe