//@flow
import React from 'react';
import { Card, CardElement } from '../../../Card';

type Props = {
    onClick:(url:string)=>void
};

const CardTesting = ({onClick}:Props) => (
    <Card title="Testing" description="the better you test, the longer you rest">
        <CardElement title="jest" description="the test engine" url="https://facebook.github.io/jest/" onClick={onClick} />
        <CardElement title="react-styleguidist" description="design your components" url="https://react-styleguidist.js.org/" onClick={onClick} />
        <CardElement title="enzyme" description="test your components" url="https://github.com/airbnb/enzyme" onClick={onClick} />
    </Card>
);

export default CardTesting;