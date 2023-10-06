import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signOut } from '../redux/store'
import logo from '../assets/argentBankLogo.png'
import '../style/main.css'

function Header() {
    const userProfile = useSelector((state) => state.userProfile)
    const dispatch = useDispatch()
    const token = useSelector((state) => state.signIn.token);

    //Fonction pour gérer la déconnexion de l'utilisateur
    const handleSignOut = () => {
        dispatch(signOut())
    }

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
                    //gestion de l'affichage selon si l'utilisateur est connecté ou non
                    token ?
                        <>
                            <NavLink to="/user" className="main-nav-item">
                                <i className="fa fa-user-circle"></i>
                                {/* affichage du profil récupéré dans le state. 
                                Si pas de userName renseigné, on utilise le firstName */}
                                {userProfile.userName ? userProfile.userName : userProfile.firstName}
                            </NavLink>
                            <NavLink to="/" onClick={handleSignOut} className="main-nav-item">
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
