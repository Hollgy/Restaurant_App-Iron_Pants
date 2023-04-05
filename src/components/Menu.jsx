import menuList from '../assets/menuArray'

const Menu = ({ menu, setMenu }) => {

	const handleClick = (dishId) => {
		const targetDish = menu.find(dish => dishId == dish.id)
		console.log(targetDish);

		function ingredients(list) {
			console.log(list);
			// targetDish.list.map(item => (
			// 	<p>{item.name}</p>
			// ))
		}
		// return (
		ingredients(targetDish.filling)
		// 	ingredients(targetDish.Ingredients),
		// 	ingredients(targetDish.extra)
		// )
	}

	// menu.forEach(item => console.log(item.item))
	const startMenu = menu.map(dish => (
		<li key={dish.id}><button onClick={() => handleClick(dish.id)}><h2>{dish.item}</h2></button></li>
	))

	return (
		<ul>
			{startMenu}
		</ul>
	)
}


export default Menu