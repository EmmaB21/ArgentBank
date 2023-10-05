import { createSlice } from "@reduxjs/toolkit"

const signInSlice = createSlice({
  name: "signIn",
  initialState: { token: "" },
  reducers: {
    signIn: (state, action) => {
      state.token = action.payload
      // recupère + stocke le token
    },
    signOut: (state) => {
      state.token = ""
      // supprime le token
    }
  }
})

export default signInSlice