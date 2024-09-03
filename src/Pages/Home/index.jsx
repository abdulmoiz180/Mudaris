import React from 'react'
import "./home.css"
import E_Learn from '../../components/E_Learn'
import Footer from '../../components/Footer'
import Hero from '../../components/Hero/Index'
const Home = () => {
  return (
    <section>
      <Hero/>
      <E_Learn />
      <Footer />
    </section>
  )
}

export default Home
