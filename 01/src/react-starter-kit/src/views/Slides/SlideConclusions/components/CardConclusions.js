//@flow
import React from 'react';
import { Card, CardElement } from '../../../Card';
import LabelTerminal from '../../../LabelTerminal';

const CardConclusions = () => (
    <Card title="Step by step installation guide" description="All copy and no paste makes Jack a dull boy">
        <CardElement title="Just the first time" description="" url="" >
            <CardElement title="Download and install Node.js" description="" url="" />
            <CardElement title="Download and install Visual Studio Code and its plugins" description="" url="" />
            <LabelTerminal text="npm install flow-bin flow-typed" />
            <LabelTerminal text="npm install create-react-app" />
        </CardElement>
        <CardElement title="Each time you create an app" description="" url="" >
            <LabelTerminal text="create-react-app your-app-pretty-cool-name" />
            <LabelTerminal text="cd your-app-pretty-cool-name" />
            <LabelTerminal text="npm install --save styled-components recompose react-redux flow-bin redux redux-immutable redux-logger reselect axios axios-mock-adapter immutable lodash enzyme jest-immutable-matchers enzyme-adapter-react-16 enzyme-to-json react-styleguidist react-test-renderer redux-test-utils" />
            <LabelTerminal text="flow-typed install enzyme@3.0.0 jest@20.0.0 lodash@4.0.0 recompose@0.24.0 styled-components@2.2.3 reselect@3.0.1 axios@0.17.1" />
            <CardElement title="Configure your 'package.json' file" description="" url="https://github.com/react-genova/workshops/blob/master/01/resources/pacakge.json.addons" />
            <CardElement title="Add linter config file '.eslintrc'" description="" url="https://github.com/react-genova/workshops/blob/master/01/resources/.eslintrc" />
            <CardElement title="Add flow config file '.flowconfig'" description="" url="https://github.com/react-genova/workshops/blob/master/01/resources/.flowconfig" />
            <CardElement title="Add styleguidist config file 'styleguide.config.js'" description="" url="https://github.com/react-genova/workshops/blob/master/01/resources/styleguide.config.js" />
            <CardElement title="Add test config file 'setupTests.js'" description="" url="https://github.com/react-genova/workshops/blob/master/01/resources/setupTests.js" />
        </CardElement>
    </Card>
);

export default CardConclusions;