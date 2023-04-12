import { useState } from 'react'
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
import './App.css'
import './components/Header.css'
import './components/Footer.css'
import './components/Body.css'
import './components/Navbar.css'
import './components/Menu.css'
import './components/Linkicons.css'
import './components/Background.css'

function App() {
    const [menu, setMenu] = useState(menuList)
    // menu.forEach(item => console.log(item.item))
    const [Products, setProducts] = useState([])
    const addProduct = Product => setProducts([...Products, Product])

    return (

        <div className="App">
            <Header />
            <Body />
            <Menu menu={menu} setMenu={setMenu} />
            <ProductForm />
            <Linkicons />
            <Background />
            <AboutUs />
            <Footer />

        </div>
    )
}

export default App
