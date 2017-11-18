//@flow
import React from 'react';
import styled from 'styled-components';

type Props = {
    title:string,
    description:string,
    url:string,
    onClick:(url:string)=>void
};

const Container = styled.div`
    display: 'flex';
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
`;

const Title = styled.div`
    color: black;
    font-size: 1.3em;
    font-weight: bold;
    cursor: pointer;
`;

const Description = styled.div`
    color: darkgray;
`;

const LabelLink = ({title, description, url, onClick}:Props) => (
    <Container>
        <Title onClick={() => onClick(url)} title={url}>{title}</Title>
        <Description>{description}</Description>
    </Container>
);

export default LabelLink;