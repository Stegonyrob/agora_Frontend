import { configureStore, createSlice } from '@reduxjs/toolkit';
// import AboutMeView from '../Views/AboutMeView.jsx';
// import NeurodiversityView from '../Views/NeurodiversityView.jsx';
// import ServiceView from '../Views/ServiceView.jsx';
// import ForoView from '../Views/ForoView.jsx';
// import AgoraView from '../Views/AgoraView.jsx';
// import TeaView from '../Views/TeaView.jsx';
// import Tda_TdhView from '../Views/Tda_TdhView.jsx';
// import TransAprendizajeView from '../Views/TransAprendizajeView.jsx';
// import TransMadurativoView from '../Views/TransMadurativoView.jsx';

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

// const routeComponents = {
//  '/AboutMe': AboutMeView,
//  '/Neurodiversity': NeurodiversityView,
//  '/Services': ServiceView,
//  '/Foro': ForoView,
//  '/Agora': AgoraView,
//  '/Tea': TeaView,
//  '/Tda_Tdh': Tda_TdhView,
//  '/Aprendizaje': TransAprendizajeView,
//  '/Madurativo': TransMadurativoView,
// };

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
