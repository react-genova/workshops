//@flow
import * as React from 'react';
import styled, { keyframes } from 'styled-components';

import SlideNavigator from '../components/SlideNavigator';
import SlideProgress from '../components/SlideProgress';

type Props = {
    children:React.Node // missing deep flow type on node
};

type State = {
    selected:number,
};

export const keyFrameExampleOne = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const Container = styled.div`
    position: relative;
`;

const SlideAnimator = styled.div`
    animation-name: ${keyFrameExampleOne};
    animation-duration: 2s;    
`;

const Body = styled.div`
    position: relative;
`;

class Slider extends React.Component<Props, State> {

    state = {
        selected: 0,
    };

    onNext = () => {
        const selected = Math.min(this.state.selected+1, React.Children.count(this.props.children)-1);
        this.setState({ selected });
    }
    
    onPrevious = () => {
        const selected = Math.max(this.state.selected-1, 0);
        this.setState({ selected });
    }

    render() {
        const { children } = this.props;
        const { selected } = this.state;

        return (
            <Container>
                <Body>
                { children.map((child, index) => index === selected && <SlideAnimator key={index}>{child}</SlideAnimator>) }
                <SlideProgress count={React.Children.count(children)} selected={selected} />
                </Body>
                <SlideNavigator onNext={this.onNext} onPrev={this.onPrevious} />
            </Container>
        );
    }
}

export default Slider;