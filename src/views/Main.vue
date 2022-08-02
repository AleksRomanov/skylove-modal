<template>
  <div class="v-main">
    <Popup
        v-if="isPopupVisible"
        @closePopup="closePopup"
    >
      <p>Добавить отзыв</p>
      <div class="v-popup__rating">
        <p>Рейтинг</p>

      </div>
    </Popup>
    <h1>Main page</h1>
    <button class="v-popup__showPopup"
            @click="showPopup"
    >
      Show Popup Window
    </button>
  </div>
</template>

<script>
import Main from '@/components/v-main.vue'
import Popup from '@/components/v-popup.vue'

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

.v-popup__rating {
  width: 200px;
  min-height: 50px;
  background: #ffffff;
  box-shadow: 0 0 17px 0 #2c3e50;
}
</style>
