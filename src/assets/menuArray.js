const menuList = [
	{
		name: 'Tacos',
		id: 1,
		items: [
			{
				item: 'Hård Taco med Kyckling',
				id: 'hardTacoChicken',
				filling: [{ name: 'Kyckling', image: '' }, { name: 'Isbergssallad', image: '' }, { name: 'Tomat', image: '' }, { name: 'Ost', image: '' }, { name: 'Gräddfil', image: '' }],
				price: 59,
			},
			{
				item: 'Hård Taco med Nötkött',
				id: 'hardTacoMeat',
				filling: [{ name: 'Nötkött', image: '' }, { name: 'Isbergssallad', image: '' }, { name: 'Tomat', image: '' }, { name: 'Ost', image: '' }, { name: 'Gräddfil', image: '' }],
				price: 59,
			},
			{
				item: 'Hård Taco med Svarta Bönor',
				id: 'hardTacoVeg',
				filling: [{ name: 'Svarta bönor', image: '' }, { name: 'Isbergssallad', image: '' }, { name: 'Tomat', image: '' }, { name: 'Ost', image: '' }, { name: 'Gräddfil', image: '' }],
				price: 59,
			},

			{
				item: 'Mjuk Taco med Kyckling',
				id: 'softTacoChicken',
				filling: [{ name: 'Kyckling', image: '' }, { name: 'Isbergssallad', image: '' }, { name: 'Tomat', image: '' }, { name: 'Ost', image: '' }, { name: 'Gräddfil', image: '' }],
				price: 59,

			},

			{
				item: 'Mjuk Taco med Nötkött',
				id: 'softTacoMeat',
				filling: [{ name: 'Nötkött', image: '' }, { name: 'Isbergssallad', image: '' }, { name: 'Tomat', image: '' }, { name: 'Ost', image: '' }, { name: 'Gräddfil', image: '' }],
				price: 59,

			},

			{
				item: 'Mjuk Taco med Svarta Bönor',
				id: 'softTacoVeg',
				filling: [{ name: 'Svarta bönor', image: '' }, { name: 'Isbergssallad', image: '' }, { name: 'Tomat', image: '' }, { name: 'Ost', image: '' }, { name: 'Gräddfil', image: '' }],
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
				filling: [{ name: 'Kyckling', image: '' }, { name: 'Isbergssallad', image: '' }, { name: 'Tomat', image: '' }, { name: 'Ost', image: '' }, { name: 'Ris', image: '' }, { name: 'Svarta bönor', image: '' }],
				price: 89,

			},
			{
				item: 'Burrito med Nötkött',
				id: 'burritoMeat',
				filling: [{ name: 'Nötkött', image: '' }, { name: 'Isbergssallad', image: '' }, { name: 'Tomat', image: '' }, { name: 'Ost', image: '' }, { name: 'Ris', image: '' }, { name: 'Svarta bönor', image: '' }],
				price: 89,

			},
			{
				item: 'Burrito med Quorn',
				id: 'burritoVeg',
				filling: [{ name: 'Quorn', image: '' }, { name: 'Isbergssallad', image: '' }, { name: 'Tomat', image: '' }, { name: 'Ost', image: '' }, { name: 'Ris', image: '' }, { name: 'Svarta bönor', image: '' }],
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
				filling: [{ name: 'Kyckling', image: '' }, { name: 'Ost', image: '' }, { name: 'Jalapeños', image: '' }],
				price: 79,

			},
			{
				item: 'Quesadilla med Nötkött',
				id: 'quesadillaMeat',
				filling: [{ name: 'Nötkött', image: '' }, { name: 'Ost', image: '' }, { name: 'Jalapeños', image: '' }],
				price: 79,

			},
			{
				item: 'Quesadilla med Svarta Bönor',
				id: 'quesadillaVeg',
				filling: [{ name: 'Svarta bönor', image: '' }, { name: 'Ost', image: '' }, { name: 'Jalapeños', image: '' }],
				price: 79,

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
				filling: [{ name: 'Nachos', image: '' }, { name: 'Avokado', image: '' }, { name: 'Tomat', image: '' }, { name: 'Chili', image: '' }, { name: 'Vitlök', image: '' }, { name: 'Citron', image: '' }],
				price: 25
			},

			{
				item: 'Nachos med Pico De Gallo',
				id: 'nachoPico',
				filling: [{ name: 'Nachos', image: '' }, { name: 'Gul lök', image: '' }, { name: 'Tomat', image: '' }, { name: 'Koriander', image: '' }, { name: 'Chili', image: '' }, { name: 'Lime', image: '' }],
				price: 25
			},

			{
				item: 'Nachos med Gräddfil',
				id: 'nachoSourcream',
				filling: [{ name: 'Nachos', image: '' }, { name: 'Gräddfil', image: '' }],
				price: 20
			},
		]
	}
]

export default menuList