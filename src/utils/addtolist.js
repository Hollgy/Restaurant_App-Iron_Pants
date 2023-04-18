import { atom } from "recoil";

const addToList = atom({
    key: 'addToList',
    default: []
})

export { addToList }