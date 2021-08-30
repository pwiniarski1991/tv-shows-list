import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import mySaga from './sagas'

const sagaMiddleware = createSagaMiddleware();

export const listSlice = createSlice({
  name: 'list',
  initialState: {
    tvShows: [],
    error: '',
    isLoading: false,
  },
  reducers: {
    setLoading: state => {
      state.isLoading = !state.isLoading;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setData: (state, action) => {
      state.tvShows = action.payload
    }
  }
});

export const tableSlice = createSlice({
  name: 'table',
  initialState: {
    data: [] as { id: string }[],
  },
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      const index = state.data.findIndex(item => item.id === action.payload);
      if (index === -1) {
        state.data.push({ id: action.payload });
      }
    },
    removeItem: (state, action) => {
      state.data.splice(action.payload, 1);
    },
  }
});

export const { setData, setError, setLoading } = listSlice.actions;
export const { addItem, removeItem } = tableSlice.actions;


export const store = configureStore({
  reducer: {
    table: tableSlice.reducer,
    list: listSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(mySaga)
