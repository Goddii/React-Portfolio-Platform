import { useState } from 'react'
import './App.css'
import './index.css'
import AddProject from './components/AddProject'
import LandingPage from './components/LandingPage'
import SearchProject from './components/SearchProject'

function App() {
  
  return (
    <div className='min-h-screen bg-slate-950 flex justify-center items-center perspective-distant bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-black'>
      <LandingPage />
      
    </div>
  )
}

export default App
