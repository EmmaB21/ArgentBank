import { NavLink } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'
import '../style/main.css'


function Header() {
    return (
        <nav className='main-nav'>
            <NavLink to="/" className='main-nav-logo'>
                <img
                    className='main-nav-logo-image'
                    src={logo}
                    alt="Argent Bank Logo" />
                <h1 className='sr-only'>Argent Bank</h1>
            </NavLink>
            <div>
                <NavLink to="/sign-in" className="main-nav-item">
                    <i className='fa fa-user-circle'></i>
                    Sign in
                </NavLink>
            </div>
        </nav>
    )

}

export default Header
