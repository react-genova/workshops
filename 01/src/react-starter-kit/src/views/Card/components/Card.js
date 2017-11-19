//@flow
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 0.5em;
    border: 0.035em solid #C8C8C8;
`;

const Title = styled.div`
    padding: 0.5em;
    font-size: 1.4em;
    font-weight: bold;
    font-family: Arial, Helvetica, sans-serif;
`;

const Header = styled.div`
    border-bottom: 0.035em solid #C8C8C8;
`;

const Body = styled.div`
    padding: 0.5em;
`;

type Props = {
    title:string,
    children?:React.Node,
};
const Card = ({title, children}:Props) => (
    <Container>
        <Header>
            <Title>{title}</Title>
        </Header>
        <Body>
            {children}
        </Body>
    </Container>
);

export default Card;