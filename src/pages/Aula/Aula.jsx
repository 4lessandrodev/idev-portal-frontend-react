import React from 'react';
import Aula from '../../components/Templates/Aula/Aula';
import Menu from '../../components/Menu/Menu';
import Nav from '../../components/Nav/Nav';
import './Aula.css';

export default props => (
    <>
    <header>
        <Nav />
        <Menu />
    </header>
    <main>
        <Aula/>
    </main>    
</>
)