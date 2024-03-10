import React from 'react'
import Banner from './Banner'
import HomeCategory from './HomeCategory'
import LocationSprade from './LocationSprade'
import AboutUs from './AboutUs'
import AppSection from './AppSection'
import Sponsor from './Sponsor'
import CategoryShowCase from './CategoryShowCase'

const Home = () => {
  return (
    <div>
        <Banner/>
        <HomeCategory/>
        <CategoryShowCase/>
        <LocationSprade/>
        <AboutUs/>
        <AppSection/>
        <Sponsor/>
    </div>
  )
}

export default Home