import { useState } from 'react'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import menuList from './assets/menuArray'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Body from './components/Body.jsx'
import Menu from './components/Menu.jsx'
import Linkicons from './components/Linkicons.jsx'
import AboutUs from './components/About.jsx'
import FormCustomer from './components/Form.jsx'
import { renderStatee } from './utils/conrend.js'
import './App.css'
import './components/AdminMenu.css'
import './components/Header.css'
import './components/Footer.css'
import './components/Body.css'
import './components/Navbar.css'
import './components/Menu.css'
import './components/Linkicons.css'
import './components/about.css'
import './components/Signin.css'
import './components/ProductForm.css'
import './components/form.css'

function App() {
    // const [menu, setMenu] = useState(menuList);
    const [render] = useRecoilState(renderStatee)

    const Show = () => {
        if (render == 'start') {
            return(
            <>
                <Body />
                <Linkicons />
            </>
            )
        } else if (render == 'menu') {
            return(
                <Menu/>
                // menu={menu} setMenu={setMenu}
            )
        } else if (render == 'about') {
            return(
                <AboutUs />   
            )
        } else if (render == 'order') {
            return(
                <FormCustomer />   
            )
        }
    }

    return (
        <>
            <div className="App">
                <Header />
                <Show />
                <Footer />
            </div>
        </>
    );
}

export default App;
