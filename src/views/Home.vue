<template>
  <div class="home">
    <Header />
    <Banner />
    <!-- section -->
    <Highlight />
		<!-- end section -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Highlight from '@/components/Highlight.vue'

export default {
  name: 'Home',
  components:{
    Header,
    Banner,
    Highlight,
  },
}
</script>

<style>
.section-lg{
  padding: 110px 0;
}
</style>
