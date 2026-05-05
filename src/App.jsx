import { useState } from 'react'
import './App.css'
import './index.css'
import AddProject from './components/AddProject'
import LandingPage from './components/LandingPage'
import SearchProject from './components/SearchProject'

function App() {
  
  return (
    <div className='flex  justify-center perspective-distant'>
      <LandingPage />
      
    </div>
  )
}

export default App
