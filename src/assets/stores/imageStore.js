
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  images: [
    {
      id: 1,
      title: 'Neurons Interaction',
      path: '/public/img/neuronsInteraction.jpg',
    },
    {
      id: 2,
      title: 'Agora Logo',
      path: '/public/img/agoraLogo.jpg',
    },
    // Otras imágenes...
  ],
};

const imageSlice = createSlice({
  name: 'images',
  initialState,
  reducers: {
    // Aquí podrías agregar acciones para actualizar el store de imágenes si es necesario
  },
});


export default imageSlice.reducer;
