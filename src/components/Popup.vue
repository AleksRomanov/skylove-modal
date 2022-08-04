<template>
  <div class="v-popup">
    <!--    <div class="v-popup__close">-->
    <i class="material-icons" @click="closePopup">close</i>
    <!--    </div>-->
    <p>Добавить отзыв</p>
    <div class="v-popup__content">

      <div class="v-popup__rating">
        <p>Ваша оценка</p>
<!--        <button @click="increment" outlined>Click</button>-->
        <StarRaiting/>
      </div>

      <textarea class="v-popup__rating-text" />

    </div>
    <div class="v-popup__footer">
      <button class="v-popup__btn-close" @click="closePopup">Отправить отзыв</button>
    </div>
  </div>
</template>

<script>
import StarRaiting from "@/components/StarRaiting";

export default {
  name: "v-popup",
  components: {
    StarRaiting
  },
  props: {},
  data() {
    return {
      amountOfClicks: 0
    }
  },
  methods: {
    closePopup() {
      this.$emit('closePopup')
    }
  }
}
</script>

<style lang="scss">
@import "/src/assets/styles/styles.scss";

</style>
