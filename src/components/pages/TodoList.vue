<template>
  <div class="todolist">
    <h2>Todo List</h2>
    <div class="working-list">
      <ul>
        <li v-for="todo in working" :key="todo.id">
          <input type="checkbox" value="todo.id" @click="toggleDone(todo)" />
          {{ todo.name }}
          <a href="#" @click="deleteTask(todo)">Delete</a>
        </li>
      </ul>
      <input type="text" v-model="newTaskName" />
      <button @click="addTask">Add</button>
    </div>
    <h2>Done</h2>
    <div class="done-list">
      <ul>
        <li v-for="todo in done" :key="todo.id">
          <input type="checkbox" value="todo.id" @click="toggleDone(todo)" />
          {{ todo.name }}
          <a href="#" @click="deleteTask(todo)">Delete</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TodoList',
  data: function () {
    return {
      newTaskName: '',
      nextTodoId: 4,
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
  methods: {
    toggleDone: function (todo) {
      const id = todo.id
      const found = this.todos.find(todo => todo.id === id)
      if (!found) {
        return false
      }
      found.done = !found.done
    },
    addTask: function () {
      this.todos.push({
        id: this.nextTodoId,
        name: this.newTaskName,
        done: false
      })
      this.newTaskName = ''
      this.nextTodoId++
    },
    deleteTask: function (todo) {
      const id = todo.id
      this.todos = this.todos.filter(todo => todo.id !== id)
    }
  }
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
