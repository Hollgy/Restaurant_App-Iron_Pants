import { atom } from "recoil";

const tacoState = atom({
	key: 'tacos',
	default: [
		{
			item: 'Hård Taco med Kycklingfärs',
			id: 'hardTacoChicken',
			image: '/images/hard-taco.png',
			filling: [{ name: 'Kycklingfärs', image: '/images/seasoned-beef.png' }, { name: 'Isbergssallad', image: '/images/lettuce.png' }, { name: 'Tomat', image: '/images/tomatoes.png' }, { name: 'Ost', image: '/images/cheese.png' }, { name: 'Gräddfil', image: '/images/sour-cream.jpg' }],
			price: 59,
		},
		{
			item: 'Hård Taco med Nötkött',
			id: 'hardTacoMeat',
			image: '/images/hard-taco.png',
			filling: [{ name: 'Nötkött', image: '/images/seasoned-beef.png' }, { name: 'Isbergssallad', image: '/images/lettuce.png' }, { name: 'Tomat', image: '/images/tomatoes.png' }, { name: 'Ost', image: '/images/cheese.png' }, { name: 'Gräddfil', image: '/images/sour-cream.jpg' }],
			price: 59,
		},
		{
			item: 'Hård Taco med Sojafärs',
			id: 'hardTacoVeg',
			image: '/images/hard-taco.png',
			filling: [{ name: 'Sojafärs', image: '/images/seasoned-beef.png' }, { name: 'Isbergssallad', image: '/images/lettuce.png' }, { name: 'Tomat', image: '/images/tomatoes.png' }, { name: 'Ost', image: '/images/cheese.png' }, { name: 'Gräddfil', image: '/images/sour-cream.jpg' }],
			price: 59,
		},

		{
			item: 'Mjuk Taco med Kyckling',
			id: 'softTacoChicken',
			image: '/images/chicken-soft-taco.jpg',
			filling: [{ name: 'Krispig Kyckling', image: '/images/crispy-chicken.jpg' }, { name: 'Isbergssallad', image: '/images/lettuce.png' }, { name: 'Tomat', image: '/images/tomatoes.png' }, { name: 'Ost', image: '/images/cheese.png' }, { name: 'Gräddfil', image: '/images/sour-cream.jpg' }],
			price: 59,

		},

		{
			item: 'Mjuk Taco med Nötkött',
			id: 'softTacoMeat',
			image: '/images/soft-taco.png',
			filling: [{ name: 'Nötkött', image: '/images/seasoned-beef.png' }, { name: 'Isbergssallad', image: '/images/lettuce.png' }, { name: 'Tomat', image: '/images/tomatoes.png' }, { name: 'Ost', image: '/images/cheese.png' }, { name: 'Gräddfil', image: '/images/sour-cream.jpg' }],
			price: 59,

		},

		{
			item: 'Mjuk Taco med Sojafärs',
			id: 'softTacoVeg',
			image: '/images/soft-taco.png',
			filling: [{ name: 'Sojabönor', image: '/images/seasoned-beef.png' }, { name: 'Isbergssallad', image: '/images/lettuce.png' }, { name: 'Tomat', image: '/images/tomatoes.png' }, { name: 'Ost', image: '/images/cheese.png' }, { name: 'Gräddfil', image: '/images/sour-cream.jpg' }],
			price: 59,

		}
	]
})

export { tacoState }