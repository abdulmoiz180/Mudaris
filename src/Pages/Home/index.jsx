import React from 'react'
import "./home.css"
import HeroPage from '../../components/Hero_Page/Index'
import E_Learn from '../../components/E_Learn'
import Footer from '../../components/Footer'
const Home = () => {
  return (
    <section>
      <HeroPage/>
      <E_Learn />
      <Footer />
    </section>
  )
}

export default Home
