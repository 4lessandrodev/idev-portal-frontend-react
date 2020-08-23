import React from 'react';
import './Menu.css';

export default props => (
    <>
        <div className="background-menu">
            <ul id="menu">
                <li className="nav-item active">
                    <a className="nav-link" href="#">Sala <span className="sr-only">Atual</span></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Desafios</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Ranking</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Avaliações</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Timeline</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sair</a>
                </li>
            </ul>
        </div>
    </>
);