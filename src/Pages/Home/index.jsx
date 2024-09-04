import React from 'react'
import "./home.css"
import E_Learn from '../../components/E_Learn'
import Footer from '../../components/Footer'
import FAQ from '../../components/Accordion'
const Home = () => {
  return (
    <section className='home-page primary-bg '>
     {/* <E_Learn /> */}
      {/*  <Footer /> */}
      <FAQ />
    </section>
  )
}

export default Home
