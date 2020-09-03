import React from 'react';
import './Slide.css';

export default props => (
    <div className="aula__slide embed-responsive embed-responsive-16by9">
        <iframe className="iframe__embed embed-responsive-item" src={props.link} frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    </div>
)