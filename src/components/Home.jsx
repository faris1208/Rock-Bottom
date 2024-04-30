import React from 'react'
import Heading from './Heading'
import Faq from './Faq'
import Logo from './Logo'
import Features from './Features'

export default function Home() {
  return (
    <div className='home-container'>
        <Heading />
        <Faq />
        <Logo />
        <Features />
    </div>
  )
}
