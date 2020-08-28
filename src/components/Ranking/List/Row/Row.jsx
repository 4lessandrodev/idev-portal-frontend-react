import React from 'react';
import Avatar from './Avatar';
import './Row.css';

export default props => (
    <tr className="row__line">
        <th scope="row"><Avatar image={props.image}/></th>
        <td>Nome</td>
        <td>Pontos</td>
        <td># Posição</td>
    </tr>
)