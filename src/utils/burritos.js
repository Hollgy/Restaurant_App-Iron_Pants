import { atom } from "recoil";

const burritoState = atom({
	key: 'burritos',
	default: [
		{
			item: 'Burrito med Kyckling',
			id: 'burritoChicken',
			image: '/images/chicken-burrito.jpg',
			filling: [{ name: 'Krispig Kyckling', image: '/images/crispy-chicken.jpg' }, { name: 'Isbergssallad', image: '/images/lettuce.png' }, { name: 'Tomat', image: '/images/tomatoes.png' }, { name: 'Ost', image: '/images/cheese.png' }, { name: 'Jalapeñosås', image: '/images/jalapeno-sauce.png' }],
			price: 89,

		},
		{
			item: 'Burrito med Nötkött',
			id: 'burritoMeat',
			image: '/images/meat-burrito.jpg',
			filling: [{ name: 'Nötkött', image: '/images/seasoned-beef.png' }, { name: 'Smält Ost', image: '/images/melted-cheese.png' }, { name: 'Nachos', image: '/images/nachos.jpg' }],
			price: 89,

		},
		{
			item: 'Burrito med Svarta Bönor',
			id: 'burritoVeg',
			image: '/images/bean-burrito.jpg',
			filling: [{ name: 'Svarta Bönor', image: '/images/black-beans.png' }, { name: 'Isbergssallad', image: '/images/lettuce.png' }, { name: 'Tomat', image: '/images/tomatoes.png' }, { name: 'Ost', image: '/images/cheese.png' }, { name: 'Ris', image: '/images/seasoned-rice.png' }, { name: 'Guacamole', image: '/images/guacamole.jpg' }, { name: 'Gräddfil', image: '/images/sour-cream.jpg' }],
			price: 89,
		}
	]
})

export { burritoState }