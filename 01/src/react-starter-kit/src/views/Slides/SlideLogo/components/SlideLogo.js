//@flow
import React from 'react';
import logo from '../resources/react.jpg';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    max-height: 100vh;
    flex-direction: column;
    background-color: black;
`;

const Logo = styled.img`
    width: 100%;
    margin: auto;
`;

const SlideLogo = () => <Container><Logo src={logo} /></Container>;

export default SlideLogo;