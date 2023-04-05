import { useState } from 'react'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Body from './components/Body.jsx'
import './App.css'
import './components/Header.css'
import './components/Footer.css'
import './components/Body.css'
import './components/Navbar.css'

function App() {
    // const [count, setCount] = useState(0)

    return (
        
        <div className="App">
            <Header />
            <Body />
            <Footer />

        </div>
    )
}

export default App
