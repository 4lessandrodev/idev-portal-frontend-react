import React from 'react';
import Number from './Number';
import './Paginator.css';

export default props => (
    <>
        <ul className="paginator">
           <Number value="1" active={true}/>
            <Number value="2"/>
           <Number value="3"/>
           <Number value="4"/>
           <Number value="5"/>
        </ul>
    </>
)