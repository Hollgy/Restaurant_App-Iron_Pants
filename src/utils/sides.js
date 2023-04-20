import { atom } from "recoil";

const sidesState = atom({
	key: 'sides',
	default: [
		{
			item: 'Nachos med Guacamole',
			id: 'nachoGuac',
			image: '/public/images/nachos-with-guacamole.jpg',
			filling: [{ name: 'Nachos', image: '/public/images/nachos.jpg' }, { name: 'Guacamole', image: '/public/images/guacamole.jpg' }],
			price: 25
		},

		{
			item: 'Nachos med Pico De Gallo',
			id: 'nachoPico',
			image: '/public/images/nachos-with-pico-de-gallo2.jpg',
			filling: [{ name: 'Nachos', image: '/public/images/nachos.jpg' }, { name: 'Pico De Gallo', image: '/public/images/pico-de-gallo.jpg' }],
			price: 25
		},

		{
			item: 'Nachos med Gräddfil',
			id: 'nachoSourcream',
			image: '/public/images/nachos-with-sourcream.jpg',
			filling: [{ name: 'Nachos', image: '/public/images/nachos.jpg' }, { name: 'Gräddfil', image: '/public/images/sour-cream.jpg' }],
			price: 20
		},
	]
})

export { sidesState }