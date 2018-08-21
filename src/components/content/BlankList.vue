<template>
  <div class="blankList">
    <h3 class="pageSubtitle">{{ pageSubtitle }}</h3>
    <div class="blankList__filter">
      <form>
        <input type="text" title="Place Filter" placeholder="City" v-model="search">
        <!--<select name="selectFlag">
          <option>Select Flag</option>
        </select>-->
      </form>
    </div>
    <div class="blankList-Wrapper">
      <div class="blankList__item" v-for="(listItem, key) in filteredPlaces" v-bind:key="listItem.id" v-on:click="listData[key].displayData = !listData[key].displayData">
        <div class="blankList__item__title">{{ listItem.listTitle }}</div>
        <div class="blankList__item__description" v-show="listData[key].displayData">{{ listItem.listDesc }}</div>
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
          listDesc: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content. It\'s also called placeholder (or filler) text. It\'s a convenient tool for mock-ups. It helps to outline the visual elements of a document or presentation, eg typography, font, or layout.',
          flags: ['Flag1'],
          place: 'Szeged',
          displayData: false
        },
        {
          listTitle: 'Blank List Item Title 2',
          listDesc: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.',
          flags: ['Flag2', 'Flag3', 'Flag4'],
          place: 'Budapest',
          displayData: false
        },
        {
          listTitle: 'Blank List Item Title 3',
          listDesc: 'In a professional context it often happens that private or corporate clients corder a publication to be made and presented with the actual content still not being ready. Think of a news blog that\'s filled with content hourly on the day of going live. However, reviewers tend to be distracted by comprehensible content, say, a random text copied from a newspaper or the internet.',
          flags: ['Flag3'],
          place: 'Kecskemét',
          displayData: true
        },
        {
          listTitle: 'Blank List Item Title 4',
          listDesc: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.',
          flags: ['Flag2', 'Flag4'],
          place: 'Szeged',
          displayData: false
        },
        {
          listTitle: 'Blank List Item Title 2',
          listDesc: 'Lorem ipsum is a pseudo-Latin text used in web design, typography, layout, and printing in place of English to emphasise design elements over content.',
          flags: ['Flag2', 'Flag3', 'Flag4'],
          place: 'Budapest',
          displayData: false
        }
      ],
      search: ''
    }
  },
  methods: {

  },
  computed: {
    filteredPlaces: function () {
      return this.listData.filter((listItem) => {
        return listItem.place.match(this.search)
      })
    }
  }
}
</script>

<style lang="scss">
  @import "../../scss/variables";
  @import "../../scss/functions";
  @import "../../scss/mixins";
  @import "../../scss/groups";

  .blankList__item{
    @extend %clearFix;
    @include selectDisable;
    margin: 0 auto 24px;
    padding: 24px;
    border-left: 2px solid $brand-2;
    box-shadow: -2px 0 0 0 $brand-7;
    cursor: pointer;
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
  /* Place Filter */
  .blankList__filter{
    @extend %flexBox;
    justify-content: flex-end;
    margin-bottom: 24px;
    input, select{
      @include appearencNone;
      height: 36px;
      padding: 0 8px;
      border: 1px solid $color-border;
      border-radius: $radius;
      outline-color: $brand-2;
      &::-webkit-input-placeholder{
        color: $color-baseFont;
      }
    }
    select{
      min-width: 120px;
      padding: 0 36px 0 8px;
      background: url("../../assets/img/svg-select.svg") no-repeat right 7px center / 10px;
      option{
        color: $color-baseFont;
      }
    }
  }
</style>
