import { atom } from "recoil";

const burritoState = atom({
	key: 'burritos',
	default: [
		{
			item: 'Burrito med Kyckling',
			id: 'burritoChicken',
			image: '/public/images/chicken-burrito.jpg',
			filling: [{ name: 'Krispig Kyckling', image: '/public/images/crispy-chicken.jpg' }, { name: 'Isbergssallad', image: '/public/images/lettuce.png' }, { name: 'Tomat', image: '/public/images/tomatoes.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Jalapeñosås', image: '/public/images/jalapeno-sauce.png' }],
			price: 89,

		},
		{
			item: 'Burrito med Nötkött',
			id: 'burritoMeat',
			image: '/public/images/meat-burrito.jpg',
			filling: [{ name: 'Nötkött', image: '/public/images/seasoned-beef.png' }, { name: 'Smält Ost', image: '/public/images/melted-cheese.png' }, { name: 'Nachos', image: '/public/images/nachos.jpg' }],
			price: 89,

		},
		{
			item: 'Burrito med Svarta Bönor',
			id: 'burritoVeg',
			image: '/public/images/bean-burrito.jpg',
			filling: [{ name: 'Svarta Bönor', image: '/public/images/black-beans.png' }, { name: 'Isbergssallad', image: '/public/images/lettuce.png' }, { name: 'Tomat', image: '/public/images/tomatoes.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Ris', image: '/public/images/seasoned-rice.png' }, { name: 'Guacamole', image: '/public/images/guacamole.jpg' }, { name: 'Gräddfil', image: '/public/images/sour-cream.jpg' }],
			price: 89,
		}
	]
})

export { burritoState }