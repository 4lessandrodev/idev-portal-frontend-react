import React from 'react';
import Nav from '../../components/Nav/Nav';
import Menu from '../../components/Menu/Menu';
import Ranking from '../../components/Templates/Ranking/Ranking';

export default props => (
    <>
        <header>
            <Nav/>
            <Menu />
        </header>
        <main>
            <Ranking title="Ranking"/>
        </main>    
    </>
)