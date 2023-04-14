import { useState } from 'react'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import menuList from './assets/menuArray'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Body from './components/Body.jsx'
import Menu from './components/Menu.jsx'
import Linkicons from './components/Linkicons.jsx'
import Background from './components/Background.jsx'
import ProductForm from './components/ProductForm.jsx'
import AboutUs from './components/About.jsx'
import FormCustomer from './components/Form.jsx'
import AdditionalFood from './components/ProductSortiment'
import food from './assets/Products'
import foodRest from './assets/ProductSortiment'
import './App.css'
import './components/Header.css'
import './components/Footer.css'
import './components/Body.css'
import './components/Navbar.css'
import './components/Menu.css'
import './components/Linkicons.css'
import './components/Background.css'
import './components/about.css'
import './components/Signin.css'

function App() {
    const [menu, setMenu] = useState(menuList);
    const [foodItems, setFoodItems] = useState([]);

    useEffect(() => {
        setFoodItems([...food, ...foodRest]);
    }, []);

    const handleAddition = (foodItem) => {
        setFoodItems([...foodItems, foodItem]);
    };

    const handleDelete = (foodItem) => {
        setFoodItems(foodItems.filter((item) => item.id !== foodItem.id));
    };

    return (
        <div className="App">
            <Header />
            <Body />
            <Menu menu={menu} setMenu={setMenu} />
            <ProductForm foodItems={foodItems} handleDelete={handleDelete} />
            <AdditionalFood foodItems={foodItems} handleAddition={handleAddition} />
            <Linkicons />
            <Background />
            <AboutUs />
            <FormCustomer/>
            <Footer />
        </div>
    );
}

export default App;
