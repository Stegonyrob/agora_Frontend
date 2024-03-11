const initialState = {
    texts: [],
};

  const textReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_TEXTS_SUCCESS':
        return { ...state, texts: action.payload };
      case 'CREATE_TEXT_SUCCESS':
        return { ...state, texts: [...state.texts, action.payload] };
      case 'UPDATE_TEXT_SUCCESS':
        return {
          ...state,
          texts: state.texts.map((text) =>
            text.id === action.payload.id ? action.payload : text
          ),
          };
      case 'DELETE_TEXT_SUCCESS':
        return {
          ...state,
          texts: state.texts.filter((text) => text.id !== action.payload),
          };
      default:
        return state;
    }
  };

  export default textReducer;
