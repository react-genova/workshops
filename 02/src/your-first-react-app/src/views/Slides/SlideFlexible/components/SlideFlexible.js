//@flow
import React from 'react';
import { Container, Important } from '../../Slide';

const SlideFlexible = () => (
    <Container>
        <ul>
            <li>Only the <Important>view</Important>, rest is free</li>
            <li><Important>Component</Important> based</li>
            <li><Important>JSX</Important>, unlish your Javascript</li>
            <li><Important>Declarative</Important> vs imperative</li>
            <li>UI as a <Important>pure function</Important> of your model</li>
        </ul>
    </Container>
);

export default SlideFlexible;