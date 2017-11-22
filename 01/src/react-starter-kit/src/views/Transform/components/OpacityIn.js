//@flow
import * as React from 'react';
import styled, { keyframes } from 'styled-components';

export const keyFrameExampleOne = keyframes`
0% {
    opacity: 0;
}
100% {
    opacity: 1;
}
`

const Transformation = styled.div`
    animation-name: ${keyFrameExampleOne};
    animation-duration: 1.5s;
`;

type Props = {
    children:React.Node,
};

const OpacityIn = ({children}:Props) => <Transformation>{children}</Transformation>;

export default OpacityIn;