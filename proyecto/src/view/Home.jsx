import React from 'react'
import LogoBar from '../components/LogoBar'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='logo-intro'>

      <Link to='site'> <LogoBar/> </Link>
        
    </div>
  )
}

export default Home