import React from 'react'
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {
  return (
    <>
    <div className='parent'>
    <div className="btn">
      <h1>Multiple Choice Questions<br /> for 
       HTML, Java, and SQL</h1>
     <Link to='/java'> <button>Start test</button>
     </Link></div></div>
    </>
  )
}

export default Home
