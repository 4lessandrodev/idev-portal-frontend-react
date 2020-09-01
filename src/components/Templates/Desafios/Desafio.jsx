import React from 'react';
import Button from '../../Desafio/Button/Button';
import Icon from '../../Desafio/Icon/Icon';
import Point from '../../Desafio/Point/Point';
import Status from '../../Desafio/Status/Status';
import Timer from '../../Desafio/Timer/Timer';
import Content from '../../Desafio/Content/Content';
import './Desafio.css';

export default props => (
    
    <section className="col-12 desafio__section">
        <article className="col-lg-4 col-md-6 col-sm-12 desafio__section__article">
            <div>
                <Icon />
                <Button label="Cadastrar equipe"/>
            </div>
            <div>
                <Point value={140}/>
                <Status description="Em aberto"/>
            </div>
            <div>
                <Timer />
            </div>
            <div>
                <Button label="Enviar projeto"/>
            </div>
        </article>
        <Content />
    </section>

)