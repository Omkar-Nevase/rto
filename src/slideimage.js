import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import slide1 from '../src/DashBoard_Images/akam-saath-prayas.jpg'
import slide2 from '../src/DashBoard_Images/Road-Safety-Banner.jpg'
import slide3 from '../src/DashBoard_Images/banner2_0.jpg'


const spanStyle = {
    padding: '20px',
    background: '#efefef',
    color: '#000000'
  }
  
  const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '400px'
  }
  const slideImages = [
    {
      url: slide2
    },
    {
      url: slide1
    },
    {
      url: slide3
    },
  ];


const Slideshow = () => {
    return (
      <div className="slide-container" style={{padding : '10px'}}>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div key={index}>
              <div style={{ ...divStyle, 'backgroundImage': `url(${slideImage.url})` }}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}


export default Slideshow;