<template>
  <div class="v-main">
    <Popup v-if="isPopupVisible" @closePopup="closePopup"
    >
    </Popup>
    <h1>Main page</h1>
    <button class="v-popup__showPopup" @click="showPopup">
      Show Popup Window
    </button>
  </div>
</template>

<script>
import Main from '@/components/Main.vue'
import Popup from '@/components/Popup.vue'

export default {
  name: 'Main',
  components: {
    Main,
    Popup
  },
  data() {
    return {
      isPopupVisible: false
    }
  },
  methods: {
    showPopup() {
      this.isPopupVisible = true
    },
    closePopup() {
      this.isPopupVisible = false
    }
  }
}
</script>

<style lang="scss">
h1 {
  width: 100%;
}

.v-main {
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

</style>
