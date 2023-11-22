<template>
  <div v-if="todo" class="max-w-lg mx-auto mt-8">
    <form @submit.prevent="submitUpdate" class="flex items-center bg-white p-4 shadow-lg rounded-lg">
      <input
        v-model="todo.title"
        type="text"
        class="flex-1 p-2 border border-gray-300 rounded outline-none focus:border-green-500"
      />
      <button
        type="submit"
        class="ml-4 px-4 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded"
      >
        更新
      </button>
    </form>
  </div>
</template>

<script>
export default {
  props: {
    todo: Object
  },
  methods: {
    submitUpdate() {
      if (this.todo.title.trim()) {
        this.$emit('update', this.todo);
      }
    }
  }
};
</script>
