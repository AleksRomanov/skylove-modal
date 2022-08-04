<template>
  <div class="star-rating" @mouseleave="leaveHandler">
    <span
        v-for="index in starLimit"
        :key="index"
        class="star star--outlined"
        @click.stop="rate(index)"
        @mousemove="hoverHandler(index)"
    >
    </span>
    <div class="star-rating__colored" :style="`width: ${ratingWidthStyles !== '0%' ? ratingWidthStyles : ratingWidth}`"
         @mouseleave="leaveHandler">
      <span
          v-for="index in starLimit"
          :key="index"
          class="star star--colored"
          @click.stop="rate(index)"
          @mousemove="hoverHandler(index)"
      >
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StarRaiting',
  props: {
    rating: {
      type: Number,
      default: 0
    },
    starLimit: {
      type: Number,
      default: 5
    }
  },
  data() {
    return {
      stars: this.rating,
      hovered: 0,
    };
  },
  methods: {
    rate(star) {
      if (typeof star === "number" && star <= this.starLimit && star >= 0) {
        this.stars = star;
        this.$root.$emit("updateStars", this.stars);
      }
    },
    hoverHandler(star) {
      if (typeof star === "number" && star <= this.starLimit && star >= 0) {
        this.hovered = star;
      }
    },
    leaveHandler() {
      this.hovered = 0;
    },
  },
  computed: {
    ratingWidth() {
      return this.stars / this.starLimit * 100 + '%'
    },
    ratingWidthStyles() {
      return (this.hovered / this.starLimit) * 100 + '%';
    }
  },
  mounted() {
    this.$root.$emit("updateStars", this.stars);
  },
}
</script>

<style lang="scss" scoped>
@import "/src/assets/styles/styles";
</style>
