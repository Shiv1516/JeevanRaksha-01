import Link from 'next/link'
import React from 'react'

const WhatsApp = () => {
  return (
    <div class="whatsapp-sticky">
      <Link className='whatsapp-btn' href="https://api.whatsapp.com/send?phone=917838353484" target="_blank">
        <img src="/images/whatsapp-icon1.png" alt="WhatsApp"/>
      </Link>
    </div>
  )
}

export default WhatsApp
