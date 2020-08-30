import React from 'react';
import './Button.css';

export default props => (
    <>
        <input type="button" value={props.label} className="btn generic__button" />
    </>
)