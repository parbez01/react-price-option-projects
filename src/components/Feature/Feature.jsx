/* eslint-disable react/prop-types */
import {AiFillCheckCircle} from 'react-icons/ai';

const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center gap'> <AiFillCheckCircle className='text-sky-500 mr-2'></AiFillCheckCircle> {feature}</p>
        </div>
    );
};

export default Feature;