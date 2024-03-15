
const initialState = {
 posts: [],
};

// Suponiendo que este es tu reducer en postsReducer.js
const postsReducer = (state = initialState, action) => {
  let newState = state;
  switch (action.type) {
     case 'ACTION_TYPE_1': // Reemplaza 'ACTION_TYPE_1' con el tipo de acción real
       // Aquí va la lógica para manejar la acción
       newState = { ...state, posts: action.payload };
       console.log('Nuevo estado de posts:', newState.posts); // Agrega esta línea para ver el nuevo estado
       return newState;
     // Maneja otros tipos de acción aquí...
     default:
       return state;
  }
 };
 
 export default postsReducer;
