import Link from 'next/link'
import React from 'react'

const WhatsApp = () => {
  return (
    <div class="whatsapp-sticky v-center">
      <div className="whatsapp-msg ptb4 plr12 fc4 mr8 br8 bef pr">
        <span>Need Help? Chat with us</span>
      </div>
      <Link className='whatsapp-btn' href="https://api.whatsapp.com/send?phone=917678356232" target="_blank">
        <img src="/images/whatsapp-icon1.png" alt="WhatsApp"/>
      </Link>
      
    </div>
  )
}

export default WhatsApp
