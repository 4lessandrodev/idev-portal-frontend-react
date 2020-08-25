import React from 'react';
import './Sala.css';
import Card from '../../Card/Card';

export default props => (
  
    <>
        <section className="container sala">
            <header className="sala__header">
                <h1 className="sala__header__title">{props.title}</h1>  
            </header>
            <main className="sala__main">
                <Card title="Introdução a javascript" color="orange" btnLabel="Acessar"/>
                <Card title="Introdução a testes" color="orange" btnLabel="Acessar"/>
                <Card title="Introdução a MVC" color="orange" btnLabel="Acessar"/>
                <Card title="Introdução a MySQL" color="orange" btnLabel="Acessar"/>
            </main>
        </section>
    </>
    
);