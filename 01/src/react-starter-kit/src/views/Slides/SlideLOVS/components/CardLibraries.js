//@flow
import React from 'react';
import { Card, CardElement } from '../../../Card';

const CardLibraries = () => (
    <Card title="Libraries" description="and yes, there's no jQuery">
        <CardElement title="axios" description="a fetch library" url="https://github.com/axios/axios"  />
        <CardElement title="lodash" description="the mother of all underscore" url="https://lodash.com/"  />
        <CardElement title="immutable" description="immutable, from heaven to hell and back" url="https://facebook.github.io/immutable-js/"  />
    </Card>
);

export default CardLibraries;