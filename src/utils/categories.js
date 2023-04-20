import { atom } from "recoil";

const categoryState = atom({
	key: 'categories',
	default: [
		{
			name: 'Tacos',
			id: 1,
			icon: '../public/images/taco-icon.png'
		},
		{
			name: 'Burritos',
			id: 2,
			icon: '/public/images/burrito-icon.png'
		},
		{
			name: 'Quesadillas',
			id: 3,
			icon: '/public/images/quesadilla-icon.png'
		},
		{
			name: 'Sides',
			id: 4,
			icon: '/public/images/nachos-icon.png'
		}
	]
})

export { categoryState }