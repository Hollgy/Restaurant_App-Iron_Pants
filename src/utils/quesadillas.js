import { atom } from "recoil";

const quesadillaState = atom({
	key: 'quesadillas',
	default: [
		{
			item: 'Quesadilla med Kyckling',
			id: 'quesadillaChicken',
			image: '/images/chicken-quesadilla.jpg',
			filling: [{ name: 'Grillad Kyckling', image: '/images/grilled-chicken.png' }, { name: 'Ost', image: '/images/cheese.png' }, { name: 'Jalapeños', image: '/images/jalapenos.png' }],
			price: 79,
		},
		{
			item: 'Quesadilla med Nötkött',
			id: 'quesadillaMeat',
			image: '/images/quesadilla.jpg',
			filling: [{ name: 'Nötkött', image: '/images/seasoned-beef.png' }, { name: 'Ost', image: '/images/cheese.png' }, { name: 'Jalapeños', image: '/images/jalapenos.png' }],
			price: 79,
		},
		{
			item: 'Quesadilla med Ost',
			id: 'quesadillaVeg',
			image: '/images/cheese-quesadilla.jpg',
			filling: [{ name: 'Ost', image: '/images/cheese.png' }, { name: 'Jalapeñosås', image: '/images/jalapeno-sauce.png' }],
			price: 69,
		}
	]
})

export { quesadillaState }