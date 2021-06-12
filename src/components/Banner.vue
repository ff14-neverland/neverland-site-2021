<template>
  <div class="banner">
    <div class="banner-text">
      <h2 class="header-line-1">FFXIV NEVERLAND</h2>
      <h1 class="header-line-2">最終幻想14寫作/語C創作交流群</h1>
      <div class="website-info">
        <p>欢迎来到Neverland海德林，FF14写作及创作交流群的官方网站！</p>
        <p>在这里，你可以找到关于Neverland海德林的一切。 </p>
        <p>如果你是从未接触过Nerverland的新人，请先从Nerverland的详细介绍开始了解吧！</p>
      </div>
    </div>
    <div class="banner-image">
      <img src="../assets/carousel1.jpg" />
    </div>
  </div><!-- end owl-carousel -->
</template>

<script>
export default {
  name: 'Banner',
}
</script>
<style lang="scss">
.header-line-1{
  -webkit-text-stroke: 1px #000;
  color: transparent;
}
.website-info{
  text-align: center;
  margin-top: 1em;
}
.banner{
  display: flex;
}
.banner-text{
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.banner-image{
  width: 50%;
  clip-path: polygon(0% 100%,21% 0%,100% 0%,100% 100%);
}
</style>
