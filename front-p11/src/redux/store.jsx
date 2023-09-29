import { configureStore, createSlice } from "@reduxjs/toolkit";


const signInSlice = createSlice({
  name: "signIn",
  initialState: { token: "" },
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload
      // localStorage.setItem("token", JSON.stringify(action.payload));
      // recupère + stocke le token
    },
    signOut: (state) => {
      state.token = ""
      // localStorage.removeItem("token")
      // supprime le token
    }
  }
})


const userProfileSlice = createSlice({
  name: "userProfile",
  initialState: {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: "",
  },
  reducers: {
    getUserData: (state, action) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.firstName = action.payload.firstName;
      state.lastName = action.payload.lastName;
      state.userName = action.payload.userName === null ? "" : action.payload.userName;
      // Récupère les données
      // type : userProfile/getUserData, payload : userData
    },
    editUserData: (state, action) => {
      state.userName = action.payload
      // Modifie les données
      // type : userProfile/editUserData, payload : userData
    },
  },
})

const store = configureStore({
  reducer: {
    signIn: signInSlice.reducer,
    userProfile: userProfileSlice.reducer,
  },
});

export const { signIn, signOut } = signInSlice.actions;
export const { getUserData, editUserData } = userProfileSlice.actions;

export default store;

