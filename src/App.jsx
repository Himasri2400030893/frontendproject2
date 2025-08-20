import { useState } from 'react'
import {Link} from 'react-router-dom';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Welcome to FrontEnd class in KLU</h1>
      <h2>Today's topic is introduction to React</h2>
      <h3>Today's date is 29.07.2025</h3> 
      <h4>Mandava Himasri</h4>
      <h5>2400030732</h5>
      <div id='section'>
           <div className='card'>
            <img src='images/1.png' alt='image1'></img>
          <label> <Link to="/Page1">Go To Page1</Link></label>  
        </div>
         <div className='card'>
           <img src='images/2.png' alt='image2'></img>
          <label> <Link to="/Page2">Go To Page2</Link></label>  
        </div>
        <div className='card'>
             <img src='images/3.png' alt='image3'></img>
            <label> <Link to="/Page3">Go To Page3</Link></label>
        </div>
        <div className='card'>
           <img src='images/4.png' alt='image4'></img>
          <label><Link to="/Page4">Go To Page4</Link></label>  
        </div>
         <div className='card'>
            <img src='images/5.png' alt='image5'></img>
          <label> <Link to="/Page5">Go To Page5</Link></label>  
        </div>
         <div className='card'>  
          <img src='images/6.png' alt='image6'></img>
          <label> <Link to="/Page6">Go To Page6</Link></label>  
        </div>
      </div>
    </>
  )
}

export default App