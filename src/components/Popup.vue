<template>
  <div class="v-popup">

    <!--    <div class="v-popup__close">-->
    <i class="material-icons" @click="closePopup">close</i>
    <!--    </div>-->
    <p>Добавить отзыв</p>
    <div class="v-popup__content">

      <div class="v-popup__rating">
<!--        <v-card-text v-if="movie.selected == false">-->
<!--          <v-hover v-slot:default="{hover}">-->
<!--            <v-icon :color="hover || movie.stars >= 1 ? 'orange' : 'grey'"-->
<!--                    @mouseover="movie.stars=1"-->
<!--                    @mouseleave="movie.stars=0" x-large-->
<!--                    @click="movie.selected=true"-->
<!--            >mdi-star-->
<!--            </v-icon>-->
<!--          </v-hover>-->
<!--          <v-hover v-slot:default="{hover}">-->
<!--            <v-icon :color="hover || movie.stars >= 2 ? 'orange' : 'grey'"-->
<!--                    @mouseover="movie.stars=2"-->
<!--                    @mouseleave="movie.stars=0" x-large-->
<!--                    @click="movie.selected=true"-->
<!--            >mdi-star-->
<!--            </v-icon>-->
<!--          </v-hover>-->
<!--          <v-hover v-slot:default="{hover}">-->
<!--            <v-icon :color="hover || movie.stars >= 3 ? 'orange' : 'grey'"-->
<!--                    @mouseover="movie.stars=3"-->
<!--                    @mouseleave="movie.stars=0" x-large-->
<!--                    @click="movie.selected=true"-->
<!--            >mdi-star-->
<!--            </v-icon>-->
<!--          </v-hover>-->
<!--          <v-hover v-slot:default="{hover}">-->
<!--            <v-icon :color="hover || movie.stars >= 4 ? 'orange' : 'grey'"-->
<!--                    @mouseover="movie.stars=4"-->
<!--                    @mouseleave="movie.stars=0" x-large-->
<!--                    @click="movie.selected=true"-->
<!--            >mdi-star-->
<!--            </v-icon>-->
<!--          </v-hover>-->
<!--          <v-hover v-slot:default="{hover}">-->
<!--            <v-icon :color="hover || movie.stars >= 5 ? 'orange' : 'grey'"-->
<!--                    @mouseover="movie.stars=5"-->
<!--                    @mouseleave="movie.stars=0" x-large-->
<!--                    @click="movie.selected=true"-->
<!--            >mdi-star-->
<!--            </v-icon>-->
<!--          </v-hover>-->

<!--        </v-card-text>-->
        <p>Рейтинг</p>
      </div>

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


  &__rating {
    width: 200px;
    min-height: 50px;
    background: #ffffff;
    box-shadow: 0 0 17px 0 #2c3e50;
  }

  & i {
    display: flex;
    justify-content: flex-end;
  }
}

</style>
