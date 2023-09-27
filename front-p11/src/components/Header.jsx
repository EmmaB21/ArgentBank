import { NavLink } from 'react-router-dom'
import logo from '../assets/argentBankLogo.png'
import '../style/main.css'
import { signOut } from '../redux/store'
import { useSelector } from 'react-redux'


function Header() {
    const token = useSelector(state => state.signIn.token)
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
                {
                token ?
                    <>
                        <NavLink to="/user" className="main-nav-item">
                            <i className="fa fa-user-circle"></i>
                            Toto
                        </NavLink>
                        <NavLink to="/" onClick={signOut()} className="main-nav-item">
                            <i className="fa fa-sign-out"></i>
                            Sign Out
                        </NavLink>
                    </>
                    :
                    <NavLink to="/sign-in" className="main-nav-item">
                        <i className='fa fa-user-circle'></i>
                        Sign In
                    </NavLink>
                }
            </div>
        </nav>
    )

}

export default Header
