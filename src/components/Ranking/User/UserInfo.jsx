import React from 'react';
import './UserInfo.css';

export default props => (
    <section className="section__info">
        <div  className="section__info__contacts">
            <div className="section__info__contacts__item">
                <a href="http://" className="link"><i className="fab fa-github"></i></a>
            </div>
            <div className="section__info__contacts__item">
                <a href="http://" className="link"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className="section__info__contacts__item">
                <a href="http://" className="link"><i className="fas fa-envelope"></i></a>
            </div>
        </div>
            
        <div  className="section__info__ponts">
            <div className="section__info__points__item">
                {props.points || "0.0 pontos"}
            </div>
            <div className="section__info__points__item">
                {props.time || "0.0 minutos"}
            </div>
        </div>
    </section>
);