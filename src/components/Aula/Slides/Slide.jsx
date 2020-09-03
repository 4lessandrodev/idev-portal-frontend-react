import React from 'react';
import './Slide.css';

export default props => (
    <div className="aula__slide">
        <iframe className="iframe__embed" src={props.link} frameborder="0" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true"></iframe>
    </div>
)