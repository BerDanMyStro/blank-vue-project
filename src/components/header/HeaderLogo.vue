<template>
  <a href="index.html" class="header__logo">
    <img src="../../assets/img/logo.svg">
    <span class="seoWrapper">
          <h1>{{ seoTitle }}</h1>
          <h2>{{ seoSubtitle }}</h2>
      </span>
  </a>
</template>

<script>
export default {
  name: 'HeaderLogo',
  data () {
    return {
      seoTitle: 'Blank Vue Template',
      seoSubtitle: 'Examples for Vue.js templates and scss support'
    }
  }
}
</script>

<style lang="scss" scoped>
    .header__logo{
        display: block;
        width: 60px;
        margin: 0;
        overflow: hidden;
        .seoWrapper{
            position: absolute;
            right: -200%;
            bottom: -200%;
        }
    }
</style>
