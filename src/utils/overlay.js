import { atom } from "recoil";


const overlayState = atom({
    key: 'overlayState',
    default: 'closed'
})

export { overlayState } 