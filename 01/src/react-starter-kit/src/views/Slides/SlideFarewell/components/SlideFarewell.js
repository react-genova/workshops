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
    padding-top: 0.3em;
`;

const Separator = styled.div`
    margin: 6em;
    width: 75%;
    border: 0.035em solid #C8C8C8; //#264d73
`;

const SlideFarewell = () => (
    <Container>
        <Title>Thank You All</Title>
        <Separator />
        <SubTitle>{'https://www.facebook.com/reactgenova'}</SubTitle>
        <SubTitle>{'reactgenova@gmail.com'}</SubTitle>
        <SubTitle>{'https://github.com/react-genova'}</SubTitle>
    </Container>
);

export default SlideFarewell;