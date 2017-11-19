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

type Props = {
    openURL:(url:string)=>void
};

const SlideLOVS = ({openURL}:Props) => (
    <Container>
        <CardPad><CardDeveloperTools onClick={openURL} /></CardPad>
        <CardPad><CardReact onClick={openURL} /></CardPad>
        <CardPad><CardTesting onClick={openURL} /></CardPad>
        <CardPad><CardRedux onClick={openURL} /></CardPad>
        <CardPad><CardLibraries onClick={openURL} /></CardPad>
        <CardPad><CardStudy onClick={openURL} /></CardPad>
    </Container>
);

export default SlideLOVS;