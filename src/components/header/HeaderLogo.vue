<template>
  <div class="logoWrapper">
      <a href="/" class="header__logo">
          <img src="../../assets/img/logo.svg">
          <span class="seoWrapper">
          <h1>{{ seoTitle }}</h1>
          <h2>{{ seoSubtitle }}</h2>
      </span>
      </a>
      <div class="header__title">Vue.js demo page</div>
  </div>
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
  @import "../../scss/variables";
  @import "../../scss/groups";
  .logoWrapper{
    @extend %flexBox;
    justify-content: flex-start;
    align-items: center;
    width: auto;
  }
  .header__logo{
    display: block;
    width: 60px;
    margin: 0;
    overflow: hidden;
    .seoWrapper{
      position: absolute;
      right: 200%;
      bottom: 200%;
    }
  }
  .header__title{
    font-size: 24px;
  }
</style>
