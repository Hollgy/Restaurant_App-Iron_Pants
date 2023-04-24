import { atom } from "recoil";

const categoryState = atom({
	key: 'categories',
	default: [
		{
			name: 'Tacos',
			id: 1,
			icon: '../images/taco-icon.png'
		},
		{
			name: 'Burritos',
			id: 2,
			icon: '/images/burrito-icon.png'
		},
		{
			name: 'Quesadillas',
			id: 3,
			icon: '/images/quesadilla-icon.png'
		},
		{
			name: 'Sides',
			id: 4,
			icon: '/images/nachos-icon.png'
		}
	]
})

export { categoryState }