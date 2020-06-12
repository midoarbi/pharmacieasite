import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Search from './components/search/Search';
import Lastpharmacie from './components/last_pharmacie/Lastpharmacie';
import Inscription from './components/inscription/Inscription';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Navbar/>
       <Search/>
       <Lastpharmacie/>
       <Inscription/>
       
       <Footer/>
      </div>
    );
  }
}

export default App;
