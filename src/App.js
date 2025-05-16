import React from 'react';
import './App.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ImageGallery from './components/ImageGallery';
import Packages from './components/Packages';
import FAQ from './components/FAQ';
import Booking from './components/Booking';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ImageGallery />
      <Packages />
      <FAQ />
      <Booking />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;
