//@flow
import React from 'react';
import styled from 'styled-components';

type Props = {
    title:string,
    description:string,
    url:string,
};

const Container = styled.div`
    display: 'flex';
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
`;

const Title = styled.a`
    color: #000080;
    font-size: 1.4em;
`;

const Description = styled.div`
    font-size: 1.2em;
    color: #808080;
`;

const LabelLink = ({title, description, url}:Props) => (
    <Container>
        <Title href={url.length>0 ? url : undefined} title={url} target="_blank">{title}</Title>
        <Description>{description}</Description>
    </Container>
);

export default LabelLink;