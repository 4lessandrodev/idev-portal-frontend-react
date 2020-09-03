import React from 'react';
import './Number.css';

export default props => {
    let color = 'var(--orange)';
    if (props.active) {
        color = 'var(--light-blue)';
    }

    return (
        <li className="paginator__item" style={{ backgroundColor: color }}>
            <a href="http://#link" className="paginator__item__link">{props.value}</a>
        </li>
    )
}