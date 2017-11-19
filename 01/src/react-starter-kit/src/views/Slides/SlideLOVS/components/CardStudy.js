//@flow
import React from 'react';
import { Card, CardElement } from '../../../Card';

type Props = {
    onClick:(url:string)=>void
};

const CardStudy = ({onClick}:Props) => (
    <Card title="In-depth technological study" description="not enough? some more stuff">
        <CardElement title="project folder structure" description="really, are you serious?" url="" onClick={onClick} />
        <CardElement title="middleware in redux" description="the redux source of power" url="" onClick={onClick} />
        <CardElement title="Higher Order Components" description="how inheritance works in math" url="" onClick={onClick} />
        <CardElement title="avoiding side effects" description="redux-saga, redux-effects, redux-cycles" url="" onClick={onClick} />
        <CardElement title="npm and package.json" description="I am root" url="" onClick={onClick} />
        <CardElement title="Functional Reactive Programming" description="FRP or F&RP, the long fight" url="" onClick={onClick} />
    </Card>
);

export default CardStudy;