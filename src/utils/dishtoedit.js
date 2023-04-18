import { atom } from "recoil";

const dishState = atom({
    key: 'dishState',
    default: ''
})

export { dishState}