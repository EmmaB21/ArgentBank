import { configureStore, createSlice } from "@reduxjs/toolkit";


const signInSlice = createSlice({
  name: "signIn",
  initialState: {token : ""},
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload
      // localStorage.setItem("token", JSON.stringify(action.payload));
      // recupère + stocke le token
    },
    signOut: (state) => {
      state.token = null
      // supprime le token
    }
  }
})


const userDataSlice = createSlice({
  name: "UserData",
  initialState: (() => null),
  reducers: {
    GetUserData: () => {
      // Récupère les données
      // type : UserData/GetUserData, payload : userdata
    },
 
    EditUserData: () => {
      // Modifie les données
      // type : UserData/EditUserData, payload : userdata
    },
  }
})

const store = configureStore({
  reducer: {
    signIn: signInSlice.reducer,
    UserData: userDataSlice.reducer,
  },
});

export const {signIn, signOut} = signInSlice.actions;
export const {GetUserData, EditUserData} = userDataSlice.actions;

export default store;

