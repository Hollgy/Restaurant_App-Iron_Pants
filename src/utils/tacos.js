import { atom } from "recoil";

const tacoState = atom({
	key: 'tacos',
	default: [
		{
			item: 'Hård Taco med Kycklingfärs',
			id: 'hardTacoChicken',
			image: '/public/images/hard-taco.png',
			filling: [{ name: 'Kycklingfärs', image: '/public/images/seasoned-beef.png' }, { name: 'Isbergssallad', image: '/public/images/lettuce.png' }, { name: 'Tomat', image: '/public/images/tomatoes.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Gräddfil', image: '/public/images/sour-cream.jpg' }],
			price: 59,
		},
		{
			item: 'Hård Taco med Nötkött',
			id: 'hardTacoMeat',
			image: '/public/images/hard-taco.png',
			filling: [{ name: 'Nötkött', image: '/public/images/seasoned-beef.png' }, { name: 'Isbergssallad', image: '/public/images/lettuce.png' }, { name: 'Tomat', image: '/public/images/tomatoes.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Gräddfil', image: '/public/images/sour-cream.jpg' }],
			price: 59,
		},
		{
			item: 'Hård Taco med Sojafärs',
			id: 'hardTacoVeg',
			image: '/public/images/hard-taco.png',
			filling: [{ name: 'Sojafärs', image: '/public/images/seasoned-beef.png' }, { name: 'Isbergssallad', image: '/public/images/lettuce.png' }, { name: 'Tomat', image: '/public/images/tomatoes.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Gräddfil', image: '/public/images/sour-cream.jpg' }],
			price: 59,
		},

		{
			item: 'Mjuk Taco med Kyckling',
			id: 'softTacoChicken',
			image: '/public/images/chicken-soft-taco.jpg',
			filling: [{ name: 'Krispig Kyckling', image: '/public/images/crispy-chicken.jpg' }, { name: 'Isbergssallad', image: '/public/images/lettuce.png' }, { name: 'Tomat', image: '/public/images/tomatoes.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Gräddfil', image: '/public/images/sour-cream.jpg' }],
			price: 59,

		},

		{
			item: 'Mjuk Taco med Nötkött',
			id: 'softTacoMeat',
			image: '/public/images/soft-taco.png',
			filling: [{ name: 'Nötkött', image: '/public/images/seasoned-beef.png' }, { name: 'Isbergssallad', image: '/public/images/lettuce.png' }, { name: 'Tomat', image: '/public/images/tomatoes.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Gräddfil', image: '/public/images/sour-cream.jpg' }],
			price: 59,

		},

		{
			item: 'Mjuk Taco med Sojafärs',
			id: 'softTacoVeg',
			image: '/public/images/soft-taco.png',
			filling: [{ name: 'Sojabönor', image: '/public/images/seasoned-beef.png' }, { name: 'Isbergssallad', image: '/public/images/lettuce.png' }, { name: 'Tomat', image: '/public/images/tomatoes.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Gräddfil', image: '/public/images/sour-cream.jpg' }],
			price: 59,

		}
	]
})

export { tacoState }