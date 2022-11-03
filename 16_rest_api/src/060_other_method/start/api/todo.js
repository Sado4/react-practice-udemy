import axios from 'axios';

const ENDPOINT_URL = 'http://localhost:3003/todo';

const todoApi = {
  async getAll() {
    const result = await axios.get(ENDPOINT_URL);
    console.log('get result: ', result);
    return result.data;
  },
  async post(todo) {
    const result = await axios.post(ENDPOINT_URL, todo);
    console.log('post result: ', result);
    return result.data;
  },
  async delete(todo) {
    const result = await axios.delete(ENDPOINT_URL + '/' + todo.id);
    console.log('delete result: ', result);
    return result.data;
  },
  async patch(todo) {
    const result = await axios.patch(ENDPOINT_URL + '/' + todo.id, todo);
    console.log('delete result: ', result);
    return result.data;
  },
};

export default todoApi;
