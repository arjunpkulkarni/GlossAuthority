import React from 'react';
import './App.css';

import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Packages from './components/Packages/Packages';
import FAQ from './components/FAQ/FAQ';
import Booking from './components/Booking/Booking';
import CallToAction from './components/CallToAction/CallToAction';
import Footer from './components/Footer/Footer';

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
