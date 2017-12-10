// @flow
import * as React from 'react';
import {Rating as RatingInternal} from 'semantic-ui-react';
import {withHandlers} from 'recompose'

type Props = {
    rating:number, 
    maxRating:number, 
    onRate:(newRate:number) => void
}

//const Rating = ({rating, maxRating, onRate}:Props) => <RatingInternal rating={rating} maxRating={maxRating} onRate={(event,data)=>{onRate(data.rating)}}/>;

const enhance = withHandlers({
    onRate: (props:{}) => (event:SyntheticEvent<*>,data:{rating:number}) => {
        props.onRate(data.rating)
    }
});
const RatingInternalEnhanced = enhance(RatingInternal);
const Rating = ({rating, maxRating, onRate}:Props) => <RatingInternalEnhanced rating={rating} maxRating={maxRating} onRate={onRate}/>;

export default Rating;