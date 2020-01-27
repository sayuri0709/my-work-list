<template>
  <div id="app">
    <div id="loadContent" :class="{ load: isLoad }">
      <transition name="router-transition" appear mode="out-in">
        <router-view/>
      </transition>
    </div>
  </div>
</template>
<style lang="scss">
  @import "@/assets/scss/style.scss";
</style>
<script>
export default {
  data() {
    return {
      isLoad: false
    }
  },
  created() {
    //store内のデータ取得のactionを実行
    //this.$store.dispatch('commitDataSet')
  },
  mounted() {
    this.windowLoad();
  },
  methods: {
    windowLoad: function() {
      const root = this;
      window.addEventListener('load', ()=>{
        root.isLoad = true;
      });
    }
  }
}
</script>