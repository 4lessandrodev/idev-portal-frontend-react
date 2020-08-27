import React from 'react';
import './Ranking.css';
import User from '../../Ranking/User/User';

export default props => (
  
    <>
        <section className="container ranking">
            <header className="ranking__header">
                <h1 className="ranking__header__title">Ranking</h1>  
            </header>
            <main className="ranking__main">
                <User name="Pedro" points="560" position="#1 - Lugar" image="https://pbs.twimg.com/profile_images/806683021084655617/kok9CbUh_400x400.jpg"/>
                
                <User name="Larissa" points="450" position="#2 - Lugar" image="https://pbs.twimg.com/profile_images/598145428404699136/Bg1pJ_pG.jpg" />
                
                <User name="Lucas" points="370" position="#3 - Lugar" image="https://img.r7.com/images/rafael-rizzojpg-24032018225528021"/>
            </main>
        </section>
    </>
    
);