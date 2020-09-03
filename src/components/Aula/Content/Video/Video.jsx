import React from 'react';
import './Video.css';

export default props => (
    <div className="aula__video embed-responsive embed-responsive-16by9">
        <iframe className="iframe__embed embed-responsive-item" src={props.link} frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   </div> 
)
