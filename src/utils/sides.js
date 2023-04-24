import { atom } from "recoil";

const sidesState = atom({
	key: 'sides',
	default: [
		{
			item: 'Nachos med Guacamole',
			id: 'nachoGuac',
			image: '/images/nachos-with-guacamole.jpg',
			filling: [{ name: 'Nachos', image: '/images/nachos.jpg' }, { name: 'Guacamole', image: '/images/guacamole.jpg' }],
			price: 25
		},

		{
			item: 'Nachos med Pico De Gallo',
			id: 'nachoPico',
			image: '/images/nachos-with-pico-de-gallo2.jpg',
			filling: [{ name: 'Nachos', image: '/images/nachos.jpg' }, { name: 'Pico De Gallo', image: '/images/pico-de-gallo.jpg' }],
			price: 25
		},

		{
			item: 'Nachos med Gräddfil',
			id: 'nachoSourcream',
			image: '/images/nachos-with-sourcream.jpg',
			filling: [{ name: 'Nachos', image: '/images/nachos.jpg' }, { name: 'Gräddfil', image: '/images/sour-cream.jpg' }],
			price: 20
		},
	]
})

export { sidesState }