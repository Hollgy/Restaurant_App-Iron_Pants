import { useState } from 'react'

function MenuItems(list) {
    let jsxList = list.map((dish) => {
        return <li key={dish.item}>{dish.item}</li>
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
            <li className='dish-container' key={dish.name}>
                <button className='dish-expand' onClick={() => handleItemClick(dish.id)}>
                    <h2>{dish.name}</h2>
                </button>
                {dish.expanded && (
                    <div>
                        <ul>{MenuItems(dish.items)}
                        </ul>
                    </div>
                )}
            </li>
        )
    })

    return <ul className="start-menu">{menuItems}</ul>
}

export default Menu
