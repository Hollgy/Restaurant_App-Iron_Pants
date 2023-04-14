import React, { useState } from 'react';
import foodRest from '../assets/ProductSortiment';

const AdditionalFood = ({ foodItems, handleAddition }) => {
    return (
        <div className="food-item">
            <h3>Extra Produkter</h3>
            <ul className='ul-item-food'>
                {foodRest.map((foodItem) => (
                    <li className='li-item-food' key={foodItem.id}>
                        <span className='food-name'>{foodItem.name}</span>
                        <img className='food-image' src={foodItem.image} alt={foodItem.name} />
                        <button className='delete-food' onClick={() => handleAddition(foodItem)}>Add Item</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdditionalFood;
