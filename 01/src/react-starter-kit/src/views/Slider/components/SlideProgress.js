//@flow
import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    position: absolute;
    bottom: 2.7em;
    backgroundColor: transparent;
`;

type ProgressProps = {
    selected:boolean
};

const Progress = styled.div`
    height: 0.6em;
    width: 0.6em;
    border: 0.1em solid #264d73;
    border-radius: 0.6em;
    margin: 0 0.3em;
    background-color: ${({selected}:ProgressProps)=>selected ? '#264d73' : 'transparent'};
`;

const toArray = (count:number):Array<number> => {
    const array:Array<number> = [];
    while(--count>=0) array.push(count);
    return array.reverse();
};

const SlideProgress = ({selected, count}:{selected:number, count:number}) => (
    <Container>
    { toArray(count).map((v,index) => <Progress key={index} selected={v===selected} />) }
    </Container>
);

export default SlideProgress;