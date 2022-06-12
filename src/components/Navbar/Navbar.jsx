import logo from '../../assets/system/Instagram_logo.png'
import NavbarBtns from './NavbarBtns/NavbarBtns'
import NavbarSearch from './NavbarSearch/NavbarSearch'
import './Navbar.css'

function Navbar() {
    return (
        <header>
            <nav className="Navbar">
                <img className='Navbar__logo' src={logo} alt="instagram logo" />
                <NavbarSearch/>
                <NavbarBtns/>
            </nav>
        </header>
    )
}

export default Navbar