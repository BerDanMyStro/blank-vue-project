<template>
  <header class="pageHeader">
    <div class="contentWrapper">
      <HeaderLogo/>
      <!--<nav class="header__nav">
        <router-link to="/">Home</router-link>
        <router-link to="/blankList">BlankList</router-link>
      </nav>-->
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

  .pageHeader{
    width: 100%;
    padding: 16px 0;
    border-bottom: 1px solid $color-border;
    .contentWrapper{
      @extend %flexBox;
      justify-content: space-between;
      align-items: center;
      width: 90%;
    }
  }
  .header__nav{
    @extend %flexBox;
    width: auto;
    align-items: flex-end;
    a{
      display: block;
      margin: 0 8px 0 0;
      padding: 8px 12px;
      color: $color-baseFont;
      &:last-child{
        margin: 0;
      }
      &.router-link-exact-active{
        background: $brand-2;
        color: white;
        border-radius: $radius;
      }
    }
  }

</style>
