import React from 'react'
import qrimg from '../assets/img/image-qr-code.png'

function Qr() {
  return (
    <>
        <article className='qr-card'>
            <img src={qrimg} alt="qr-code-img" className='card-img' />
            <h1>Improve your front-end skills by building projects</h1>
            <div className='card-desc'>
                <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
            </div>
        </article>
    </>
  )
}

export default Qr



