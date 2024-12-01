import React from 'react'
import { Link } from 'react-router-dom'
import LogoBar from '../components/LogoBar'

const Home = () => {
  return (
    <div className='logo-intro container-flex'>

      <Link to='site'> <LogoBar/> </Link>
        
    </div>
  )
}

export default Home