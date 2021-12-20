<template>
  <div id="first" class="section-lg">
    <div class="container text-center">
      <div class="margin-bottom-70">
        <div class="row">
          <div class="highlight-wrapper">
            <h2 class="section-title">精選劇情</h2>
            <swiper ref="charaSwiper" :options="swiperOptions">
              <swiper-slide v-for="chara in charas" :key="chara.id">
                 <router-link class="overlay-link" :to="{name:'chara', params: {id: chara.id}}">
                   <div class="chara-wrapper">
                     <img v-if="chara.image" :src="chara.image" alt=""/>
                     <img v-else src="../assets/avatar.png">
                     <div class="item-description">
                       <h3 class="project-title">{{chara.name}}</h3>
                     </div>
                   </div>
                 </router-link>
              </swiper-slide>
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
import lib from '../lib.js';

export default {
  name: 'Highlight',
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  data(){
    return {
      posts: [],
      charas: [],
      swiperOptions: {
        spaceBetween: 20,
        breakpoints: {
          480:{
            slidesPerView: 1,
            spaceBetween: 0,
          },
          768:{
            slidesPerView: 1,
            spaceBetween: 20,
          },
          992:{
            slidesPerView: 2,
            spaceBetween: 20,
          },
        },
      },
    };
  },
  created(){
    this.fetchHighlights();
  },
  methods: {
    async fetchHighlights(){
      const apiUrl = `${process.env.VUE_APP_ENV_APP_URL}/wp-json/neverland/v1/character/highlight`;
      const params = {
        categories: 4,
      };
      const highlightData = await lib.fetchHighlight(apiUrl, params);
      this.charas = highlightData;
    },
  },
}
</script>

<style lang="scss">
.section-title{
  margin-bottom: 50px;
}
.chara-wrapper{
  display: flex;
}
.swiper-slide {
  height: auto;
  .overlay-link{
    width: 100%;
    height: 100%;
    display: block;
    outline: 0;
    border: none;
    overflow: hidden;
    position: relative;
    top: 0;
    left: 0;

    img{
      overflow: hidden;
      flex-basis: 50%;
      height: 100%;
      object-fit: cover;
      background-color: white;
      display: block;
      margin-right: 30px;
    }
  }
}

</style>
