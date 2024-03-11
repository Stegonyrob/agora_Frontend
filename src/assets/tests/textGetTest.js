import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { fetchTexts, FETCH_TEXTS_SUCCESS } from './tuArchivoDeAcciones.js';

describe('fetchTexts', () => {
  it('should fetch texts correctly', async () => {
    const mock = new MockAdapter(axios);
    const mockResponse = { data: 'Texto de prueba' };
    mock.onGet('http://localhost:8080/texts').reply(200, mockResponse);

    const dispatch = jest.fn();
    await fetchTexts()(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: FETCH_TEXTS_SUCCESS,
      payload: mockResponse.data,
    });
  });
});
