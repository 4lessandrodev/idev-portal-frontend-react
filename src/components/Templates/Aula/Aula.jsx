import React from 'react';
import Paginator from '../../Aula/Paginator/Paginator';
import Title from '../../Aula/Content/Titulo/Titulo';
import Subtitulo from '../../Aula/Content/Subtitulo/Subtitulo';
import Texto from '../../Aula/Content/Texto/Texto';
import './Aula.css';

export default props => (
 
    <section>
        <header>
            <Paginator />
        </header>
        <article className="container aula__content">
            <Title title="Introdução a Javascript" />
            <Subtitulo subtitle="Dando os primeiros passos com js" />
            <Texto />
        </article>
    </section>
    
)