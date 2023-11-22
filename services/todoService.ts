// services/todoService.ts
import axios from 'axios';

const baseURL = 'http://localhost:50000/todos'; // NestJSバックエンドのURL

export const todoService = {
  async getTodos() {
    const response = await axios.get(baseURL);
    return response.data;
  },

  async addTodo(todoTitle: any) {
    const response = await axios.post(baseURL, { title: todoTitle });
    return response.data;
  },

  async updateTodo(todo: any) {
    const response = await axios.put(`${baseURL}/${todo.id}`, { title: todo.title });
    return response.data;
  },

  async deleteTodo(todoId : any) {
    await axios.delete(`${baseURL}/${todoId}`);
  }
};
