import { atom } from "recoil";

const menuState = atom({
    key: 'menuState',
    default: [
		{
			name: 'Tacos',
			id: 1,
			icon: '/public/images/taco-icon.png',
			items: [
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
		},
		{
			name: 'Burritos',
			id: 2,
			icon: '/public/images/burrito-icon.png',
			items: [
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
		},
		{
			name: 'Quesadillas',
			id: 3,
			icon: '/public/images/quesadilla-icon.png',
			items: [
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
		},
		{
			name: 'Sides',
			id: 4,
			icon: '/public/images/nachos-icon.png',
			items: [
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
		}
	]
})

export { menuState }