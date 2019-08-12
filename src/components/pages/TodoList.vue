<template>
  <div class="todolist">
    <h2>Todo List</h2>
    <div>
      <ul>
        <li v-for="todo in todos" :key="todo.id">{{ todo.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data: function () {
    return {
      todos: [
        {
          id: 1,
          name: 'play hard',
          done: false
        },
        {
          id: 2,
          name: 'work a little',
          done: false
        }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang="scss">
.todolist {
  div {
    padding-top: 1rem
  }
  li {
    list-style: none
  }
}
</style>
