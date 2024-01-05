import { createSlice, combineReducers } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
  },
});

export const { setUsername } = userSlice.actions;
export const selectUsername = state => state.user.username;
export const userReducer = userSlice.reducer;

// Phone Slice
const phoneSlice = createSlice({
  name: 'phone',
  initialState: {
    phoneNumber: '',
  },
  reducers: {
    setPhoneNumber: (state, action) => {
      state.phoneNumber = action.payload;
    },
  },
});

export const { setPhoneNumber } = phoneSlice.actions;
export const selectPhoneNumber = state => state.phone.phoneNumber;
export const phoneReducer = phoneSlice.reducer;

// Address Slice
const addressSlice = createSlice({
  name: 'address',
  initialState: {
    address: '',
  },
  reducers: {
    setAddress: (state, action) => {
      state.address = action.payload;
    },
  },
});

export const { setAddress } = addressSlice.actions;
export const selectAddress = state => state.address.address;
export const addressReducer = addressSlice.reducer;

// Combine Reducers
const rootReducer = combineReducers({
  user: userReducer,
  phone: phoneReducer,
  address: addressReducer,
});

export default rootReducer;
