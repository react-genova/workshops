//@flow
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    font-family: Arial, Helvetica, sans-serif;
    justify-content: space-between;
    font-size: 1.2em;
    background-color: #264d73;
    color: white;
    padding: 0.3em 0.6em;
`;

const Link = styled.a`
    color: white;
`;

const SlideFooter = () => (
    <Container>
        <Link href="mailto:reactgenova@gmail.com" style={{paddingBottom:'0.3em'}} target="_blank">reactgenova@gmail.com</Link>
        <Link href="https://www.facebook.com/reactgenova" target="_blank">https://www.facebook.com/reactgenova</Link>
        <Link href="https://github.com/react-genova" target="_blank">https://github.com/react-genova</Link>
    </Container>
);

export default SlideFooter;