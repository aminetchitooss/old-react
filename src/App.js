import React, { Component } from 'react';
import Slideshow from './lib';
import VehicleGallery from './lib/test';
import './App.css';

class App extends Component {
  render() {
    const images = [
      'images/slide_2.jpg',
      'images/slide_3.jpg',
      'images/slide_4.jpg',
      'images/slide_5.jpg',
      'images/slide_6.jpg'
    ]
    return (
      <div className="App">
        <p>hello world</p>
        {/* <Slideshow images={images} /> */}
        <VehicleGallery  />
      </div>
    );
  }
}

export default App;
