import React from 'react';
import './App.css';
import Nav1 from './components/Nav1';
import RouterMain from './Routers/RouterMain';
import Footer from './components/homePage/footer';


function App() {
  return (
    <div className="App">
     <Nav1/>
     <RouterMain/>
     <Footer/>
    </div>
  );
}

export default App;
