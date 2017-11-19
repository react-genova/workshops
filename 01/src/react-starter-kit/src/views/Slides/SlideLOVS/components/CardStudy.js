//@flow
import React from 'react';
import { Card, CardElement } from '../../../Card';

const CardStudy = () => (
    <Card title="In-depth technological study" description="not enough? some more stuff">
        <CardElement title="project folder structure" description="really, are you serious?" url=""  />
        <CardElement title="middleware in redux" description="the redux source of power" url=""  />
        <CardElement title="Higher Order Components" description="how inheritance works in math" url=""  />
        <CardElement title="avoiding side effects" description="redux-saga, redux-effects, redux-cycles" url=""  />
        <CardElement title="npm and package.json" description="I am root" url=""  />
        <CardElement title="Functional Reactive Programming" description="FRP or F&RP, the long fight" url=""  />
    </Card>
);

export default CardStudy;