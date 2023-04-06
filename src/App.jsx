import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Body from './components/Body.jsx'
import Linkicons from './components/Linkicons.jsx'
import Background from './components/background.jsx'
import './App.css'
import './components/Header.css'
import './components/Footer.css'
import './components/Body.css'
import './components/Navbar.css'
import './components/Linkicons.css'
import './components/Background.css'

function App() {
    // const [count, setCount] = useState(0)

    return (

        <div className="App">
            <Header />
            <Body />
            <Linkicons />
            <Background />
            <Footer />

        </div>
    )
}

export default App
