<template>
  <div class="todo-list">
    <div 
      v-for="todo in todos" 
      :key="todo.id" 
      class="todo-item bg-white shadow-md rounded px-4 py-2 mb-4 flex justify-between items-center"
    >
      <span class="text-lg text-gray-800">{{ todo.title }}</span>
      <div class="actions">
        <!-- アクションボタン -->
        <button @click="editTodo" class="btn-edit text-blue-500 hover:text-blue-700 mr-2">
          編集
        </button>
        <button @click="deleteTodo" class="btn-delete text-red-500 hover:text-red-700">
          削除
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  methods: {
    editTodo() {
      // 編集処理をここに実装
      this.$emit('edit', this.todo)
    },
    deleteTodo() {
      // 削除処理をここに実装
      this.$emit('delete', this.todo.id)
    }
  }
})
</script>

<style scoped>
.todo-item {
  background-color: #f3f4f6;
}

.text-lg {
  font-size: 1.25rem;
}

.btn-edit, .btn-delete {
  cursor: pointer;
  transition: color 0.2s ease-in-out;
}

.btn-edit:hover {
  color: #3b82f6; /* ホバー時の色 */
}

.btn-delete:hover {
  color: #ef4444; /* ホバー時の色 */
}
</style>