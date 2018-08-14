<template>
  <div class="blankHome">
    <h3 class="pageSubtitle">{{ pageSubtitle }}</h3>
    <div>home content</div>
  </div>
</template>

<script>

export default {
  name: 'BlankHome',
  data () {
    return {
      pageSubtitle: 'Blank Vue Page to Learn'
    }
  },
  methods: {

  },
  computed: {
  }
}
</script>

<style lang="scss">
  @import "../../scss/variables";
  @import "../../scss/functions";
  @import "../../scss/mixins";
  @import "../../scss/groups";
</style>
