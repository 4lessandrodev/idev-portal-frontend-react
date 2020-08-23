import React from 'react';
import './Sala.css';

export default props => (
  
    <>
        <section className="container sala">
            <header className="sala__header">
                <h1 className="sala__header__title">{props.title}</h1>  
            </header>
            <main className="sala__main">
                cards
            </main>
        </section>
    </>
    
);