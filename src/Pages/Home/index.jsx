import React from 'react'
import "./home.css"
import E_Learn from '../../components/E_Learn'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero/Index'
import FAQ from '../../components/Accordion'
import PriceCards from '../../components/PriceCards/Index'
import Review from '../../components/Review/Index'
import ResponsiveAppBar from '../../components/NavBar/Index'

const Home = () => {
  return (
    <section className='home-page column primary-bg '>
       <ResponsiveAppBar/>
     <Hero/>
      <PriceCards/>
       <E_Learn />  
           <Review/>
      <FAQ />
      <Footer />
    </section>
  )
}

export default Home
