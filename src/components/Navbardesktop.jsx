import LoggaInInput from "./Signin"
import {data} from "./NavBarData"
import LoggaInInputdesktop from "./Signingdesktop"

 const NavBarDesktop = () =>{

    return(

    <div className="header-nav-desktop">
              
                    <nav className="nav-desktop">
                        <ul>
                                {data.map((item, index) => (
                                    <li key={index}><a href={item.url}>{item.title}</a></li>
                                    ))}
                                    <LoggaInInputdesktop/>
                        </ul>
                    {/* <hr /> */}
                    </nav>
             
            </div>
    )
}

export default NavBarDesktop