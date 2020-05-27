import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataSet: [
      
    ]
  },
  mutations: {
    //全タスク取得
    mutateDataSet(state, payload) {
      state.dataSet = payload;
    },
    //タスクを追加する
    muteteAddTask(state, payload) {
      state.dataSet.push(payload);
    },
    //タスク完了
    muteteCompliteTask(state, payload) {
      state.dataSet[Number(payload) - 1].isDone = true;
    },
    //タスクを未了に戻す
    muteteInCompliteTask(state, payload) {
      state.dataSet[Number(payload) - 1].isDone = false;
    }
  },
  actions: {
    commitDataSet(store) {
      return axios.get('/comments')
      .then(response => {
        store.commit('mutateDataSet', response.data.documents)
      })
      .catch((reason) => {
      console.log(reason,'処理に失敗しました')
      })
    },
    //タスクを追加する
    addTask({commit},payload) {
      commit('muteteAddTask', payload)
    },
    //タスク完了
    compliteTask({commit},payload) {
      commit('muteteCompliteTask', payload)
    },
    //タスクを未了に戻す
    inCompliteTask({commit},payload) {
      commit('muteteInCompliteTask', payload)
    }
  },
  getters: {
    //全データ
    getStateDataSet: (state) => state.dataSet,
    //未完了のデータ
    getStateNotCompliteData: (state) => state.dataSet.filter((el) => el.isDone === false),
    //完了済のデータ
    getStateCompliteData: (state) => state.dataSet.filter((el) => el.isDone === true)
  },
  plugins: [createPersistedState()]
})
