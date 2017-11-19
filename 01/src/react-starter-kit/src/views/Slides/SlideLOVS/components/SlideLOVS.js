//@flow
import React from 'react';
import styled from 'styled-components';

import CardDeveloperTools from './CardDeveloperTools';
import CardLibraries from './CardLibraries';
import CardReact from './CardReact';
import CardRedux from './CardRedux';
import CardStudy from './CardStudy';
import CardTesting from './CardTesting';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-evenly;
    align-items: flex-start;
    align-content: center;
`;

const CardPad = styled.div`
    padding: 0.4em;
`;

const SlideLOVS = () => (
    <Container>
        <CardPad><CardDeveloperTools /></CardPad>
        <CardPad><CardReact /></CardPad>
        <CardPad><CardTesting /></CardPad>
        <CardPad><CardRedux /></CardPad>
        <CardPad><CardLibraries /></CardPad>
        <CardPad><CardStudy /></CardPad>
    </Container>
);

export default SlideLOVS;