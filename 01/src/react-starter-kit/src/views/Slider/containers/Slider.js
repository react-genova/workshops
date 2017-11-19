//@flow
import * as React from 'react';

import SlideNavigator from '../components/SlideNavigator';

type Props = {
    children:React.Node // missing deep flow type on node
};

type State = {
    selected:number,
};

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
            <div style={{position: 'relative'}}>
                { children.map((child, index) => index === selected && child) }
                <SlideNavigator onNext={this.onNext} onPrev={this.onPrevious} />
            </div>
        );
    }
}

export default Slider;