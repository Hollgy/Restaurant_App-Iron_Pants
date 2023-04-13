import { useState } from 'react'

function MenuItems({ list, setDishIsOpen }) {
    let jsxList = list.map((dish) => {
        return <li key={dish.item}><button className='dish' onClick={() => handleDishClick(dish, setDishIsOpen)}><h3>{dish.item}</h3></button></li>
    })
    return jsxList
}

const handleDishClick = (dish, setDishIsOpen) => {
    setDishIsOpen(dish.id)
}

const backButton = (setMenu, dishId, setDishIsOpen) => {
    setDishIsOpen(null)
    handleCategoryClick(dishId, setMenu)
}

const Ingredients = ({ targetDish }) => {
    let jsxList = targetDish.filling.map(filling => {
        return (
            <li className='ingredient' key={filling.name}>
                <div className='ingredient-image-container'>
                    <img className='ingredient-image' src={filling.image} alt={filling.name} />
                </div>
                <h4>{filling.name}</h4>
            </li>
        )
    })
    return jsxList
}

const DishView = ({ menu, setMenu, dish, setDishIsOpen }) => {

    let targetDish = undefined
    for (let index = 0; targetDish == undefined; index++) {
        targetDish = menu[index].items.find(item => item.id === dish);
    }

    return (
        <>
            <button className='back-button' onClick={() => backButton(setMenu, targetDish.id, setDishIsOpen)}>Tillbaka</button>
            <div className='dish-container'>
                <div className='dish-image-container'>
                    <img className='dish-image' src={targetDish.image} alt={targetDish.item} />
                </div>
                <div className='dish-heading'>
                    <h3>{targetDish.item}</h3>
                    <p className='price'>{targetDish.price}:-</p>
                </div>
                <ul className='ingredient-list'><Ingredients targetDish={targetDish} /></ul>

                <button className='add-to-cart-button'>Lägg till</button>
            </div>
        </>
    )
}

const handleCategoryClick = (dishId, setMenu) => {
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

function MenuExpand({ menu, setMenu, setDishIsOpen }) {
    let menuItems = menu.map(dish => {
        return (
            <li className='dish-container' key={dish.name}>
                <button className='dish-categories' onClick={() => handleCategoryClick(dish.id, setMenu)}>
                    <h2>{dish.name}</h2>
                </button>
                {dish.expanded && (
                    <div>
                        <ul>
                            <MenuItems list={dish.items} setDishIsOpen={setDishIsOpen} />
                        </ul>
                    </div>
                )}
            </li>
        )
    })
    return menuItems
}

const Menu = ({ menu, setMenu }) => {
    const [dishIsOpen, setDishIsOpen] = useState(null)


    if (dishIsOpen == null) {
        return (
            <ul className="start-menu">
                <MenuExpand menu={menu} setMenu={setMenu} setDishIsOpen={setDishIsOpen} />
            </ul>
        )
    } else {
        return (
            <div className='dish-view'>
                < DishView menu={menu} setMenu={setMenu} dish={dishIsOpen} setDishIsOpen={setDishIsOpen} />
            </div>
        )
    }
}



export default Menu
