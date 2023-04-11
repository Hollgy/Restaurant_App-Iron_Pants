import { useState } from 'react'

function MenuItems(menu, list, dishIsOpen, setDishIsOpen) {
    let jsxList = list.map((dish) => {
        return <li key={dish.item}><button className='dish' onClick={() => HandleDishClick(menu, dish, dishIsOpen, setDishIsOpen)}><h3>{dish.item}</h3></button></li>
    })
    return jsxList
}

const HandleDishClick = (menu, dish, dishIsOpen, setDishIsOpen) => {
    console.log(`${dish.item} kostar ${dish.price}:-`);
    setDishIsOpen(dish.id)
    console.log(dishIsOpen);
}

// const DishView = ({ menu, dish }) => {
//     let targetDish = null
//     menu.forEach(item => {
//         console.log(item.name);
//         targetDish = item.items.find(dish => {
//             // item.name == 'Tacos'
//             dish.id == dish
//         }
//         )

//     })
//     console.log('targetDish är: ' + targetDish);

//     let ingredients = dish.filling.forEach(filling => (
//         <li><h4>{filling.name}</h4></li>
//     ))

// return (
//     <>
//         <h3>{dish.item}</h3>
//         <ul>{ingredients}</ul>
//         <p>{dish.price}</p>
//     </>
// )
// }

const Menu = ({ menu, setMenu }) => {
    const [dishIsOpen, setDishIsOpen] = useState(null)
    const handleCategoryClick = (dishId) => {
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
                <button className='dish-categories' onClick={() => handleCategoryClick(dish.id)}>
                    <h2>{dish.name}</h2>
                </button>
                {dish.expanded && (
                    <div>
                        <ul>{MenuItems(menu, dish.items, dishIsOpen, setDishIsOpen)}
                        </ul>
                    </div>
                )}
            </li>
        )
    })
    // if (!dishIsOpen) {
    return <ul className="start-menu">{menuItems}</ul>
    // } else {
    //     return < DishView menu={menu} dish={dishIsOpen} />
    // }
}

export default Menu
