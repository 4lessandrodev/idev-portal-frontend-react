import React from 'react';
import './Ask.css';

export default props => (
    <div className="ask">
        <h4 className="ask__content">
            {props.description}
        </h4>
        <h5 className="ask__tentativas__status">Você tem {props.tryNumber} tentativas</h5>
    </div>
)