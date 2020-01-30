<template>
  <div id="wrapper" class="home">
    <Header/>
    <main>
      <ul class="taskList" v-if="compliteTasks.length > 0">
        <li v-for="task in compliteTasks" :key="task.id">
          <router-link :to="{name: 'item', params: {itemId: task.id} }">
            <h2 :class="{complete : task.isDone}">{{task.workTtl}}</h2>
          </router-link>
        </li>
      </ul>
      <p class="notTasks" v-else>完了したタスクはありません</p>
      <p class="btnReturn" ><router-link :to="{name: 'home'}">TOPに戻る</router-link></p>
    </main>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: 'complete',
  components: {
    Header
  },
  computed: {
    allTasks() {
      return this.$store.getters.getStateDataSet;
    },
    compliteTasks() {
      return this.allTasks.filter((el)=>{
        return el.isDone === true;
      });
    }
  }
}
</script>
