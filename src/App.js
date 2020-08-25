import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Sala from './components/Templates/Sala/Sala';
import './normalize.css';

function App() {
  return (
    <>
      <div>
        <Header />
        <Menu />
        <Sala title="Módulos disponíveis" />
      </div>
    </>
  );
}

export default App;
