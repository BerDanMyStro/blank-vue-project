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
  @import "scss/variables";
  @import "scss/groups";

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
