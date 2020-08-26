import React from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Sala from '../../components/Templates/Sala/Sala';

export default props => (
    <>
        <header>
            <Header />
            <Menu />
        </header>
        <main>
            <Sala title="Módulos disponíveis"/>
        </main>    
    </>
)