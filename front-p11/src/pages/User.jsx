import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../redux/store";
import Account from "../components/Account"
import EditButton from "../components/EditButton"
import callAPI from "../service/API";
import "../style/main.css"

function User() {

    const token = useSelector(state => state.signIn.token)
    const dispatch = useDispatch()
    const userProfile = useSelector((state) => state.userProfile)

    
    useEffect(() => {
        const getUserProfile = async () => {
            try {
                //requête pour récupérer le profil de l'utilisateur
                const response = await callAPI("getProfile", token, {})
                const userData = response.body;
                //appel de l'action getUserData qui stocke le profil utilisateur dans le state
                dispatch(getUserData(userData))

            } catch (error) {
                console.error("Erreur lors de la récupération du profil de l'utilisateur :", error);
            }
        }
        getUserProfile();
    }, [token, dispatch]);


    return (
        <div className='main account-bg-dark'>
            <div className="header">
                <h1>Welcome back<br />{userProfile.firstName} {userProfile.lastName}!</h1>
                <EditButton />
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account
                title="Argent Bank Checking (x8349)"
                amount="$2,082.79"
                text="Available Balance"
            />
            <Account
                title="Argent Bank Savings (x6712)"
                amount="$10,928.42"
                text="Available Balance"
            />
            <Account
                title="Argent Bank Credit Card (x8349)"
                amount="$184.30"
                text="Current Balance"
            />
        </div>
    )
}

export default User