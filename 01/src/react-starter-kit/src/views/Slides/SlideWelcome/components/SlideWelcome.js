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

const Separator = styled.div`
    margin: 4em;
    width: 75%;
    border: 0.035em solid #C8C8C8; //#264d73
`;

const Install = styled.div`
    font-size: 1.5em;
    color: #808080;
    padding-top: 1em;
`;

const SlideWelcome = () => (
    <Container>
        <Title>react-genova</Title>
        <SubTitle>workshop 01 - React Starter Kit</SubTitle>
        <Separator />
        <Install>{'git clone https://github.com/react-genova/workshops'}</Install>
        <Install>{'cd ./workshops/01/src/react-starter-kit'}</Install>
        <Install>{'npm install'}</Install>
        <Install>{'npm start'}</Install>
    </Container>
);

export default SlideWelcome;