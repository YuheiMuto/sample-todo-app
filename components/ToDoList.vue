<template>
  <div class="max-w-lg mx-auto mt-8">
    <div v-for="todo in todos" :key="todo.id" class="bg-white p-4 mb-4 shadow-lg rounded-lg flex justify-between items-center">
      <span class="text-gray-800">{{ todo.title }}</span>
      <div>
        <button @click="editTodo(todo)" class="text-blue-500 hover:text-blue-600 font-semibold mr-2">
          編集
        </button>
        <button @click="deleteTodo(todo.id)" class="text-red-500 hover:text-red-600 font-semibold">
          削除
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    todos: Array
  },
  methods: {
    editTodo(todo) {
      this.$emit('edit', todo);
    },
    deleteTodo(id) {
      this.$emit('delete', id);
    }
  }
};
</script>
