<template>
  <div id="wrapper">
    <h1>タスクリスト</h1>
    <ul>
      <li v-for="task in notCompliteTasks" :key="task.id">
        <h2>{{task.workTtl}}</h2>
        <p>{{task.memo}}</p>
        <button @click="itemDone(task.id)">完了</button>
      </li>
    </ul>
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
