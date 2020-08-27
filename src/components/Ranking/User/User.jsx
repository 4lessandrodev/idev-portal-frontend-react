import React from 'react';
import './User.css';

export default props => (
    <>
        <div className="ranking__user">
            <div className="ranking__user__header">
                <div className="ranking__user__header__img" style={{ backgroundImage:`url(${props.image})` }}>
                
                </div>
            </div>
            <div className="ranking__user__info">
                <h2 className="ranking__user__info__username">{props.name}</h2>
                <h3 className="ranking__user__info__points">{props.points}</h3>
                <h4 className="ranking__user__info__position">{props.position}</h4>
            </div>
        </div>
    </>
);