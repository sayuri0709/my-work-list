<template>
  <div id="wrapper" class="item">
    <Header/>
    <main>
      <div class="inner">
        <h2 :class="{complete : item[0].isDone}">{{item[0].workTtl}}</h2>
        <p>{{item[0].memo}}</p>
        
        <button class="complete btnDefault" @click="compliteTask(item[0].id)" v-if="!item[0].isDone">完了</button>

        <button class="inComplete btnDefault" @click="inCompliteTask(item[0].id)" v-else>未了に戻す</button>

        <p class="btnReturn" ><router-link :to="{name: 'home'}">TOPに戻る</router-link></p>
      </div>
    </main>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import { mapActions } from "vuex";
export default {
  name: 'item',
  components: {
    Header
  },
  props: {
    itemId: Number
  },
  computed: {
    allTasks() {
      return this.$store.getters.getStateDataSet;
    },
    //ページ個別データ
    item() {
      return this.allTasks.filter((el) =>{
        return el.id === this.itemId
      },this)
    }
  },
  methods: {
    ...mapActions([
      "compliteTask",
      "inCompliteTask"
    ])
  }
}
</script>
<style lang="scss" scoped>
  main {
    h2 {
      font-size: 2.4rem;
      padding-bottom: 10px;
      border-bottom: 2px solid #888;
      margin-bottom: 15px;
      transition: .4s ease-out .4s;
      position: relative;
      &::before {
        content: "";
        width: 30px;
        height: 30px;
        line-height: 1;
        color: #fff;
        background: #42b983;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: -2px;
        text-align: center;
        opacity: 0;
        transition: .3s ease-in;
        z-index: 1;
      }
      &::after {
        display: block;
        content: '';
        position: absolute;
        left: 7px;
        top: 6px;
        width: 14px;
        height: 7px;
        border-left: 2px solid #fff;
        border-bottom: 2px solid #fff;
        -webkit-transform: rotate(-45deg);
        transform: rotate(-45deg);
        z-index: 2;
        opacity: 0;
        transition: .3s ease-in;
      }
      &.complete {
        padding-left: 38px;
        transition: .4s ease-out;
        &::before,
        &::after {
          opacity: 1;
          transition: .3s ease-in .5s;
        }
        
      }
    }
    p {
      font-size: 1.6rem;
    }
    button.complete {
      background: #FF9800;
    }
    button.inComplete {
      width: 80%;
      background: #888;
    }
  }
</style>
