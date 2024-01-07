import { createSlice, combineReducers, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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
export const addressReducer = addressSlice.reducer;


//---------------------------API-----------
export const fetchData = createAsyncThunk('todos/fetchData', async () => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
  return response.data.slice(0, 10); // Assuming you want to take the first 10 records
});

const initialState = {
  cardData: [],
  loading: false,
};
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        state.cardData = action.payload;
        console.log(state.data,'state.data')
      })
      .addCase(fetchData.rejected, (state) => {
        state.loading = false;
        // Handle error if needed
      });
  },
});

export const todoreducer = todosSlice.reducer 

//---------------------------API-end----------


// Combine Reducers
const rootReducer = combineReducers({
  user: userReducer,
  phone: phoneReducer,
  address: addressReducer,
  todos: todoreducer,
});

export default rootReducer;



