import PriceOption from "../PriceOption/PriceOption";

/* eslint-disable no-unused-vars */
const PriceOptions = () => {
    
        const priceOptions = [
          {
            "id": 1,
            "name": "Basic Membership",
            "description": "Access to basic gym facilities",
            "price": 29.99,
            "features": [
              "Unlimited access to gym equipment",
              "Locker room access",
              "Towel service",
              "Basic fitness classes",
              "Fitness assessment",
              "Discounts on protein supplements"
            ]
          },
          {
            "id": 2,
            "name": "Premium Membership",
            "description": "Access to premium gym facilities and services",
            "price": 49.99,
            "features": [
              "Unlimited access to gym equipment",
              "Locker room access",
              "Towel service",
              "Premium fitness classes",
              "Sauna and steam room access",
              "Personal trainer consultation",
              "Nutritional counseling",
              "Free monthly massage"
            ]
          },
          {
            "id": 3,
            "name": "Family Membership",
            "description": "Membership for the whole family",
            "price": 99.99,
            "features": [
              "Unlimited access to gym equipment",
              "Locker room access",
              "Towel service",
              "Family fitness classes",
              "Childcare services",
              "Discounts on additional family members",
              "Monthly family fitness challenge",
              "Access to all gym locations"
            ]
          },
          {
            "id": 4,
            "name": "Student Membership",
            "description": "Special membership for students",
            "price": 19.99,
            "features": [
              "Unlimited access to gym equipment",
              "Locker room access",
              "Towel service",
              "Student fitness classes",
              "Flexible class scheduling",
              "Study lounge access",
              "Fitness tracker app"
            ]
          }
        ]
      
    return (
        <div className="m-12">
            <h2 className="text-7xl bg-yellow-600 rounded-lg mb-10 p-4 text-center text-red-700 font-bold">Best prices in the town</h2>

            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
            }
            </div>
        </div>
    );
};

export default PriceOptions;