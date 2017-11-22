//@flow
import React from 'react';
import { Card, CardElement } from '../../../Card';

const CardTesting = () => (
    <Card title="Testing" description="the better you test, the longer you rest">
        <CardElement title="jest" description="the test engine" url="https://facebook.github.io/jest/"  />
        <CardElement title="react-styleguidist" description="design your components" url="https://react-styleguidist.js.org/"  />
        <CardElement title="enzyme" description="test your components" url="https://github.com/airbnb/enzyme"  />
        <CardElement title="static testing" description="not today. next time. keep in touch" url=""  />
    </Card>
);

export default CardTesting;