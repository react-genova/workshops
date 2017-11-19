//@flow
import * as React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    border-radius: 0.5em;
    background-color: white;
    border: 0.035em solid #C8C8C8;
    font-family: Arial, Helvetica, sans-serif;
`;

const TitleContainer = styled.div`
    padding: 0.5em;
`;

const Title = styled.div`
    font-size: 1.6em;
    font-weight: bold;
    color: #000080;
`;

const SubTitle = styled.div`
    font-size: 1.3em;
    color: #808080;
`;

const Header = styled.div`
    border-bottom: 0.035em solid #C8C8C8;
`;

const Body = styled.div`
    padding: 0.5em;
`;

type Props = {
    title:string,
    description:string,
    children?:React.Node,
};
const Card = ({title, description, children}:Props) => (
    <Container>
        <Header>
            <TitleContainer>
                <Title>{title}</Title>
                <SubTitle>{description}</SubTitle>
            </TitleContainer>
        </Header>
        <Body>
            {children}
        </Body>
    </Container>
);

export default Card;