import React from 'react';
import './App.css';
import NavbarFirst from './components/homePage/NavbarFirst';
import RouterMain from './Routers/RouterMain';




function App() {
  return (
    <div className="App">
     <NavbarFirst></NavbarFirst>
     <RouterMain></RouterMain>
    </div>
  );
}

export default App;