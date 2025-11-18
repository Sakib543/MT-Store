/* eslint-disable no-unused-vars */
import react from 'react'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import NewArrivals from '../components/NewArrivals'
import PopularProduct from '../components/PopularProduct'
import Features from '../components/Features'

const Home = () => {
  return (
<>
<Hero />
<Features/>
<NewArrivals/>
<PopularProduct/>
<Footer/>
</>
  )
}

export default Home