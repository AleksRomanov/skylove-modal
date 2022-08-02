<template>
  <div class="v-popup">
<!--    <div class="v-popup__close">-->
      <i class="material-icons" @click="closePopup">close</i>
<!--    </div>-->
    <div class="v-popup__content">
      <slot></slot>
    </div>
    <div class="v-popup__footer">
      <button @click="closePopup">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-popup",
  props: {},
  data() {
    return {}
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    }
  }
}
</script>

<style lang="scss">
.v-popup {
  z-index: 10;
  padding: 16px;
  position: fixed;
  top: 50px;
  //margin: 0 auto;
  width: 400px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #2c3e50;

  & i {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
