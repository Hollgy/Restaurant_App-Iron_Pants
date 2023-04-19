import { atom } from "recoil";

const menuState = atom({
    key: 'menuState',
    default: [
		{
			name: 'Tacos',
			id: 1,
			icon: '/images/taco-icon.png',
			items: [
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
		},
		{
			name: 'Burritos',
			id: 2,
			icon: '/images/burrito-icon.png',
			items: [
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
		},
		{
			name: 'Quesadillas',
			id: 3,
			icon: '/images/quesadilla-icon.png',
			items: [
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
		},
		{
			name: 'Sides',
			id: 4,
			icon: '/images/nachos-icon.png',
			items: [
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
		}
	]
})

export { menuState }