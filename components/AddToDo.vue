<template>
  <div class="max-w-lg mx-auto mt-8">
    <form @submit.prevent="submitTodo" class="flex items-center bg-white p-4 shadow-lg rounded-lg">
      <input
        v-model="title"
        type="text"
        placeholder="新しいToDoを追加"
        class="flex-1 p-2 border border-gray-300 rounded outline-none focus:border-blue-500"
      />
      <button
        type="submit"
        class="ml-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded"
      >
        追加
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    };
  },
  methods: {
    submitTodo() {
      if (this.title.trim()) {
        this.$emit('add', this.title);
        this.title = '';
      }
    }
  }
};
</script>
