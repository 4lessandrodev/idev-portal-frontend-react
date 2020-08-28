import React from 'react';
import Row from '../Row/Row';
import './Table.css';

export default props => (
<table class="table table-hover ranking__table">
  <thead>
    <tr>
      <th scope="col">Avatar</th>
      <th scope="col">Nome</th>
      <th scope="col">Pontos</th>
      <th scope="col">Posição</th>
    </tr>
  </thead>
  <tbody>
    <Row image="https://pbs.twimg.com/profile_images/935243831536181248/OTZTMApG.jpg"/>
    <Row image="https://i.pinimg.com/236x/92/f0/ed/92f0edd9b0ecefdd5b7a48b8e1f7d340.jpg"/>
    <Row image="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcShF0r8yEvPiUD5cJH1w-rRXZ3KnN0nrFPzJg&usqp=CAU"/>
    <Row image="https://pbs.twimg.com/profile_images/1184488774505353218/Msvnpkcg_400x400.jpg"/>
    <Row image="https://jamccormack.com/tribute-images/677/Ultra/Daniel-Berry.jpg"/>
  </tbody>
</table>
)