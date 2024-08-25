import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'

let x="jkjkhkhhkh"
function App() {
  

  return (
    <>
    <Navbar y={x}/>
    <Outlet/>
    
    
    </>
  )
}

export default App
