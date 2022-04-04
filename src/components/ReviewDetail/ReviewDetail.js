import React from 'react';

const ReviewDetail = (props) => {
    const { userImage, rattings, name, review } = props.review;
    return (
        <div>

            <div className="max-w-sm bg-white rounded-lg border py-3 sm:h-[350px]   border-gray-200 shadow-md relative">

                <div className="flex items-center space-x-4 mx-3">
                    <div className="flex-shrink-0">
                        <img className="w-16 h-16 rounded-full" src={userImage} alt="Neil " />
                    </div>
                    <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate ">
                            {name}
                        </p>

                    </div>
                </div>
                <p className='my-3 font-normal text-gray-700 mx-3 text-justify'><strong>Review:-</strong> {review}</p>
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded  ml-3 absolute bottom-1">Rattings:- {rattings}.0</span>
            </div>

        </div>
    );
};

export default ReviewDetail;