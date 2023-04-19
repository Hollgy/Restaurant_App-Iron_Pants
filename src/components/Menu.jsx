import { useState } from "react";
// import { loggedIn } from './Signin'
import { useRecoilState } from "recoil";
import { loginState } from "../utils/login";
import { overlayState } from "../utils/overlay";
import { dishState } from "../utils/dishtoedit";
import { addToCartState } from "../utils/Addtocart";
import { addToList } from "../utils/addtolist";
import { menuState } from "../utils/menu";
import Editform from "./AdminMenu";

function MenuItems({ list, menu, setMenu }) {
    const [loggedIn] = useRecoilState(loginState);
    const [overlay, setOverlay] = useRecoilState(overlayState);
    const [dishToEdit, setDishToEdit] = useRecoilState(dishState);
    const [cart, setToCart] = useRecoilState(addToCartState);

    // const handleEdit = ({ dish, dishToEdit, setDishToEdit }) => {
    //     setDishToEdit(dish);
    //     setOverlay(true);
    //     // console.log(overlay);
    // };
    
    let targetDish = undefined;
    const onAddToCartClick = (targetDish, dish) => {
        for (let index = 0; targetDish == undefined; index++) {
            targetDish = menu[index].items.find((item) => item.id === dish.id);
        }
        let updatedCart = [...cart, targetDish];
        setToCart(updatedCart);
    };

    const handleRemove = ({ dish }) => {
        const newMenu = menu.map((menuItem) => {
            if (menuItem.category !== dish.category) {
                return menuItem;
            }
            const items = menuItem.items.filter((item) => item.id !== dish.id);
            return { ...menuItem, items };
        });
        setMenu(newMenu);
    };

    const Buttons = ({ dish }) => {
        if (loggedIn) {
            return (
                    <button
                        onClick={() => handleRemove({ dish })}
                        className="button add-to-cart"
                    >
                        Ta bort
                    </button>
            );
        } else if (!loggedIn) {
            return (
              
                    <button onClick={() => onAddToCartClick(targetDish, dish)} className="button add-to-cart ">Lägg till</button>

                
            )
        }
    };

    let jsxList = list.map((dish) => {
        return (
            <li key={dish.id}>
                <div
                    className="dish"
                >
                    <img
                        className="dish-image-small"
                        src={dish.image}
                        alt={dish.item}
                    />
                    <h3 className="dish-heading-start">{dish.item}</h3>
                    <p className="price to-the-side">{dish.price}:-</p>
                <Buttons dish={dish} />
                </div>
            </li>
        );
    });
    return jsxList;
}

const Ingredients = ({ targetDish }) => {
    let jsxList = targetDish.filling.map((filling) => {
        return (
            <li className="ingredient" key={filling.name}>
                <div className="ingredient-image-container">
                    <img
                        className="ingredient-image"
                        src={filling.image}
                        alt={filling.name}
                    />
                </div>
                <h4>{filling.name}</h4>
            </li>
        );
    });
    return jsxList;
};


function MenuExpand({ menu, setMenu }) {
    const handleCategoryClick = (dishId, setMenu) => {
        setMenu((prevMenu) => {
            return prevMenu.map((dish) => {
                if (dish.id === dishId) {
                    return { ...dish, expanded: !dish.expanded };
                } else {
                    return { ...dish, expanded: false };
                }
            });
        });
    };

    let menuItems = menu.map((dish) => {
        return (
            <li className="dish-container" key={dish.name}>
                <button
                    className="dish-categories"
                    onClick={() => handleCategoryClick(dish.id, setMenu)}
                >
                    <div className="category">
                        <img
                            className="food-category-icon"
                            src={dish.icon}
                            alt={dish.name}
                        />
                        <h2 className="food-category-heading">{dish.name}</h2>
                    </div>
                </button>
            </li>
        );
    });
    return menuItems;
}

const ShowDishesInCategory = ({ menu, setMenu }) => {
    const [categoryID, setCategoryID] = useRecoilState(addToList);
    const [overlay, setOverlay] = useRecoilState(overlayState);
    const [list, setList] = useRecoilState(addToList);
    const [loggedIn] = useRecoilState(loginState);
    const addDishInMenu = (arr, dishID) => {
        setOverlay(true);
        setList(arr);
        setCategoryID(dishID);
    };

    let menuItems = menu.map((dish) => {
        if (dish.expanded) {
            console.log("senaste", dish.id);
            return (
                <>
                    <ul className="dish-list" key={dish.id}>
                        <MenuItems
                            list={dish.items}
                            menu={menu}
                            setMenu={setMenu}
                        />
                    </ul>
                    {loggedIn ? (
                        <div className="lägg-till-div">
                            <button
                                className="add-new-dish-button ny-rätt"
                                onClick={() =>
                                    addDishInMenu(dish.items, dish.id)
                                }
                            >
                                Lägg till ny rätt
                            </button>
                        </div>
                    ) : null}
                </>
            );
        }
    });
    return menuItems;
};

const Menu = () => {
    const [menu, setMenu] = useRecoilState(menuState)
    const [overlay, setOverlay] = useRecoilState(overlayState);
    const [dishToEdit, setDishToEdit] = useRecoilState(dishState);

const MenuWrapper = () => {
    if (overlay == true) {
        return <Editform />;
    } else if (overlay == false) {
        return (
            <>
                <ul className="start-menu">
                    <MenuExpand
                        menu={menu}
                        setMenu={setMenu}
                    />
                </ul>
                <>
                    <ShowDishesInCategory
                        menu={menu}
                        setMenu={setMenu}
                    />
                </>
            </>
        );
    } 
}

    return (
    <main className="menu-wrapper">
    <MenuWrapper/>
    </main>

    )
};

export default Menu;
