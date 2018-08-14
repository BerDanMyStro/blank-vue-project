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

<style lang="scss"></style>
