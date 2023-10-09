import { useState, useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { editUserData } from "../redux/store";
import callAPI from "../service/API";
import '../style/main.css'

function EditButton() {
    const [modal, setModal] = useState(false);
    const token = useSelector(state => state.signIn.token)
    const userProfile = useSelector((state) => state.userProfile);
    const [newUserName, setNewUserName] = useState(userProfile.userName);
    const dispatch = useDispatch();

    // Fonction d'affichage de la modale au clic sur le bouton Edit
    const displayModal = () => {
        setModal(!modal);
    }

    // Fonction de modification du nom d'utilisateur
    const editUserName = async () => {

        try {
            // requête pour envoyer le nouveau nom d'utilisateur
            const response = await callAPI("putUserName", token, { userName: newUserName })
            // Appel de l'action pour stocker le nouveau userName
            dispatch(editUserData(newUserName))
            return response

        } catch (error) {
            console.error("Erreur lors de la récupération du profil de l'utilisateur :", error);
        }
    }

        // Utilisation de useEffect pour mettre à jour newUserName lorsque userProfile.userName change
        useEffect(() => {
            setNewUserName(userProfile.userName);
        }, [userProfile.userName]);

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