import axios from 'axios';
import { FETCH_POSTS_SUCCESS, CREATE_POST_SUCCESS, UPDATE_POST_SUCCESS, DELETE_POST_SUCCESS } from './acctionsTypes';

// Acciones para leer posts
export const fetchPosts = () => async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:8080/posts');
      dispatch({ type: FETCH_POSTS_SUCCESS, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
  
  // Acciones para crear un nuevo post
  export const createPost = (post) => async (dispatch) => {
    try {
      const response = await axios.post('http://localhost:8080/posts', post);
      dispatch({ type: CREATE_POST_SUCCESS, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
  
  // Acciones para actualizar un post existente
  export const updatePost = (id, post) => async (dispatch) => {
    try {
      const response = await axios.put(`http://localhost:8080/posts/${id}`, post);
      dispatch({ type: UPDATE_POST_SUCCESS, payload: response.data });
    } catch (error) {
      console.error(error);
    }
  };
  
  // Acciones para eliminar un post existente
  export const deletePost = (id) => async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8080/posts/${id}`);
      dispatch({ type: DELETE_POST_SUCCESS, payload: id });
    } catch (error) {
      console.error(error);
    }
  };