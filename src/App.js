import React from 'react';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Search from './components/search/Search';
import Lastpharmacie from './components/last_pharmacie/Lastpharmacie';
import Inscription from './components/inscription/Inscription';

const App = () => {
    return (
      <div className="pharmaciesite">
       <Navbar/>
       <Search/>
       <Lastpharmacie/>
       <Inscription/>
       <Footer/>
      </div>
    );
  }

export default App;
