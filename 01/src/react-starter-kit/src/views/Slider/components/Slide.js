//@flow
import * as React from 'react';
import styled from 'styled-components';

import SlideHeader from './SlideHeader';
import SlideFooter from './SlideFooter';

const Container = styled.div`
    display: flex;
    min-height: 100vh;
    flex-direction: column;
`;

const SlideBody = styled.div`
    display: flex;
    justify-content: center;
    flex: 1;
    background-color: #dae6f1;
    margin-top: 0.2em;
    margin-bottom: 0.2em;
`;

type Props = {
    title:string,
    description:string,
    children?:React.Node,
};

const Slide = ({title, description, children}:Props) => (
    <Container>
        <SlideHeader title={title} description={description} />
        <SlideBody>{children}</SlideBody>
        <SlideFooter />
    </Container>
);

export default Slide;