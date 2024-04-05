import Link from 'next/link'
import React from 'react'

const WhatsApp = () => {
  return (
    <div class="whatsapp-sticky">
      <Link className='whatsapp-btn' href="https://api.whatsapp.com/send?phone=917011414797" target="_blank">
        <img src="/images/whatsapp-icon1.png" alt="WhatsApp"/>
      </Link>
    </div>
  )
}

export default WhatsApp
