//@flow
import React from 'react';
import { Card, CardElement } from '../../../Card';

type Props = {
    onClick:(url:string)=>void
};

const CardRedux = ({onClick}:Props) => (
    <Card title="Redux" description="Dan Abramov AKA gaeron AKA the genius">
        <CardElement title="redux" description="the core of the business logic" url="https://redux.js.org/" onClick={onClick} />
        <CardElement title=" react-redux" description="link our two main actors" url="https://github.com/reactjs/react-redux" onClick={onClick} />
        <CardElement title="reselect" description="cool selectors management" url="https://github.com/reactjs/reselect" onClick={onClick} />
        <CardElement title="redux-immutable" description="immutable in redux store" url="https://github.com/gajus/redux-immutable" onClick={onClick} />
    </Card>
);

export default CardRedux;