import React, { Component } from 'react';
import './resources/styles.css';

import Header from './components/topAndBottom/Header';
import Featured from './components/featured';
import VenueInfo from './components/venueInfo';
import Highlight from './components/Highlights';

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
      </div>
    );
  }
}

export default App;