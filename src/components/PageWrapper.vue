<template>
  <div id="pageWrapper">
    <div class="contentWrapper">
      <h2 class="pageTitle">{{ pageTitle }}</h2>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import BlankList from './content/BlankList'

export default {
  name: 'pageWrapper',
  components: {BlankList},
  data () {
    return {
      pageTitle: 'Welcome to Vue.js demo page'
    }
  }
}
</script>

<style lang="scss">
  @import "../scss/variables";
  @import "../scss/functions";
  @import "../scss/mixins";
  @import "../scss/groups";

  #pageWrapper{
    width: 100%;
    margin: 0;
    padding: 0;
    .contentWrapper{
      padding: 24px 0 60px;
    }
  }
  .pageTitle{
    display: block;
    width: 100%;
    margin: 0 auto 32px;
    font-size: rem(36px);
    font-weight: 300;
    text-align: center;
  }
  .contentWrapper{
    width: 90%;
    max-width: #{$contentWidth};
    margin: 0 auto;
  }
</style>
