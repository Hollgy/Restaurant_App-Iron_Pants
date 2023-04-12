// import { atom } from 'recoil'

const menuList = [
	{
		name: 'Tacos',
		id: 1,
		items: [
			{
				item: 'Hård Taco med Kycklingfärs',
				id: 'hardTacoChicken',
				filling: [{ name: 'Kycklingfärs', image: '/public/images/seasoned-beef.png' }, { name: 'Isbergssallad', image: '/public/images/lettuce.png' }, { name: 'Tomat', image: '/public/images/tomatoes.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Gräddfil', image: '/public/images/sour-cream.jpg' }],
				price: 59,
			},
			{
				item: 'Hård Taco med Nötkött',
				id: 'hardTacoMeat',
				filling: [{ name: 'Nötkött', image: '/public/images/seasoned-beef.png' }, { name: 'Isbergssallad', image: '/public/images/lettuce.png' }, { name: 'Tomat', image: '/public/images/tomatoes.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Gräddfil', image: '/public/images/sour-cream.jpg' }],
				price: 59,
			},
			{
				item: 'Hård Taco med Sojafärs',
				id: 'hardTacoVeg',
				filling: [{ name: 'Sojafärs', image: '/public/images/seasoned-beef.png' }, { name: 'Isbergssallad', image: '/public/images/lettuce.png' }, { name: 'Tomat', image: '/public/images/tomatoes.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Gräddfil', image: '/public/images/sour-cream.jpg' }],
				price: 59,
			},

			{
				item: 'Mjuk Taco med Kyckling',
				id: 'softTacoChicken',
				filling: [{ name: 'Krispig Kyckling', image: '/public/images/crispy-chicken.jpg' }, { name: 'Isbergssallad', image: '/public/images/lettuce.png' }, { name: 'Tomat', image: '/public/images/tomatoes.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Gräddfil', image: '/public/images/sour-cream.jpg' }],
				price: 59,

			},

			{
				item: 'Mjuk Taco med Nötkött',
				id: 'softTacoMeat',
				filling: [{ name: 'Nötkött', image: '/public/images/seasoned-beef.png' }, { name: 'Isbergssallad', image: '/public/images/lettuce.png' }, { name: 'Tomat', image: '/public/images/tomatoes.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Gräddfil', image: '/public/images/sour-cream.jpg' }],
				price: 59,

			},

			{
				item: 'Mjuk Taco med Sojafärs',
				id: 'softTacoVeg',
				filling: [{ name: 'Sojabönor', image: '/public/images/seasoned-beef.png' }, { name: 'Isbergssallad', image: '/public/images/lettuce.png' }, { name: 'Tomat', image: '/public/images/tomatoes.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Gräddfil', image: '/public/images/sour-cream.jpg' }],
				price: 59,

			}
		]
	},
	{
		name: 'Burritos',
		id: 2,
		items: [
			{
				item: 'Burrito med Kyckling',
				id: 'burritoChicken',
				filling: [{ name: 'Krispig Kyckling', image: '/public/images/crispy-chicken.jpg' }, { name: 'Isbergssallad', image: '/public/images/lettuce.png' }, { name: 'Tomat', image: '/public/images/tomatoes.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Jalapeñosås', image: '/public/images/jalapeno-sauce.png' }],
				price: 89,

			},
			{
				item: 'Burrito med Nötkött',
				id: 'burritoMeat',
				filling: [{ name: 'Nötkött', image: '/public/images/seasoned-beef.png' }, { name: 'Smält Ost', image: '/public/images/melted-cheese.png' }, { name: 'Nachochips', image: '/public/images/nachos.jpg' }],
				price: 89,

			},
			{
				item: 'Burrito med Svarta Bönor',
				id: 'burritoVeg',
				filling: [{ name: 'Svarta Bönor', image: '/public/images/black-beans.png' }, { name: 'Isbergssallad', image: '/public/images/lettuce.png' }, { name: 'Tomat', image: '/public/images/tomatoes.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Ris', image: '/public/images/seasoned-rice.png' }, { name: 'Guacamole', image: '/public/images/guacamole.jpg' }, { name: 'Gräddfil', image: '/public/images/sour-cream.jpg' }],
				price: 89,

			}
		]
	},
	{
		name: 'Quesadillas',
		id: 3,
		items: [
			{
				item: 'Quesadilla med Kyckling',
				id: 'quesadillaChicken',
				filling: [{ name: 'Grillad Kyckling', image: '/public/images/grilled-chicken.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Jalapeños', image: '/public/images/jalapenos.png' }],
				price: 79,

			},
			{
				item: 'Quesadilla med Nötkött',
				id: 'quesadillaMeat',
				filling: [{ name: 'Nötkött', image: '/public/images/seasoned-beef.png' }, { name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Jalapeños', image: '/public/images/jalapenos.png' }],
				price: 79,

			},
			{
				item: 'Quesadilla med Ost',
				id: 'quesadillaVeg',
				filling: [{ name: 'Ost', image: '/public/images/cheese.png' }, { name: 'Jalapeñosås', image: '/public/images/jalapeno-sauce.png' }],
				price: 69,

			}
		]
	},
	{
		name: 'Sides',
		id: 4,
		items: [
			{
				item: 'Nachos med Guacamole',
				id: 'nachoGuac',
				filling: [{ name: 'Nachos', image: '/public/images/nachos.jpg' }, { name: 'Guacamole', image: '/public/images/guacamole.jpg' }],
				price: 25
			},

			{
				item: 'Nachos med Pico De Gallo',
				id: 'nachoPico',
				filling: [{ name: 'Nachos', image: '/public/images/nachos.jpg' }, { name: 'Pico De Gallo', image: '/public/images/pico-de-gallo.jpg' }],
				price: 25
			},

			{
				item: 'Nachos med Gräddfil',
				id: 'nachoSourcream',
				filling: [{ name: 'Nachos', image: '/public/images/nachos.jpg' }, { name: 'Gräddfil', image: '/public/images/sour-cream.jpg' }],
				price: 20
			},
		]
	}
]

export default menuList