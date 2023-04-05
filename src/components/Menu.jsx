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
		const [click, setClick] = useState(false)
		return (
			< li key={dish.id} >
				<button onClick={() => handleClick(menu, dish.id, click, setClick)}>
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


export default Menu