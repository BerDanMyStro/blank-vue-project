<template>
    <footer id="footer">
        <div class="contentWrapper">
            Vue-js demo page by <i>MyStro</i> - &copy; {{ Company }} 2018.
        </div>
    </footer>
</template>

<script>

export default {
  name: 'pageFooter',
  data () {
    return {
      Company: 'nexum'
    }
  }
}

</script>

<style lang="scss">
    @import "../scss/variables";
    @import "../scss/functions";
    @import "../scss/mixins";
    @import "../scss/groups";

    footer{
        @extend %clearFix;
        width: 100%;
        padding: 32px 0;
        background: $brand-4;
        color: $rgba-white50;
        font-size: rem(12px);
        text-align: center;
        i{
          font-style: italic;
        }
    }
</style>
