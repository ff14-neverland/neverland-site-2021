<template>
  <div id="first" class="section-lg">
    <div class="container text-center">
      <div class="margin-bottom-70">
        <div class="row">
          <div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
            <h2>精選劇情</h2>
            <swiper ref="mySwiper">
              <swiper-slide>Slide 1</swiper-slide>
              <swiper-slide>Slide 2</swiper-slide>
              <swiper-slide>Slide 3</swiper-slide>
              <swiper-slide>Slide 4</swiper-slide>
              <swiper-slide>Slide 5</swiper-slide>
              <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
          </div>
        </div>
      </div>
    </div><!-- end container -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css';

export default {
  name: 'Highlight',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
</script>

<style lang="scss">

</style>
