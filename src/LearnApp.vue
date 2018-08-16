<template>
  <div id="jumpHere" class="stickyWrapper">
    <PageHeader/>
    <PageWrapper/>
    <PageFooter/>
  </div>
</template>

<script>
import PageHeader from './components/PageHeader'
import PageFooter from './components/PageFooter'
import PageWrapper from './components/PageWrapper'

export default {
  name: 'learnApp',
  components: {
    PageHeader,
    PageWrapper,
    PageFooter
  }
}

</script>

<style lang="scss">
  @import "./scss/variables";
  @import "./scss/functions";
  @import "./scss/mixins";
  @import "./scss/groups";
  .pageSubtitle{
    color: $brand-5;
    margin: 0 auto 24px;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
  }
</style>
