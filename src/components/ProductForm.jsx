import React from 'react';
import food from '../assets/Products';

const ProductForm = React.memo(({ foodItems, handleDelete }) => {
    return (
        <div>
            <div className="food-item">
                <div className='header-text'>
                    <h3>Meny</h3>
                </div>
                <ul className='ul-item-food'>
                    {foodItems.map((foodItem) => (
                        <li className='li-item-food' key={foodItem.id}>
                            <span className='food-name'>{foodItem.name}</span>
                            <img className='food-image' src={foodItem.image} alt={foodItem.name} />
                            <button className='delete-food' onClick={() => handleDelete(foodItem)}>Remove Item</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
});

export default ProductForm;
