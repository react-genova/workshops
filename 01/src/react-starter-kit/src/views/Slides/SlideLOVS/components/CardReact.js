//@flow
import React from 'react';
import { Card, CardElement } from '../../../Card';

const CardReact = () => (
    <Card title="React" description="here is the big guy">
        <CardElement title="create-react-app" description="the tool which simplifies the mess" url="https://github.com/facebookincubator/create-react-app/"  />
        <CardElement title="recompose" description="HOC based useful library" url="https://github.com/acdlite/recompose/"  />
        <CardElement title="styled-components" description="CSS inline to the next level" url="https://www.styled-components.com/"  />
    </Card>
);

export default CardReact;