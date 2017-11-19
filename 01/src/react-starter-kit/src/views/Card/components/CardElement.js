//@flow
import * as React from 'react';
import styled from 'styled-components';
import LabelLink from '../../LabelLink'

type Props = {
    title:string,
    description:string,
    url:string,
    onClick:(url:string)=>void,
    children?:React.Node,
};

const Container = styled.div``;

const Indenter = styled.div`
    padding-left: 1.3em;
`;

const CardElement = ({title, description, url, onClick, children}:Props) => (
    <Container>
        <LabelLink title={title} description={description} url={url} onClick={onClick} />
        <Indenter>{children}</Indenter>
    </Container>
);

export default CardElement;