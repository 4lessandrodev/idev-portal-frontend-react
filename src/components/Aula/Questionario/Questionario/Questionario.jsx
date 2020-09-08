import React from 'react';
import './Questionario.css';
import Ask from '../Ask/Ask';
import Button from '../../../Button/Button';

export default props => (
    <section className="questionario">
        <form>   
            <Ask description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora cupiditate similique ab quibusdam quam eaque repellat quos, assumenda doloremque." tryNumber={2} />
            <Button value="Confirmar"/>
        </form>
    </section>
)