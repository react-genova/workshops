//@flow
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    font-family: Arial, Helvetica, sans-serif;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.div`
    font-size: 7em;
`;

const SubTitle = styled.div`
    font-size: 3em;
    color: #808080;
    padding-top: 1em;
`;

const SlideWelcome = () => (
    <Container>
        <Title>react-genova</Title>
        <SubTitle>workshop 01 - React Starter Kit</SubTitle>
    </Container>
);

export default SlideWelcome;