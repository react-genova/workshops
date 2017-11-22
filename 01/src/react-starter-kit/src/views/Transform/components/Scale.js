//@flow
import * as React from 'react';
import styled from 'styled-components';

type Props = {
    scale:number,
};

const Transform = styled.div`
    transform: ${({scale}:Props) => `scale(${scale}, ${scale})`};
`;

type ScaleProps = {
    scale:number,
    children:React.Node,
};

const Scale = ({scale, children}:ScaleProps) => <Transform scale={scale}>{children}</Transform>;

export default Scale;