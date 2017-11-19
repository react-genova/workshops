//@flow
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    z-index: 9999;
    left: 0;
    bottom: 0;
    top: 0;
    right: 0;
`;

const NavBar = styled.div`
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    width: 3em;
    height: 100%;
    background-color: transparent;
    opacity: 0;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`;

const Next = NavBar.extend`
    float: right;
`;

const Previous = NavBar.extend`
    float: left;
`;

const Arrow = styled.div`
    width: 0; 
    height: 0; 
    border-top: 2em solid transparent;
    border-bottom: 2em solid transparent;
`;
const ArrowNext = Arrow.extend`
    border-left: 2em solid #264d73;
`;

const ArrowPrev = Arrow.extend`
    border-right: 2em solid #264d73;
`;

type Props = {
    onNext:()=>void,
    onPrev:()=>void,
};

const SlideNavigator = ({onNext, onPrev}:Props) => (
    <Container>
        <Next onClick={onNext}><ArrowNext /></Next>
        <Previous onClick={onPrev}><ArrowPrev /></Previous>
    </Container>
);

export default SlideNavigator;