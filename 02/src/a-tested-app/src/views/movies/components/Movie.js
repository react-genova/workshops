// @flow
import * as React from 'react';
import styled from 'styled-components';
import {Divider} from 'semantic-ui-react';
import type {MovieType} from './types'
import Rating from './Rating'

const ContainerStyled = styled.div`
background-color: #efefef;
border: 0.035em solid #C8C8C8;
padding: 0.5em;
width:40em;
`;

const Header = styled.div`
position:relative;
`;

const Title = styled.div`
font-size: 1.6em;
font-weight: bold;
color: #264d73;
margin-bottom:0.2em
`;

const SubTitle = styled.div`
font-size: 1.2em;
font-weight: bold;
color: #264d73;
margin-bottom:0.2em
`;

const Year = styled.div`
position:absolute;
top: 0px;
right: 0px;
`;

const Footer = styled.div`
`;

type Props = MovieType & {
    updateRate:(id:string, newRate:number)=>void
};
  
const Movie = ({id, title, original, rating, year,updateRate}:Props) => (
    <ContainerStyled>
        <Header>
            <Title>{title}</Title>
            <SubTitle>{original}</SubTitle>
            <Year>{year}</Year>
        </Header>
        <Divider />
        <Footer>
            <Rating rating={rating} maxRating={5} id={id} onRate={updateRate}/>
        </Footer>
    </ContainerStyled>
);
export default Movie;