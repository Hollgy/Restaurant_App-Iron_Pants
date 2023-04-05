import NavBar from "./Navbar"

const Header = () => {

    return (
        <header>
            <div className="header-logo">
                <img className="logo" src="/public/images/LOGO.png" alt="Logotype" />
            </div>
            <div className="header-nav">
                <NavBar/>

            </div>
        </header>
        
    )
}

export default Header