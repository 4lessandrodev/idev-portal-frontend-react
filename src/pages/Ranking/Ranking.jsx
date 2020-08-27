import React from 'react';
import Header from '../../components/Header/Header';
import Menu from '../../components/Menu/Menu';
import Ranking from '../../components/Templates/Ranking/Ranking';

export default props => (
    <>
        <header>
            <Header/>
            <Menu />
        </header>
        <main>
            <Ranking />
        </main>    
    </>
)