import React from 'react'
import Navbar from '../Components/Navbar'
import Banner from '../Components/Banner'
import SpeedOmeter from '../Components/SpeedOmeter'
import View360 from '../Components/View360'

export default function Homepage() {
  return (
    <div>
        <Navbar/>
        <Banner/>
        <SpeedOmeter/>
        <View360/>
    </div>
  )
}
