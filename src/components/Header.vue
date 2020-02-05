<template>
  <header>
    <h1>To Do List</h1>
    <button id="addTasks" @click="openModal"></button>

    <ModalContent @close="closeModal" v-if="modal">
      <div class="taskForm">
        <h2>タスク追加</h2>
        <dl>
          <dt>タスク名</dt>
          <dd><input type="text" v-model="addData.workTtl"></dd>
          <dd class="error" v-if="warning">※タスク名を入力してください。</dd>
        </dl>
        <dl>
          <dt>メモ</dt>
          <dd><textarea type="text" v-model="addData.memo"></textarea></dd>
        </dl>
        
        

        <button class="btnDefault" @click="addTask()">追加</button>

      </div>
    </ModalContent>
  </header>
</template>

<script>
import ModalContent from "@/components/ModalContent.vue";
export default {
  name: 'HeaderItem',
  components: {
    ModalContent
  },
  data() {
    return {
      modal: false,
      addData: {
      },
      warning: false
    }
  },
  computed: {
    allTasks() {
      return this.$store.getters.getStateDataSet;
    }
  },
  methods: {
    //モーダル処理
    openModal() {
      this.modal = true;
    },
    closeModal() {
      this.modal = false;
    },
    //タスク追加
    addTask() {
      //タスク名が入ってないときはエラーを返す
      if(this.addData.workTtl === undefined) {
        this.warning = true;
        return false;
      }
      //エラーが出ていた場合は削除
      this.warning = false;
      //タスクにidを追加
      this.addData.id = this.allTasks.length + 1;
      //状態を未了に設定
      this.addData.isDone = false;
      //モーダルを閉じる
      this.modal = false;

      //タスクをstoreにコミット
      this.$store.dispatch('addTask', this.addData);

      //データをクリア
      this.addData = {};
    }
  }
}
</script>
<style scoped lang="scss">
header {
  background: #00BCD4;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 10;
  h1 {
    color: #fff;
    font-size: 2.4rem;
    font-family: 'Lato', sans-serif;
    padding: 13px 0 13px 15px;
  }
  #addTasks {
    width: 50px;
    height: 50px;
    background-color: #FF9800;
    position: absolute;
    top: 0;
    right: 0;
    &::before,
    &::after {
      content: "";
      width: 26px;
      height: 2px;
      background: #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      margin-top: -1px;
      margin-left: -13px;
    }
    &::after {
      transform: rotate(90deg);
    }
  }
}
.taskForm {
  h2 {
    text-align: center;
    font-size: 2.6rem;
    border-bottom: 2px solid #888;
    line-height: 1;
    margin-bottom: 30px;
    padding-bottom: 15px;
  }
  dl {
    & + dl {
      margin-top: 20px;
    }
    dt {
      font-size: 1.8rem;
      margin-bottom: 10px;
    }
    dd {
      input[type="text"],
      textarea {
        width: 100%;
        background: #fff;
        font-size: 1.6rem;
        border: 1px solid #bdb6b6;
        padding: 8px;
        box-sizing: border-box;
        box-shadow: none;
      }
      textarea {
        height: 10em;
        border-radius: 0;
      }
      &.error {
        color: #f00;
        font-size: 1.6rem;
        margin-top: 8px;
      }
    }
  }
}

</style>
