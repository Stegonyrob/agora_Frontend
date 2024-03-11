// acctionsText.js
import axios from 'axios';
import { FETCH_TEXTS_SUCCESS, CREATE_TEXT_SUCCESS, UPDATE_TEXT_SUCCESS, DELETE_TEXT_SUCCESS } from './acctionsTypes';

const API_URL = 'http://localhost:8080/texts'; // Adjust the URL as necessary

// Fetch texts
export const fetchTexts = () => async (dispatch) => {
 try {
    const response = await axios.get(API_URL);
    dispatch({ type: FETCH_TEXTS_SUCCESS, payload: response.data });
 } catch (error) {
    console.error(error);
 }
};

// Create a new text
export const createText = (text) => async (dispatch) => {
 try {
    const response = await axios.post(API_URL, text);
    dispatch({ type: CREATE_TEXT_SUCCESS, payload: response.data });
 } catch (error) {
    console.error(error);
 }
};

// Update an existing text
export const updateText = (id, text) => async (dispatch) => {
 try {
    const response = await axios.put(`${API_URL}/${id}`, text);
    dispatch({ type: UPDATE_TEXT_SUCCESS, payload: response.data });
 } catch (error) {
    console.error(error);
 }
};

// Delete a text
export const deleteText = (id) => async (dispatch) => {
 try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch({ type: DELETE_TEXT_SUCCESS, payload: id });
 } catch (error) {
    console.error(error);
 }
};