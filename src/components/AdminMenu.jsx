import { useRecoilState } from "recoil"
import { overlayState } from "../utils/overlay"
import menuList from '../assets/menuArray'


// För varje ingrediens skapa en label + checkbox

const IngredientBoxes = () => {

    // let ingredientlist = menuList.map((category) => category.items.reduce((acc, item) => {
    //     if (!acc[item.filling]) {
    //         acc[item.filling] = true;
    //         acc.list.push(item.filling);
    //     }
    //     return acc;
    // }, { list: [] }).list)

    // let ingredientlist = menuList.flatMap((category) => category.items.reduce((acc, item) => {
    //     if (!acc[item.filling]) {
    //         acc[item.filling] = true;
    //         acc.list.push(item.filling);
    //     }
    //     return acc;
    // }, { list: [] }).list);
    // console.log(ingredientlist);

    // let ingredientlist = menuList.flatMap((category) => category.items.reduce((acc, item) => {
    //     if (!acc[item.filling]) {
    //         acc[item.filling] = { name: item.filling, image: item.filling.image };
    //         acc.list.push(acc[item.filling]);
    //     }
    //     return acc;
    // }, { list: [] }).list);

    // const ingredientlist2 = [].concat.apply([], ingredientlist);
    // console.log(ingredientlist);

    let ings = []
    // console.log('foreach1');
    menuList.forEach(category => {
        // console.log('foreach2');
        category.items.forEach(item => {
            // console.log('foreach3', );
            item.filling.forEach(ing => {
                console.log('ingrediens-objekt: ', ing)
                if (!ings.find(i => i.name == ing.name))
                    ings.push(ing)
            })
        })
    })

    let jsxList = ings.map((element) => {
        console.log('Inuti IngredientBoxes: ');
        // element.map(ingredientItem => (
        return (
            <li key={element.name} className="ingredient">
                <label htmlFor={element.name}>{element.name}</label>
                <div>
                <img className='ingredient-image' src={element.image} alt={element.name} />
                <input type="checkbox" id={element.name} />
                </div>
            </li>
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
                <ul className="ingredient-list">
                    <IngredientBoxes />
                </ul>

            </form>
        </div>
    )
}

export default Editform