import React from 'react';
import useReviews from '../../hooks/useReviews';
import ReviewDetail from '../ReviewDetail/ReviewDetail';

const Reviews = () => {
    const [reviews, setReviews] = useReviews();
    return (
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-5 mx-12 my-12'>
            {
                reviews.map(review => <ReviewDetail
                    key={review._id}
                    review={review}
                />)
            }
        </div>
    );
};

export default Reviews;