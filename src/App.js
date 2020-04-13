import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/topAndBottom/Header';
import Footer from './components/topAndBottom/Footer';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlight from './components/Highlights';
import Pricing from './components/Pricing';
import Location from './components/Location';

class App extends Component {
  render() {
    return (
      <div
        className='App'
        style={{ height: '1500px', background: 'cornflowerblue' }}
      >
        <Header />
        <Featured />
        <VenueInfo />
        <Highlight />
        <Pricing />
        <Location />
        <Footer />
      </div>
    );
  }
}

export default App;
