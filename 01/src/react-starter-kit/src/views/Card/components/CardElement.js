//@flow
import * as React from 'react';
import styled from 'styled-components';
import LabelLink from '../../LabelLink'

type Props = {
    title:string,
    description:string,
    url:string,
    children?:React.Node,
};

const Container = styled.div``;

const Indenter = styled.div`
    padding-left: 1.3em;
`;

const CardElement = ({title, description, url, children}:Props) => (
    <Container>
        <LabelLink title={title} description={description} url={url} />
        <Indenter>{children}</Indenter>
    </Container>
);

export default CardElement;