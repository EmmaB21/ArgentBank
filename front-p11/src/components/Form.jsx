import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../redux/store';
import '../style/main.css'

function Form() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignIn = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3001/api/v1/user/login", {
                method: "POST",
                headers: {
                    // "Accept": "application/json",
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                })
            })
            if (response.ok) {
                const data = await response.json();
                const token = data.body.token;
                dispatch(signIn(token));
                navigate("/user");
            }
            else {
                const errorData = await response.json();
                setErrorMessage(errorData.message);
            }

        } catch (error) {
            console.error("Erreur lors de la connexion à l'API :", error);
            setErrorMessage("Une erreur s'est produite lors de la connexion.");
        }
    };

    return (
        <form onSubmit={handleSignIn}>
            <div className="input-wrapper">
                <label htmlFor="username">Username</label>
                <input
                    type="text"
                    id="username"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="input-wrapper">
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="input-remember">
                <input type="checkbox" id="remember-me" />
                <label htmlFor="remember-me">Remember me</label>
            </div>
            <button type="submit" className="sign-in-button">Sign In</button>
            <div className='error-msg'>{errorMessage}</div>

        </form>
    )
}

export default Form