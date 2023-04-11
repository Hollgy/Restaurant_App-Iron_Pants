import React, { useState } from 'react';

const ProductForm = () => { // wrap the component in a function
    const [food, setFood] = useState([
        { id: Date.now() + Math.random(), name: " Taco", image: '/public/images/taco1.jpg' },
        { id: 2, name: " Burrito", image: '/public/images/taco1.jpg' },
        { id: 3, name: " Best of Bell", image: '/public/images/taco1.jpg' },
        { id: 4, name: " Specialities", image: '/public/images/taco1.jpg' },
    ]);

    const handleDelete = (foodItem) => { // create a function to handle deletion
        const newFood = food.filter(f => f.id !== foodItem.id); // create a new array without the deleted food
        setFood(newFood); // update the state with the new array
    };

    return (
        <div className="food-item">
            <ul>
                {food.map(food => ( // use parentheses instead of curly braces to return the JSX
                    <li key={food.id}>
                        <span className='food-name'>{food.name}</span>
                        <img className='food-image' src={food.image} alt={food.name} /> {/* add an image tag with the food image */}
                        <button className='delete-food' onClick={() => handleDelete(food)}>Delete</button> {/* add an onClick handler to call the delete function */}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ProductForm;
