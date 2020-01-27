<template>
  <div id="wrapper" class="home">
    <header>
      <h1>To Do List</h1>
      <button id="addTasks"></button>
    </header>
    <main>
      <ul class="taskList">
        <li v-for="task in notCompliteTasks" :key="task.id">
          <a href="">
            <h2>{{task.workTtl}}</h2>
          </a>
        </li>
      </ul>
    </main>
  </div>
</template>
<script>
export default {
  name: 'home',
  computed: {
    allTasks() {
      return this.$store.getters.getStateDataSet;
    },
    notCompliteTasks() {
      return this.allTasks.filter((el)=>{
        return el.isDone === false;
      });
    }
  },
  methods: {
    itemDone: function(){
    }
  }
}
</script>
