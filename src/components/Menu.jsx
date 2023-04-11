import { useState } from 'react'

function MenuItems(list) {
    let jsxList = list.map((item) => {
        return <li key={item.name}>{item.name}</li>
    })
    return jsxList
}

const Menu = ({ menu, setMenu }) => {
    const handleItemClick = (dishId) => {
        setMenu((prevMenu) => {
            return prevMenu.map((dish) => {
                if (dish.id === dishId) {
                    return { ...dish, expanded: !dish.expanded }
                } else {
                    return { ...dish, expanded: false }
                }
            })
        })
    }

    const menuItems = menu.map((dish) => {
        return (
            <li key={dish.id}>
                <button onClick={() => handleItemClick(dish.id)}>
                    <h2>{dish.item}</h2>
                </button>
                {dish.expanded && (
                    <div>
                        <h2>{dish.name}</h2>
                        <h3>Fyllning</h3>
                        <ul>{MenuItems(dish.filling)}</ul>
                        <h3>Tillbehör</h3>
                        <ul>{MenuItems(dish.ingredients)}</ul>
                        <h3>Extra</h3>
                        <ul>{MenuItems(dish.extra)}</ul>
                    </div>
                )}
            </li>
        )
    })

    return <ul className="start-menu">{menuItems}</ul>
}

export default Menu
