import React from 'react';

export default props => (
    <div className="form-group">
        <label htmlFor={props.name}>{props.label}</label>
        <input type={props.type} className="form-control" name={props.name} id={props.name} />
    </div>
)