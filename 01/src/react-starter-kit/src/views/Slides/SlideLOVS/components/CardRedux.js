//@flow
import React from 'react';
import { Card, CardElement } from '../../../Card';

const CardRedux = () => (
    <Card title="Redux" description="Dan Abramov AKA gaeron AKA the genius">
        <CardElement title="redux" description="the core of the business logic" url="https://redux.js.org/"  />
        <CardElement title=" react-redux" description="link our two main actors" url="https://github.com/reactjs/react-redux"  />
        <CardElement title="reselect" description="cool selectors management" url="https://github.com/reactjs/reselect"  />
        <CardElement title="redux-immutable" description="immutable in redux store" url="https://github.com/gajus/redux-immutable"  />
    </Card>
);

export default CardRedux;