//@flow
import React from 'react';
import { Container, Important } from '../../Slide';

const SlideEfficient = () => (
    <Container>
        <ul>
            <li>Abstraction through the <Important>Virtual DOM</Important></li>
            <li>The <Important>Reconciliation</Important> algorithm</li>
            <li><Important>React Fiber</Important>: 2 years of core rewriting</li>
        </ul>
    </Container>
);

export default SlideEfficient;