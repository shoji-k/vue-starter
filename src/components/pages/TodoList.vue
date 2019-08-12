<template>
  <div class="todolist">
    <h2>Todo List</h2>
    <div class="working-list">
      <ul>
        <li v-for="todo in working" :key="todo.id">{{ todo.name }}</li>
      </ul>
    </div>
    <h2>Done</h2>
    <div class="done-list">
      <ul>
        <li v-for="todo in done" :key="todo.id">{{ todo.name }}</li>
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
          done: true
        },
        {
          id: 3,
          name: 'shopping',
          done: false
        }
      ]
    }
  },
  computed: {
    working: function () {
      return this.todos.filter(todo => !todo.done)
    },
    done: function () {
      return this.todos.filter(todo => todo.done)
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
  .working-list {
    padding-bottom: 1rem;
  }
}
</style>
