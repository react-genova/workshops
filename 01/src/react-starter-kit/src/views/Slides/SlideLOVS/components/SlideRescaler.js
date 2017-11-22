//@flow
import * as React from 'react';
import styled from 'styled-components';

import { Scale } from '../../../Transform';

const Container = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content:space-evenly;
    align-items: center;
    align-content: center;
`;

type Props = {
    children:React.Node,
    scale?:number,
};

const SlideRescaler = ({children, scale=2}:Props) => (
    <Container>
        <Scale scale={scale}>{children}</Scale>
    </Container>
);

export default SlideRescaler;