<template>
  <div id="wrapper" class="home">
    <Header/>
    <main>
      <ul class="taskList" v-if="notCompliteTasks.length > 0">
        <li v-for="task in notCompliteTasks" :key="task.id">
          <router-link :to="{name: 'item', params: {itemId: task.id} }">
            <h2 :class="{complete : task.isDone}">{{task.workTtl}}</h2>
          </router-link>
        </li>
      </ul>

      <p class="notTasks" v-else>タスクはありません</p>

      <p><router-link class="btnDefault" :to="{name: 'complete'}">完了リストを見る</router-link></p>
    </main>
  </div>
</template>
<script>
import Header from "@/components/Header.vue";
export default {
  name: 'home',
  components: {
    Header
  },
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
<style lang="scss" scoped>
  .btnDefault {
    width: 80%;
    margin-top: 40px;
    background: #00BCD4;
  }
</style>
