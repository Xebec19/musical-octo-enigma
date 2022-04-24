import { createSlice } from "@reduxjs/toolkit";
const initialAuthState = {
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state) {
            console.log("Fired from store");
            state.isAuthenticated = true;
        },
        logout(state){
            state.isAuthenticated = false;
        }
    } 
});

// Redux thunk
// const sendCartData = (cartData) => {
//     return (dispatch) => {
//         dispatch(
//             uiActions.showNotification({
//                 status: 'pending',
//                 title: 'Sending...',
//                 message: 'Sending cart data!'
//             })
//         );

//         const response = await fetch(
//             'backend-url',
//             {
//                 method: 'PUT',
//                 body: JSON.stringify(cart),
//             }
//         )
//     }
// };

export const authActions = authSlice.actions;
export default authSlice.reducer
