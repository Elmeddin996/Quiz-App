import React from 'react'
import { Card } from './Card'
import 'bootstrap/dist/css/bootstrap.min.css';


export const Home = () => {
const [isOpen, setIsOpen]=React.useState(false)
    
  return (
    <React.Fragment>
        <h1>Home Page</h1>
       {
        isOpen?
        <div>
            <button className='btn btn-danger' onClick={()=>{
            setIsOpen(!isOpen)
         }}>Back to Home</button>
            <Card/>
        </div>:<button className='btn btn-danger' onClick={()=>{
            setIsOpen(!isOpen)
         }}>Start The Game</button>
       }

     
    </React.Fragment>
  )
}
