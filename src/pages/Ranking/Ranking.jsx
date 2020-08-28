import React from 'react';
import Nav from '../../components/Nav/Nav';
import Menu from '../../components/Menu/Menu';
import Ranking from '../../components/Templates/Ranking/Ranking';
import './Ranking.css';

export default props => (
    <>
        <header>
            <Nav/>
            <Menu />
        </header>
        <main className="ranking__page">
            <Ranking title="Ranking"/>
        </main>    
    </>
)