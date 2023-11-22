<template>
  <div class="container mx-auto p-4">
    <AddToDo @add="addTodo" />
    <EditToDo v-if="selectedTodo" :todo="selectedTodo" @update="updateTodo" />
    <ToDoList :todos="todos" @edit="editTodo" @delete="deleteTodo" />
  </div>
</template>

<script>
import { todoService } from '~/services/todoService';
import AddToDo from '~/components/AddToDo.vue';
import EditToDo from '~/components/EditToDo.vue';
import ToDoList from '~/components/ToDoList.vue';

export default {
  components: {
    AddToDo,
    EditToDo,
    ToDoList
  },
  data() {
    return {
      todos: [],
      selectedTodo: null
    };
  },
  async mounted() {
    this.todos = await todoService.getTodos();
  },
  methods: {
    async addTodo(newTodoTitle) {
      const newTodo = await todoService.addTodo(newTodoTitle);
      this.todos.push(newTodo);
    },
    editTodo(todo) {
      this.selectedTodo = { ...todo };
    },
    async updateTodo(updatedTodo) {
      const newTodo = await todoService.updateTodo(updatedTodo);
      const index = this.todos.findIndex(t => t.id === updatedTodo.id);
      if (index !== -1) {
        this.todos.splice(index, 1, newTodo);
      }
      this.selectedTodo = null;
    },
    async deleteTodo(todoId) {
      await todoService.deleteTodo(todoId);
      this.todos = this.todos.filter(t => t.id !== todoId);
    }
  }
};
</script>
