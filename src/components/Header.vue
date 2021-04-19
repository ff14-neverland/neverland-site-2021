<template>
  <div class="header right dark sticky">
    <div class="container">
      <!-- Logo -->
      <div class="header-logo">
        <a href="#">
          <img class="logo-dark" src="../assets/logo-white.png" alt="">
          <img class="logo-light" src="../assets/logo.png" alt="">
        </a>
      </div>
      <!-- Menu -->
      <div class="header-menu">
        <ul class="nav">
          <li class="nav-item">
            <a class="nav-link" href="#">关于Neverland</a>
            <ul class="nav-dropdown">
              <li class="nav-dropdown-item"><a class="nav-dropdown-link" href="#">关于Neverland</a></li>
              <li class="nav-dropdown-item"><a class="nav-dropdown-link" href="#">如何游玩？</a></li>
              <li class="nav-dropdown-item"><a class="nav-dropdown-link" href="#">FAQ</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">资料库</a>
            <ul class="nav-dropdown">
              <li class="nav-dropdown-item"><a class="nav-dropdown-link" href="#">角色卡</a></li>
              <li class="nav-dropdown-item"><a class="nav-dropdown-link" href="#">全部剧情</a></li>
              <li class="nav-dropdown-item"><a class="nav-dropdown-link" href="#">角色相关剧情</a></li>
              <li class="nav-dropdown-item"><a class="nav-dropdown-link" href="#">活动剧情</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">剧照</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">版权声明</a>
          </li>
        </ul>
      </div>
      <!-- Menu Toggle -->
      <button class="header-toggle">
        <span></span>
      </button>
    </div><!-- end container -->
  </div>
  <!-- end Header -->
</template>

<style lang="scss">
.nav-item{
  a{
    font-size: 1.1em;
    font-weight: bold;
  }
}
</style>

<script>
export default {
  name: 'Header',
}
</script>
