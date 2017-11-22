//@flow
import React from 'react';

import CardStudy from '../../SlideLOVS/components/CardStudy';
import SlideRescaler from '../../SlideLOVS/components/SlideRescaler';

const SlideStudy = () => (
    <SlideRescaler scale={1.8}><CardStudy /></SlideRescaler>
);

export default SlideStudy;