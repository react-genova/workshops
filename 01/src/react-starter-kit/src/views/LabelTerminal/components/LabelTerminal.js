//@flow
import React from 'react';
import styled from 'styled-components';

type Props = {
    text:string
};

const Container = styled.div`
    display: flex;
    flex-direction: row;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 1.2em;
    background-color: #202020;
    padding: 0.06em;
`;

const Prompt = styled.div`
    color: white;
    padding-left: 0.2em;
    padding-right: 0.2em;
`;

const Command = styled.div`
    color: #A0A0A0;
`;

const LabelTerminal = ({text}:Props) => (
    <Container>
        <Prompt>{">"}</Prompt>
        <Command>{text}</Command>
    </Container>
);

export default LabelTerminal;