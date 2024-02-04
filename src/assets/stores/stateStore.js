import { configureStore, createSlice } from '@reduxjs/toolkit';


const routes = {
 'Sobre mí': '/AboutMe',
 'Neurodiversity': '/Neurodiversity',
 'Services': '/Services',
 'Foro': '/Foro',
 'Agora': '/Agora',
 'Tea': '/Tea',
 'Tda_Tdh': '/Tda_Tdh',
 'Aprendizaje': '/Aprendizaje',
 'Madurativo': '/Madurativo',
};



const routeSlice = createSlice({
 name: 'route',
 initialState: routes,
 reducers: {
  setRoute: (state, action) => {
    return action.payload;
  }
 }
});

const stateStore = configureStore({
 reducer: {
  route: routeSlice.reducer
 }
});

export default stateStore;
export const { setRoute } = routeSlice.actions;
