import React from 'react';
import './Search.css';

export default props => (
<div className="input-group input__search">
  <input type={props.type} className="form-control" name={props.name} id={props.name} />
  <div className="input-group-append">
    <button className="btn btn-outline-secondary" type="button"><i className="fas fa-search"></i></button>
  </div>
</div>
)