import React from 'react'
import "./Footer.scss"

export default function Footer() {
  return (
    <div className='footer'>
      <div className="contents">
        <div className='d-flex justify-content-center'>
          <div className='pe-2'>  <i class="fa-thin fa-at" ></i> </div>
          Copyright <span className='ps-1'>Reveal</span>. All Rights Reserved
        </div>
        <div>
          Designed by <span className='text-capitalize sk'>suresh kumar</span>
        </div>
      </div>
    </div>
  )
}
