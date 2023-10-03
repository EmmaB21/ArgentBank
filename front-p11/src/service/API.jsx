// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { signIn } from '../redux/store';

// // Crée une action asynchrone pour la connexion de l'utilisateur
// export const getToken = createAsyncThunk('user/login', async (loginInfo, { dispatch, rejectWithValue }) => {
//     try {
//         const response = await fetch("http://localhost:3001/api/v1/user/login", {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(loginInfo)
//         });

//         const data = await response.json();
//         const token = data.body.token;

//         // Dispatch de l'action signIn avec le token
//         dispatch(signIn(token));

//         if (!response.ok) {
//             const errorData = await response.json();
//             return rejectWithValue(errorData.message);
//         }

//     } catch (error) {
//         console.error("Erreur lors de la connexion à l'API :", error);
//         return rejectWithValue("Une erreur s'est produite lors de la connexion.");
//     }
// });

// // Crée une action asynchrone pour récupérer les données de l'utilisateur
// export const getUserProfile = createAsyncThunk('user/getUserProfile', async (token, thunkAPI) => {
//     try {
//         const response = await fetch("http://localhost:3001/api/v1/user/profile", {
//             method: "POST",
//             headers: {
//                 "Accept": "*/*",
//                 "Authorization": `Bearer ${token}`
//             }
//         })

//         if (response.ok) {
//             const data = await response.json();
//             const userData = data.body;
//             return userData;
//         } else {
//             const errorData = await response.json();
//             return thunkAPI.rejectWithValue(errorData);
//         }

//     } catch (error) {
//         console.error("Erreur lors de la récupération du profil de l'utilisateur :", error);
//         return thunkAPI.rejectWithValue({ message: "Une erreur s'est produite lors de la récupération du profil de l'utilisateur." });
//     }
// });


