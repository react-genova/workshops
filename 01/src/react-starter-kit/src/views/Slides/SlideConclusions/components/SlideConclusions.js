//@flow
import React from 'react';
import styled from 'styled-components';

import CardConclusions from './CardConclusions';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-evenly;
    align-items: center;
    align-content: center;
`;

const SlideConclusions = () => (
    <Container>
        <CardConclusions />
    </Container>
);

export default SlideConclusions;