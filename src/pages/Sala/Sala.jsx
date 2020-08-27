import React from 'react';
import Nav from '../../components/Nav/Nav';
import Menu from '../../components/Menu/Menu';
import Sala from '../../components/Templates/Sala/Sala';

export default props => (
    <>
        <header>
            <Nav />
            <Menu />
        </header>
        <main>
            <Sala title="Módulos disponíveis"/>
        </main>    
    </>
)