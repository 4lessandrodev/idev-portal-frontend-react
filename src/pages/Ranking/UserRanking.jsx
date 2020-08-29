import React from 'react';
import Nav from '../../components/Nav/Nav';
import Menu from '../../components/Menu/Menu';
import UserRanking from '../../components/Templates/Ranking/UserRanking';
import './Ranking.css';

export default props => (
    <>
        <header>
            <Nav/>
            <Menu />
        </header>
        <main className="ranking__page">
            <UserRanking title="Ranking"/>
        </main>    
    </>
)