//@flow
import React from 'react';
import { Card, CardElement } from '../../../Card';

const CardDeveloperTools = () => (
    <Card title="Developer tools" description="setting you up, boring part">
        <CardElement title="Node.js" description="the engine behind the curtain" url="https://nodejs.org/it/"  />
        <CardElement title="Visual Studio Code" description="your IDE and your best friend" url="https://code.visualstudio.com/" >
            <CardElement description="Babel ES6/ES7" title="" url="" />
            <CardElement description="ESLint" title="" url="" />
            <CardElement description="Flow Language Support" title="" url="" />
            <CardElement description="Path Intellisense" title="" url="" />
            <CardElement description="Relative Path" title="" url="" />
        </CardElement>
    </Card>
);

export default CardDeveloperTools;