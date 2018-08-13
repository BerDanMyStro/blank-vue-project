<template>
  <div class="blankList">
    <h3 class="pageSubtitle">{{ pageSubtitle }}</h3>
    <div class="blankList-Wrapper">
      <div class="blankList__item" v-for="listItem in listData" v-bind:key="listItem.id">
        <div class="blankList__item__title">{{ listItem.listTitle }}</div>
        <div class="blankList__item__description">{{ listItem.listDesc }}</div>
        <div class="blankList__item__flag">
          <span v-for="flag in (listItem.flags)" v-bind:key="flag.id">{{ flag }}</span>
        </div>
        <div class="blankList__item__place">{{ listItem.place }}</div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'BlankList',
  data () {
    return {
      pageSubtitle: 'Blank List Rendering with v-for',
      listData: [
        {
          listTitle: 'Blank List Item Title 1',
          listDesc: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.',
          flags: ['Flag1'],
          place: 'Szeged'
        },
        {
          listTitle: 'Blank List Item Title 2',
          listDesc: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.',
          flags: ['Flag2', 'Flag3', 'Flag4'],
          place: 'Szeged'
        },
        {
          listTitle: 'Blank List Item Title 3',
          listDesc: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.',
          flags: ['Flag3'],
          place: 'Szeged'
        },
        {
          listTitle: 'Blank List Item Title 4',
          listDesc: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.',
          flags: ['Flag2', 'Flag4'],
          place: 'Szeged'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "../scss/variables";
  @import "../scss/functions";
  @import "../scss/mixins";
  @import "../scss/groups";
  .pageSubtitle{
    color: $brand-5;
    margin: 0 auto 24px;
    font-size: 24px;
    font-weight: 300;
    text-align: center;
  }
  .blankList__item{
    @extend %clearFix;
    margin: 0 auto 24px;
    padding: 24px;
    border-left: 2px solid $brand-2;
    box-shadow: -2px 0 0 0 $brand-7;
    &:last-child{
      margin: 0 auto;
    }
  }
  .blankList__item__title{
    margin-bottom: 16px;
    color: $brand-6;
    font-size: rem(22px);
    font-weight: 600;
  }
  .blankList__item__description{
    margin-bottom: 8px;
    font-size: rem(14px);
    line-height: 1.43;
  }
  .blankList__item__flag{
    @extend %flexBox;
    justify-content: flex-start;
    margin-bottom: 8px;
    span{
      display: block;
      margin: 0 4px 0 0;
      padding: 4px;
      background-color: $brand-2;
      border-radius: $radius;
      color: white;
      font-size: rem(12px);
    }
  }
  .blankList__item__place{
    font-weight: 700;
  }
</style>
