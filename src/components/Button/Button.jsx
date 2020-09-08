import React from 'react';
import './Button.css';

export default props => (
    <>
        <input type="submit" className="btn btn-lg btn-block btn-submit" value={props.value} />
    </>
)