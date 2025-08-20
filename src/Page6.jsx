import React, { Component } from 'react'
import'./css/Page6.css'

export default class Page6 extends Component {
  render() {
    return (
      <>
      <div id='header'>
        <div className='logo'>
                    My Project Logo
               </div></div>
       <div id='section'>
                    <div className='card'>
                         <img src='images/1.png' alt='image1'></img>
                         <label>Starbucks</label>
                    </div>
                    <div className='card'>
                         <img src='images/2.png' alt='image2'></img>
                         <label>Mcdonald's</label>
                    </div>
                    <div className='card'>
                         <img src='images/3.png' alt='image3'></img>
                         <label>Rolex</label>
                    </div>

          </div>
          <div id='footer'>Copyright @ 2025. All rights reserved.</div>
      </>
    )
  }
}
