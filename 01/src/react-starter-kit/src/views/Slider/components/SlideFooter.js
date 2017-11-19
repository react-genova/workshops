//@flow
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 0.8em;
    background-color: #4286f4;
    color: white;
    padding: 0.3em;
`;

const Link = styled.a`
    color: white;
`;

const SlideFooter = () => (
    <Container>
        <Link href="mailto:reactgenova@gmail.com" style={{paddingBottom:'0.3em'}} target="_blank">reactgenova@gmail.com</Link>
        <Link href="https://github.com/react-genova/" target="_blank">https://github.com/react-genova/</Link>
    </Container>
);

export default SlideFooter;