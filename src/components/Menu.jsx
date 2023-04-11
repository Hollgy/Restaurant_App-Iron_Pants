import { useState } from 'react'

let fillingList = []
let ingredientsList = []
let extraList = []

const handleClick = (menu, dishId, click, setClick) => {
	const targetDish = menu.find(dish => dishId == dish.id)
	click ? setClick(false) : setClick(true)

	fillingList = targetDish.filling
	ingredientsList = targetDish.ingredients
	extraList = targetDish.extra
}

function MenuItems(list) {

	// console.log('inside MenuItems ' + list);
	let jsxList = list.map(item => {

		return (
			<li key={item.name}>{item.name}</li>
		)
	})
	return jsxList
}

const Menu = ({ menu, setMenu }) => {

	// Måste lägga in egen state-variabel för varje li-element så att de inte påverkar varandra
	const startMenu = menu.map(dish => {
		console.log('bla');
		const [click, setClick] = useState(false)
		return (
			< li key={dish} >
				<button onClick={() => handleClick(menu, dish, click, setClick)}>
					<h2>{dish.item}</h2>
				</button>
				<ExpandedMenu dishObject={dish} click={click} />
			</li >
		)
	})


	return (
		<ul className="start-menu">
			{startMenu}
		</ul>
	)
}

const ExpandedMenu = ({ dishObject, click }) => {

	if (click == true) {
		console.log('Klickade på: ' + dishObject.item);
		return (
			<div>
				<h2>{dishObject.name}</h2>
				<h3>Fyllning</h3>
				<ul>{MenuItems(dishObject.filling)}</ul>
				<h3>Tillbehör</h3>
				<ul>{MenuItems(dishObject.ingredients)}</ul>
				<h3>Extra</h3>
				<ul>{MenuItems(dishObject.extra)}</ul>
			</div>
		)
	}
}


// Sätt statevariabeln till id-numret på rätten. null från början. bara en dropdown kan vara öppen i taget.

// let fillingList = []
// let ingredientsList = []
// let extraList = []

// // Hittar rätten som är klickad på och sätter state-variabeln till true
// const handleClick = (menu, dishId, show, setShow) => {
// 	const targetDish = menu.find(dish => dishId == dish.id)
// 	show == false ? setShow(true) : setShow(false)

// 	fillingList = targetDish.filling
// 	ingredientsList = targetDish.ingredients
// 	extraList = targetDish.extra
// }


// const Menu = ({ menu, setMenu }) => {

// 	// Måste lägga in egen state-variabel för varje li-element så att de inte påverkar varandra?
// 	const startMenu = menu.map(dish => {
// 		const [show, setShow] = useState(null)
// 		return (
// 			<>
// 				< li key={dish.id} onClick={() => setShow(dish.id)} className={show === dish.id ? '' : 'open-list'}>
// 					<h2>{dish.item}</h2>
// 					<Dropdown dishObject={dish} show={show} />
// 				</li >
// 			</>
// 		)
// 	})


// 	return (
// 		<ul className="start-menu">
// 			{startMenu}
// 		</ul>
// 	)
// }

// function Dropdown({ dishObject, show }) {
// 	const [dropdown, setDropdown] = useState(false)
// 	console.log('Inuti Dropdown, obj är: ' + dishObject.item);
// 	const AddToCartButton = () => {
// 		if (show == true) {
// 			return <button key={dishObject.item}>Lägg till</button>
// 		}
// 	}
// 	return (
// 		<div>
// 			<Category list={dishObject.filling} listName='Fyllning' dropdown={dropdown} setDropdown={setDropdown} show={show} />
// 			<Category list={dishObject.ingredients} listName='Tillbehör' dropdown={dropdown} setDropdown={setDropdown} show={show} />
// 			<Category list={dishObject.extra} listName='Extra' dropdown={dropdown} setDropdown={setDropdown} show={show} />
// 			<AddToCartButton />
// 		</div>
// 	)
// }

// function Category({ list, listName, dropdown, setDropdown, show }) {
// 	console.log('Inuti Category, listan är: ' + list);
// 	if (show) {
// 		return (
// 			<>
// 				<h4>{listName}</h4>
// 				<ul className='dish-submenu'
// 				// {dropdown ? 'dish-submenu clicked' : 'dish-submenu'} onClick={() => setDropdown(!dropdown)}
// 				>
// 					{list.map(item => {
// 						return (
// 							<li key={item.name} onClick={() => setDropdown(false)}>
// 								{item.name}
// 							</li>
// 						)
// 					})}
// 				</ul >
// 			</>
// 		)
// 	} else {
// 		return null
// 	}
// }



// const handleClick = (menu, dishId, show, setShow) => {
// 	const targetDish = menu.find(dish => dishId == dish.id)
// 	show ? setShow(null) : setShow(dishId)

// 	fillingList = targetDish.filling
// 	ingredientsList = targetDish.ingredients
// 	extraList = targetDish.extra
// }


// const Menu = ({ menu, setMenu }) => {


// 	// Måste lägga in egen state-variabel för varje li-element så att de inte påverkar varandra?
// 	const startMenu = menu.map(dish => {
// 		const [show, setShow] = useState(null)
// 		const Drop = ({ dish, show }) => {
// 			if (show == dish.id) {
// 				return (
// 					<Dropdown dishObject={dish} show={show} />
// 				)
// 			} else {
// 				return null
// 			}
// 		}

// 		return (
// 			<>
// 				< li key={dish.id}>
// 					<h2 onClick={() => setShow(dish.id)} className={show !== dish.id ? 'menu-item' : 'menu-item open'}>{dish.item}</h2>
// 					<Drop dishObject={dish} show={show} />
// 				</li >
// 			</>
// 		)

// 	})


// 	return (
// 		<ul className="start-menu">
// 			{startMenu}
// 		</ul>
// 	)
// }


export default Menu