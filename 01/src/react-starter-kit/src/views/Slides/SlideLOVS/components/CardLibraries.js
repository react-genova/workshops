//@flow
import React from 'react';
import { Card, CardElement } from '../../../Card';

type Props = {
    onClick:(url:string)=>void
};

const CardLibraries = ({onClick}:Props) => (
    <Card title="Libraries" description="and yes, there's no jQuery">
        <CardElement title="axios" description="a fetch library" url="https://github.com/axios/axios" onClick={onClick} />
        <CardElement title="lodash" description="the mother of all underscore" url="https://lodash.com/" onClick={onClick} />
        <CardElement title="immutable" description="immutable, from heaven to hell and back" url="https://facebook.github.io/immutable-js/" onClick={onClick} />
    </Card>
);

export default CardLibraries;