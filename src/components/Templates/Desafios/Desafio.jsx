import React from 'react';
import Button from '../../Desafio/Button/Button';
import './Desafio.css';

export default props => (
    
    <section className="col-12 desafio__section">
        <article className="col-lg-4 col-md-6 col-sm-12 desafio__section__article">
            <div>
                icone
                <Button label="Cadastrar equipe"/>
            </div>
            <div>
                points / points
                status
            </div>
            <div>
                timer
                em aberto
            </div>
            <div>
                <Button label="Enviar projeto"/>
            </div>
        </article>
        <article className="col-lg-8 col-md-6 col-sm-12 desafio__section__article">
            titulo
            subtitulo
            texto Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo labore cupiditate soluta assumenda velit nesciunt quo quas fuga adipisci quia, perferendis illo tenetur dicta illum architecto laborum, esse recusandae autem.
            imagem
        </article>
    </section>

)