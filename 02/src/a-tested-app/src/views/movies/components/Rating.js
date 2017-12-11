// @flow
import * as React from 'react';
import {Rating as RatingInternal} from 'semantic-ui-react';
import {withHandlers} from 'recompose'

type Props = {
    rating:number, 
    maxRating:number, 
    id:string,
    onRate:(id:string, newRate:number) => void
}

//const Rating = ({rating, maxRating, onRate}:Props) => <RatingInternal rating={rating} maxRating={maxRating} onRate={(event,data)=>{onRate(data.rating)}}/>;

const enhance = withHandlers({
    onRate: (props:Props) => (event:SyntheticEvent<*>,data:{rating:number}) => {
        props.onRate(props.id, data.rating)
    }
});
const RatingInternalEnhanced = enhance(RatingInternal);
const Rating = ({rating, maxRating, onRate,id}:Props) => <RatingInternalEnhanced rating={rating} maxRating={maxRating} id={id} onRate={onRate}/>;

export default Rating;