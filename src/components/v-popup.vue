<template>
  <div class="v-popup">
    <div class="v-popup__header">
      <span>App Popup</span>
      <span>
        <i class="material-icons">close</i>
      </span>
    </div>
    <div class="v-popup__content">
      <slot></slot>
    </div>
    <div class="v-popup__footer">
      <button>Close</button>
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
  computed: {}
}
</script>

<style lang="scss">
.v-popup {
  padding: 16px;

  &__header, &__footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
