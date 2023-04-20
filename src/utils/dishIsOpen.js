import { atom } from "recoil";

const dishIsOpen = atom({
	key: 'dishIsOpen',
	default: null
})

export { dishIsOpen }