import React from 'react'
import { Header } from './Header/Header'
import { Banner } from '../components/Banner/Banner'
import { Calm } from '../components/Calm/Calm'
import { Chakaras } from '../components/Chakaras/Chakaras'
import { Waitlist } from '../components/Waitlist/Waitlist'
import { Footer } from './Footer/Footer'

export const Layout = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <Calm/>
    <Chakaras/>
    <Waitlist/>
    <Footer/>
    </>
  )
}
