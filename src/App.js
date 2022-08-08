import React, { Component } from 'react';
import Header from './component/dashboard/Header';
import Sliders from './component/dashboard/Sliders';
 
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Sliders />
      </div>
    );
  }
}
 
export default App;