import React from 'react';
import './Point.css';

export default props => (
    
    <div className="point">
        <div className="point__info"><h3>{props.point || 0}</h3><h3 className="point__info__separator">&#47;</h3><h3>{props.value}</h3></div>
    </div>

)