//@flow
import React from 'react';
import { Card, CardElement } from '../../../Card';

type Props = {
    onClick:(url:string)=>void
};

const CardReact = ({onClick}:Props) => (
    <Card title="React" description="here is the big guy">
        <CardElement title="create-react-app" description="the tool which simplifies the mess" url="https://github.com/facebookincubator/create-react-app/" onClick={onClick} />
        <CardElement title="recompose" description="HOC based useful library" url="https://github.com/acdlite/recompose/" onClick={onClick} />
        <CardElement title="styled-components" description="CSS inline to the next level" url="https://www.styled-components.com/" onClick={onClick} />
    </Card>
);

export default CardReact;