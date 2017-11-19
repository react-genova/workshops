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

type TitleProps = { underline:boolean };
const Title = styled.div`
    color: #404040;
    font-size: 1.2em;
    cursor: ${({underline}:TitleProps) => underline ? 'pointer' : 'default'};
    text-decoration: ${({underline}:TitleProps) => underline ? 'underline' : undefined};
`;

const Description = styled.div`
    color: #808080;
`;

const LabelLink = ({title, description, url, onClick}:Props) => (
    <Container>
        <Title onClick={() => onClick(url)} underline={url.length>0} title={url}>{title}</Title>
        <Description>{description}</Description>
    </Container>
);

export default LabelLink;