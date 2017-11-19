//@flow
import React from 'react';
import { Card, CardElement } from '../../../Card';

type Props = {
    onClick:(url:string)=>void
};

const CardDeveloperTools = ({onClick}:Props) => (
    <Card title="Developer tools" description="setting you up, boring part">
        <CardElement title="Node.js" description="the engine behind the curtain" url="https://nodejs.org/it/" onClick={onClick} />
        <CardElement title="Visual Studio Code" description="your IDE and your best friend" url="https://code.visualstudio.com/" onClick={onClick}>
            <CardElement description="Babel ES6/ES7" title="" url="" onClick={onClick}/>
            <CardElement description="ESLint" title="" url="" onClick={onClick}/>
            <CardElement description="Flow Language Support" title="" url="" onClick={onClick}/>
            <CardElement description="Path Intellisense" title="" url="" onClick={onClick}/>
            <CardElement description="Relative Path" title="" url="" onClick={onClick}/>
        </CardElement>
    </Card>
);

export default CardDeveloperTools;