import Vue from 'vue'
import Vuex from 'vuex'
//import axios from 'axios'
//import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dataSet: [
      {
        id: 1,
        workTtl: "タスクタイトル",
        memo: "タスクのメモが入りますタスクのメモが入りますタスクのメモが入りますタスクのメモが入ります",
        isDone: false
      },
      {
        id: 2,
        workTtl: "タスクタイトル",
        memo: "タスクのメモが入りますタスクのメモが入りますタスクのメモが入りますタスクのメモが入ります",
        isDone: false
      },
      {
        id: 3,
        workTtl: "タスクタイトル",
        memo: "タスクのメモが入りますタスクのメモが入りますタスクのメモが入りますタスクのメモが入ります",
        isDone: false
      },
      {
        id: 4,
        workTtl: "タスクタイトル",
        memo: "タスクのメモが入りますタスクのメモが入りますタスクのメモが入りますタスクのメモが入ります",
        isDone: false
      }
    ]
  },
  mutations: {
    mutateDataSet(state, payload) {
      state.dataSet = payload;
    },
    /*mutateOldTimeSet(state,payload) {
      state.oldTime = payload;
    },
    mutaterRedirectTimerCount(state, payload) {
      state.redirectTime = payload - state.oldTime;
      console.log(state.redirectTime)
    },
    mutateRedirectTimerSet(state,payload) {
      state.redirectTime = payload;
    }*/
  },
  actions: {
    /*commitDataSet(store) {
     return axios.get('/workList.json')
      .then(response => {
        store.commit('mutateDataSet', response.data)
      })
      .catch((reason) => {
       console.log(reason,'処理に失敗しました')
      })
    },
    commitOldTimeSet(store,payload) {
      store.commit('mutateOldTimeSet', payload.time);
    },
    commitRedirectTimerCount(store,payload) {
      store.commit('mutateOldTimeSet', payload.time);
    },
    commitRedirectTimerSet(store,payload) {
      store.commit('mutateRedirectTimerSet', payload.time);
    }*/
  },
  getters: {
    getStateDataSet: (state) => state.dataSet
  },
  //plugins: [createPersistedState()]
})
