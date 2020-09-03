import React from 'react';
import Paginator from '../../Aula/Paginator/Paginator';
import Title from '../../Aula/Content/Titulo/Titulo';
import Subtitulo from '../../Aula/Content/Subtitulo/Subtitulo';
import Texto from '../../Aula/Content/Texto/Texto';
import './Aula.css';
import Slide from '../../Aula/Slides/Slide';

export default props => (
 
    <section>
        <header>
            <Paginator />
        </header>
        <article className="container aula__content">
            <Title title="Introdução a Javascript" />
            <Subtitulo subtitle="Dando os primeiros passos com js" />

            <Texto />
            
            <Slide link="https://docs.google.com/presentation/d/e/2PACX-1vSEMn1JmxF-8TMwWMOGlmuNK87SE9o7UkYhcaVzvE0Dtki_Yyjo4-qtxCaeSvxQYWL6xg2ObCSJMOPT/embed?start=false&loop=false&delayms=30000" />
            
            <Subtitulo subtitle="A importância do javascript" />

            <Texto />

            <Texto />

        </article>
        <footer className="footer__aula">
            <Paginator />
        </footer>
    </section>
    
)