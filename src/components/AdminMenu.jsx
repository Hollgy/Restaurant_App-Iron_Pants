import { useRecoilState } from "recoil"
import { overlayState } from "../utils/overlay"
import menuList from '../assets/menuArray'


    // För varje ingrediens skapa en label + checkbox
    const IngredientBoxes = () => {

        let ingredientlist = menuList.map((category) => category.items.reduce((acc, item) => {
            if (!acc[item.filling]) {
                acc[item.filling] = true;
                acc.list.push(item.filling);
            }
            return acc;
        }, { list: [] }).list)

        let jsxList = ingredientlist.forEach(element => {
            return (
                <>
                    <label htmlFor={element.name}>{element.name}</label>
                    <input type="checkbox" id={element.name} />
                    <img src={element.image} alt={element.name} />

                </>
            )
        });
        return jsxList
    }

    
function Editform({ dish }) {
    // const [overlay] = useRecoilState(overlayState)
    console.log('Hej jag är med');


    return (
        <div>
            <form action="#">
                <label htmlFor={dish.item}>Namn på rätt:</label>
                <input type="text" id={dish.item} />
                <label htmlFor={dish.price} >Pris:</label>
                <input type="text" id={dish.price} />
                <Ingredients />
            </form>
        </div>
    )
}

export default IngredientBoxes