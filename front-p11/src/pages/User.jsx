import "../style/main.css"
import Account from "../components/Account"
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUserData } from "../redux/store";
import EditButton from "../components/EditButton"

function User() {

    // const [userData, setUserData] = useState(null);
    // const token = JSON.parse(localStorage.getItem("token"));
    const token = useSelector(state => state.signIn.token)
    console.log(token)
    const dispatch = useDispatch()
    const userProfile = useSelector((state) => state.userProfile)
    console.log(userProfile)

    useEffect(() => {
        const getUserProfile = async () => {
            try {
                const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                    method: "POST",
                    headers: {
                        "Accept": "*/*",
                        "Authorization": `Bearer ${token}`
                    }
                })
                const data = await response.json();
                const userData = data.body;
                dispatch(getUserData(userData))
                console.log(userData)
                // setUserData(`${userData.firstName} ${userData.lastName}`);

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
                {/* <button className="edit-button">Edit Name</button> */}
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