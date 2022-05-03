import React, { useState } from 'react'
import Navbar from './Navbar'
import Overview from './Overview'
import Social from './Social'

function Dashboard() {
  const [toggle, setToggle] = useState("Dark")
  const handleChange = (e) => {
    const {checked} = e.target
    setToggle(checked ? "Light" : "Dark")
    checked ? document.body.classList.add('Light') :
      document.body.classList.remove('Light')
  }
  return (
    <main>
      <Navbar toggle={toggle} handleChange={(e) => handleChange(e)} />
      <Social toggle={toggle} />
      <Overview toggle={toggle} />
    </main>
  )
}

export default Dashboard