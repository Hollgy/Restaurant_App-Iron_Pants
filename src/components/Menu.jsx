import { useRecoilState } from "recoil";
import { loginState } from "../utils/login";
import { overlayState } from "../utils/overlay";
import { addToCartState } from "../utils/Addtocart";
import { addToList } from "../utils/addtolist";
import { categoryState } from "../utils/categories";
import { tacoState } from "../utils/tacos";
import { burritoState } from "../utils/burritos";
import { quesadillaState } from "../utils/quesadillas";
import { sidesState } from "../utils/sides";
import { dishIsOpen } from "../utils/dishIsOpen";
import Editform from './AdminMenu';


function MenuItems({ list }) {
    const [loggedIn] = useRecoilState(loginState)
    const [categoryID] = useRecoilState(addToList)
    const [tacos, setTacos] = useRecoilState(tacoState)
    const [burritos, setBurritos] = useRecoilState(burritoState)
    const [quesadillas, setQuesadillas] = useRecoilState(quesadillaState)
    const [sides, setSides] = useRecoilState(sidesState)
    const [showDish, setShowDish] = useRecoilState(dishIsOpen)

    const handleRemove = (list, dish) => {
        const newList = list.filter(item => item.id !== dish.id);

        if (categoryID == 1) {
            setTacos(newList)
        } else if (categoryID == 2) {
            setBurritos(newList)
        } else if (categoryID == 3) {
            setQuesadillas(newList)
        } else if (categoryID == 4) {
            setSides(newList)
        }
    };

    const handleDishClick = (dish) => {
        setShowDish(dish.id)
    }

    const Buttons = ({ list, dish }) => {
        if (loggedIn) {
            return (
                <button onClick={() => handleRemove(list, dish)} className='add-to-cart-button'>Ta bort</button>
            )
        } else {
            return (
                <AddToCartButton dish={dish} />
            )
        }
    };

    let jsxList = list.map((dish) => {
        return (
            <li key={dish.id}><button className='dish' onClick={() => handleDishClick(dish)}>
                <img className='dish-image-small' src={dish.image} alt={dish.item} />
                <h3 className='dish-heading-start'>{dish.item}</h3>
                <p className='price to-the-side'>{dish.price}:-</p>
            </button>
                <Buttons dish={dish} list={list} />
            </li>
        )
    })
    return jsxList
}


const Ingredients = ({ targetDish }) => {
    let jsxList = targetDish.filling.map(filling => {
        return (
            <li className='ingredient' key={filling.name}>
                <div className='ingredient-image-container'>
                    <img className='ingredient-image' src={filling.image} alt={filling.name} />
                </div>
            </li>
        )
    })
    return jsxList
}

const DishView = () => {
    const [showDish, setShowDish] = useRecoilState(dishIsOpen)

    let list = findList()

    let targetDish = list.find(item => item.id === showDish)

    const backButton = () => {
        setShowDish(null)
    }

    return (
        <>
            <button className='back-button' onClick={() => backButton()}>Tillbaka</button>
            <div className='dish-container'>
                <div className='dish-image-container'>
                    <img className='food-image' src={targetDish.image} alt={targetDish.item} />
                </div>
                <div className='dish-heading'>
                    <h3>{targetDish.item}</h3>
                    <p className='price'>{targetDish.price}:-</p>
                </div>
                <ul className='ingredient-list'><Ingredients targetDish={targetDish} /></ul>
                <AddToCartButton dish={targetDish} />

            </div>
        </>
    )
}

const AddToCartButton = ({ dish }) => {
    const [loggedIn] = useRecoilState(loginState)
    const [cart, setToCart] = useRecoilState(addToCartState);

    const onAddToCartClick = (targetDish) => {
        let updatedCart = [...cart, targetDish]
        setToCart(updatedCart)
    }

    if (!loggedIn) {
        return (
            <button onClick={() => onAddToCartClick(dish)} className='add-to-cart-button'>Lägg till</button>
        )
    }
}


function MenuExpand() {
    const [categoryID, setCategoryID] = useRecoilState(addToList)
    const [categories] = useRecoilState(categoryState)

    const handleCategoryClick = (dishId) => {
        categoryID == dishId ? setCategoryID(null) : setCategoryID(dishId)
    }

    let categoryItems = categories.map(category => {

        return (
            <li className='dish-container' key={category.name}>
                <button className='dish-categories' onClick={() => handleCategoryClick(category.id)}>
                    <div className='category'>
                        <img className='food-category-icon' src={category.icon} alt={category.name} />
                        <h2 className='food-category-heading'>{category.name}</h2>
                    </div>
                </button>
            </li>
        )
    })
    return categoryItems
}

const findList = () => {
    const [categoryID] = useRecoilState(addToList)
    const [tacos] = useRecoilState(tacoState)
    const [burritos] = useRecoilState(burritoState)
    const [quesadillas] = useRecoilState(quesadillaState)
    const [sides] = useRecoilState(sidesState)

    let list = []

    if (categoryID == 1) {
        list = tacos
    }
    else if (categoryID == 2) {
        list = burritos
    }
    else if (categoryID == 3) {
        list = quesadillas
    }
    else if (categoryID == 4) {
        list = sides
    } else {
        list = []
    }
    return list
}

const ShowDishesInCategory = () => {
    const [loggedIn] = useRecoilState(loginState)
    const [overlay, setOverlay] = useRecoilState(overlayState)

    let list = findList()

    const addDishInMenu = () => {
        setOverlay(true)
    }

    return (
        <div key={list.key}>
            <ul className='dish-list'>
                <MenuItems list={list} />
            </ul>
            {loggedIn ?
                <div className='lägg-till-div'>
                    <button className='add-new-dish-button ny-rätt' onClick={addDishInMenu}>Lägg till ny rätt</button>

                </div> : null}
        </div>
    )
}

const Menu = () => {
    const [showDish] = useRecoilState(dishIsOpen)
    const [overlay] = useRecoilState(overlayState)
    const [categoryID] = useRecoilState(addToList)


    if (showDish == null && overlay == true) {
        return (
            <Editform />
        )

    } else if (showDish == null) {
        return (
            <>
                <ul className="start-menu">
                    <MenuExpand />
                </ul>
                {categoryID != null ? <ShowDishesInCategory /> : null}
            </>
        )
    }
    else {
        return (
            <div className='dish-view'>
                < DishView />
            </div>
        )
    }
}


export { Menu, findList }
