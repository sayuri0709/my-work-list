<template>
  <transition name="modal" appear>
    <div class="modal">
      <div class="modalWindow">
        <div class="modalContent">
          <slot/>
        </div>
        <p class="btnClose" @click="$emit('close')"><img src="@/assets/images/icon_close.svg" alt="Close"></p>
      </div>
    </div>
  </transition>
</template>
<script>
  export default {
    name:'ModalContent'
  }
</script>
<style lang="scss">
.modal {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  padding: 60px 15px;
  z-index: 20;
  overflow: auto;
  .modalWindow {
    .btnClose {
      width: 50px;
      height: 50px;
      position: absolute;
      top: 0;
      right: 0;
      cursor: pointer;
      background: #888;
      img {
        width: 20px!important;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
      }

    }
  }
}
// transition
.modal-enter-active, .modal-leave-active {
  transition: opacity 0.4s, transform 0.4s;
  transform: translate(0, 0);
}
.modal-leave-active {
  transition: opacity 0.6s ease 0.1s , transform 0.4s 0.1s;
}
.modal-enter, .modal-leave-to {
  opacity: 0;
  transform: translate(0, 80px);
}
</style>