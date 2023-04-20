import { atom } from "recoil";

const quesadillaState = atom({
	key: 'quesadillas',
	default: [
		{
			item: 'Quesadilla med Kyckling',
			id: 'quesadillaChicken',
			image: '/public/images/chicken-quesadilla.jpg',
			filling: [{ name: 'Grillad Kyckling', image: '/public/images/grilled-chicken.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Jalapeños', image: '/public/images/jalapenos.png' }],
			price: 79,
		},
		{
			item: 'Quesadilla med Nötkött',
			id: 'quesadillaMeat',
			image: '/public/images/quesadilla.jpg',
			filling: [{ name: 'Nötkött', image: '/public/images/seasoned-beef.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Jalapeños', image: '/public/images/jalapenos.png' }],
			price: 79,
		},
		{
			item: 'Quesadilla med Ost',
			id: 'quesadillaVeg',
			image: '/public/images/cheese-quesadilla.jpg',
			filling: [{ name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Jalapeñosås', image: '/public/images/jalapeno-sauce.png' }],
			price: 69,
		}
	]
})

export { quesadillaState }