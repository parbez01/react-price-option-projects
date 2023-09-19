/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import Feature from "../Feature/Feature";


const PriceOption = ({option}) => {
    const {price,name,features} = option;
    return (
        <div className="bg-pink-700 rounded-md p-6 text-white flex flex-col">
            <h2 className="text-center">
                <span className="text-7xl font-extrabold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>
            <h4 className="text-3xl text-center my-8">{name}</h4>
           <div className="ml-2 flex-grow">
           {
                features.map((feature,idx) => <Feature key={idx} feature={feature}></Feature>)
            }
           </div>
           <button className="mt-12 bg-green-600 w-full p-4 rounded-lg font-bold hover:bg-yellow-400">Buy Now</button>
        </div>
    );
};

export default PriceOption;