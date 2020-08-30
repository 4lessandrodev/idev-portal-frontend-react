import React from 'react';
import Nav from '../../components/Nav/Nav';
import Menu from '../../components/Menu/Menu';
import Desafio from '../../components/Templates/Desafios/Desafio';

export default props => (
    
    <>
        <header>
            <Nav />
            <Menu />
        </header>
        <main>
            <Desafio />
        </main>
    </>

)