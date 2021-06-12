<template>
  <div class="home">
    <Header />
    <Banner />
    <!-- section -->
		<div id="first" class="section-lg">
			<div class="container text-center">
				<div class="margin-bottom-70">
					<div class="row">
						<div class="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
							<h2>精選劇情</h2>

						</div>
					</div>
				</div>
			</div><!-- end container -->
		</div>
		<!-- end section -->
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'

export default {
  name: 'Home',
  components:{
    Header,
    Banner,
  },
}
</script>

<style>
.section-lg{
  padding: 110px 0;
}
</style>
