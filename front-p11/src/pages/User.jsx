import "../style/main.css"
import Account from "../components/Account"
import { useState, useEffect } from "react";

function User() {

    const [userData, setUserData] = useState(null);
    const token = JSON.parse(localStorage.getItem("token"));

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
                if (response.ok) {
                    const userData = await response.json();
                    setUserData(`${userData.body.firstName} ${userData.body.lastName}`);
                } else {
                    console.error("Erreur lors de la récupération du profil de l'utilisateur.");
                }
            } catch (error) {
                console.error("Erreur lors de la récupération du profil de l'utilisateur :", error);
            }

        }
        getUserProfile();
    }, [token]
    );

    return (
        <div className='main account-bg-dark'>
            <div className="header">
                <h1>Welcome back<br />{userData}!</h1>
                <button className="edit-button">Edit Name</button>
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