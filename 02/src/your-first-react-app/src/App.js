import React, { Component } from 'react';

import Slider, { Slide } from './views/Slider';
import {
    SlideLogo, SlideWhatIsReact, SlideFlexible, SlideEfficient, SlideFarewell, SlideLetsCode
} from './views/Slides';

class App extends Component {
    render() {
        return (
            <Slider>
                <SlideLogo />
                <Slide title="O React, React!" description="wherefore art thou React?">
                    <SlideWhatIsReact />
                </Slide>
                <Slide title="Flexible and Declarative" description="the odd couple">
                    <SlideFlexible />
                </Slide>
                <Slide title="Efficient" description="performance anxiety? here's the cure">
                    <SlideEfficient />
                </Slide>
                <Slide title="Let's see some code" description="where's my first react app?">
                    <SlideLetsCode />
                </Slide>
                <Slide title="Farewell" description="any questions?">
                    <SlideFarewell />
                </Slide>
            </Slider>
        );
    }
}

export default App;
