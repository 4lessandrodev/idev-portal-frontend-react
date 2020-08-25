import React from 'react';
import './Card.css';

export default props => (
    
    
    <div className="card card__component">
        <div className="card-header card__component__header" style={{backgroundColor:`var(--${props.color})`}}></div>
        <div className="card-body card__component__body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.text}</p>
            <a href="#" className="btn btn__card__component" style={{ border: `1px solid var(--${props.color})` }}>{props.btnLabel}</a>
        </div>
    </div>
    
    
);