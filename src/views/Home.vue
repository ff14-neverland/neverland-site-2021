<template>
  <div class="home">
    <Header />
    <div class="owl-carousel owl-nav-overlay owl-dots-overlay" data-owl-autoplay="true" data-owl-nav="true" data-owl-dots="true" data-owl-items="1">
      <!-- Slider Item 1 -->
      <div class="section-2xl bg-image" data-bg-src="../assets/carousel.jpg">
        <div class="bg-black-06">
          <div class="container text-center">
            <h6 class="font-small font-weight-normal uppercase margin-bottom-20">Lifestyle, Fashion</h6>
            <h1>Hero Post with Image</h1>
            <a class="button button-lg button-radius button-border-2 button-reveal-right-outline-white margin-top-20" href="#"><i class="ti-arrow-right"></i><span>Read More</span></a>
          </div>
        </div>
      </div>
    </div><!-- end owl-carousel -->
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'

export default {
  name: 'Home',
  components:{
    Header,
  },
  mounted(){
    $(".bg-image").each(function() {
      var bgData = $(this).attr("data-bg-src");
      $(this).css('background-image', 'url("' + bgData + '")');
    });
  },
}
</script>
