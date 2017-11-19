//@flow
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    font-family: Arial, Helvetica, sans-serif;
    background-color: #264d73;
    align-content: center;
    justify-content: center;
    align-items: center;
    padding: 0.6em;
`;

const Title = styled.div`
    font-size: 2em;
    font-weight: bold;
    color: white;
`;

const SubTitle = styled.div`
    font-size: 1.5em;
    color: #A0A0A0;
`;

type Props = {
    title:string,
    description:string,
};

const SlideHeader = ({title, description}:Props) => (
    <Container>
        <Title>{title}</Title>
        <SubTitle>{description}</SubTitle>
    </Container>
);

export default SlideHeader;