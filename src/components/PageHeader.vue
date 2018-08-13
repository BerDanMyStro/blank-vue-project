<template>
  <header>
    <div class="contentWrapper">
      <HeaderLogo/>
      <div class="header__title">
        Vue.js demo page
      </div>
    </div>
  </header>
</template>

<script>
import HeaderLogo from './header/HeaderLogo'

export default {
  name: 'PageHeader',
  components: {
    HeaderLogo
  }
}
</script>

<style lang="scss">
  @import "../scss/variables";
  @import "../scss/groups";

  header{
    padding: 16px 0;
    border-bottom: 1px solid $color-border;
    .contentWrapper{
      @extend %flexBox;
      justify-content: flex-start;
      align-items: center;
    }
  }

  .header__title{
    font-size: 24px;
  }

</style>
