import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Sala from './components/Templates/Sala/Sala';

function App() {
  return (
    <>
      <Header />
      <Menu />
      <Sala title="Módulos disponíveis"/>
    </>
  );
}

export default App;
