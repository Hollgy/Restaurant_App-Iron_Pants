import { useState } from 'react'
// import { loggedIn } from './Signin'
import { useRecoilState } from "recoil";
import { loginState } from '../utils/login'
import { overlayState } from "../utils/overlay";
import { dishState } from "../utils/dishtoedit";
import Editform from './AdminMenu';


function MenuItems({ list, setDishIsOpen, menu, setMenu }) {
    const [loggedIn] = useRecoilState(loginState)
    const [overlay, setOverlay] = useRecoilState(overlayState)
    const [dishToEdit, setDishToEdit] = useRecoilState(dishState)


    // const toggleClicked = () => {
    //     setOverlay(overlay === 'closed' ? 'open' : 'closed')
    //     console.log(overlay);
    // }

    const handleEdit = ({ dish, dishToEdit, setDishToEdit }) => {

        setDishToEdit(dish.id)
        setOverlay(true)
        console.log(overlay);


    }


    const handleRemove = ({ dish }) => {
        const newMenu = menu.map(menuItem => {
            if (menuItem.category !== dish.category) {
                return menuItem;
            }
            const items = menuItem.items.filter(item => item.id !== dish.id);
            return { ...menuItem, items };
        });
        setMenu(newMenu);
    };

    const Buttons = ({ dish }) => {
        if (loggedIn) {
            return (
                <div>
                    <button onClick={() => handleRemove({ dish })} className='add-to-cart-button'>Ta bort</button>
                    <button onClick={() => handleEdit({ dish, dishToEdit, setDishToEdit })} className='add-to-cart-button'>Ändra</button>
                    {/* <Editform dish={dish} /> */}
                </div>
            )
        }
    }


    let jsxList = list.map((dish) => {
        return <li key={dish.id}><button className='dish' onClick={() => handleDishClick(dish, setDishIsOpen)}>
            <img className='dish-image-small' src={dish.image} alt={dish.item} />
            <h3 className='dish-heading-start'>{dish.item}</h3>
            <p className='price to-the-side'>{dish.price}:-</p>
        </button>
            <Buttons dish={dish} />
        </li>
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

    const [loggedIn] = useRecoilState(loginState)
    let targetDish = undefined
    for (let index = 0; targetDish == undefined; index++) {
        targetDish = menu[index].items.find(item => item.id === dish);
    }

    const Button = () => {

        if (!loggedIn) {
            return (
                <button className='add-to-cart-button'>Lägg till</button>
            )
        }
    }

    return (
        <>
            <button className='back-button' onClick={() => backButton(setMenu, targetDish.id, setDishIsOpen)}>Tillbaka</button>
            <div className='dish-container'>
                <div className='dish-image-container'>
                    <img className='food-image' src={targetDish.image} alt={targetDish.item} />
                </div>
                <div className='dish-heading'>
                    <h3>{targetDish.item}</h3>
                    <p className='price'>{targetDish.price}:-</p>
                </div>
                <ul className='ingredient-list'><Ingredients targetDish={targetDish} /></ul>
                <Button />

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
                    <div className='category'>
                        <img className='food-category-icon' src={dish.icon} alt={dish.name} />
                        <h2 className='food-category-heading'>{dish.name}</h2>
                    </div>
                </button>
            </li>
        )
    })
    return menuItems
}

const ShowDishesInCategory = ({ menu, setDishIsOpen, setMenu }) => {
    let menuItems = menu.map(dish => {
        if (dish.expanded) {
            return (
                <ul className='dish-list' key={dish.name}>
                    <MenuItems list={dish.items} setDishIsOpen={setDishIsOpen} menu={menu} setMenu={setMenu} />
                </ul>
            )
        }
    })
    return menuItems
}


const Menu = ({ menu, setMenu }) => {
    const [dishIsOpen, setDishIsOpen] = useState(null)
    const [overlay, setOverlay] = useRecoilState(overlayState)
    const [dishToEdit, setDishToEdit] = useRecoilState(dishState)


    if (dishIsOpen == null && overlay == true) {
        return (
            <Editform dish={dishToEdit} />
        )

    } else if (dishIsOpen == null) {
        return (
            <>
                <ul className="start-menu">
                    <MenuExpand menu={menu} setMenu={setMenu} setDishIsOpen={setDishIsOpen} />
                </ul>
                <>
                    <ShowDishesInCategory menu={menu} setDishIsOpen={setDishIsOpen} setMenu={setMenu} />
                </>
            </>
        )

    }
    else {
        return (
            <div className='dish-view'>
                < DishView menu={menu} setMenu={setMenu} dish={dishIsOpen} setDishIsOpen={setDishIsOpen} />
            </div>
        )
    }


}




export default Menu
