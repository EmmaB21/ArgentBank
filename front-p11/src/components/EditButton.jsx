import React, { useEffect } from "react";
import { useState, } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { editUserData } from "../redux/store";
import '../style/main.css'

function EditButton() {
    const [modal, setModal] = useState(false);
    const token = useSelector(state => state.signIn.token)
    // const token = JSON.parse(localStorage.getItem("token"));
    const userProfile = useSelector((state) => state.userProfile);
    const [newUserName, setNewUserName] = useState(userProfile.userName);
    const dispatch = useDispatch();


    const displayModal = () => {
        setModal(!modal);
    }

    useEffect(() => { setNewUserName(userProfile.userName) }, [userProfile.userName])


    const editUserName = async () => {
        try {
            const response = await fetch("http://localhost:3001/api/v1/user/profile", {
                method: "PUT",
                headers: {
                    "Accept": "*/*",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({
                    userName: newUserName,
                })
            })
            if (response.ok) {
                const data = await response.json();
                const userData = data.body;
                dispatch(editUserData(newUserName))
                console.log(userData)
                // setNewUserName(userProfile.userName);
            } else {
                console.error("Erreur lors de la récupération du profil de l'utilisateur.");
            }
        } catch (error) {
            console.error("Erreur lors de la récupération du profil de l'utilisateur :", error);
        }
    }



    return (
        <>
            <button className="edit-button" onClick={displayModal}>Edit Name</button>
            <div className={modal ? "modal" : "modal modalHide"}>
                <div className="modal-title">
                <h3>Edit user Info</h3>
                <button onClick={displayModal}>X</button>
                </div>
                <form onSubmit={(e) => { e.preventDefault(); editUserName(); }}>
                    <div className="input-wrapper">
                        <label htmlFor="userName">User name:</label>
                        <input
                            type="text"
                            id="userName"
                            value={newUserName}
                            onChange={(e) => setNewUserName(e.target.value)}
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="firstName">First name:</label>
                        <input
                            type="text"
                            id="firstName"
                            value={userProfile.firstName} readOnly
                        />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="lastName">Last name:</label>
                        <input
                            type="text"
                            id="lastName"
                            value={userProfile.lastName} readOnly
                        />
                    </div>
                    <button type="submit" onClick={displayModal} className="edit-button">Save</button>
                </form>


            </div>

        </>
    );
}

export default EditButton