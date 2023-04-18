import { atom } from "recoil";


const addToCartState = atom({
    key: 'AddToCart',
    default: []
})

export { addToCartState }