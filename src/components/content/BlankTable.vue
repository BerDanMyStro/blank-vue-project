<template>
  <div class="blankList">
    <h3 class="pageSubtitle">{{ pageSubtitle }}</h3>
    <b-table responsive hover :items="items" :fields="fields"></b-table>
    <b-pagination size="md" :total-rows="100" v-model="currentPage" :per-page="10"></b-pagination>
    <div class="blankList__currentPage">Current page: {{currentPage}}</div>
  </div>
</template>

<script>
export default {
  name: 'BlankTable',
  data () {
    return {
      pageSubtitle: 'Responsive Bootstrap Table',
      currentPage: 1,
      fields: {
        last_name: {
          label: 'Person last name',
          sortable: true
        },
        first_name: {
          label: 'Person first name',
          sortable: false
        },
        foo: {
          key: 'age',
          label: 'Person age',
          sortable: true
        },
        city: {
          key: 'address.city'
        },
        'address.country': {
          label: 'Country'
        }
      },
      items: [
        { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald', address: { country: 'USA', city: 'New York' } },
        { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw', address: { country: 'Canada', city: 'Toronto' } },
        { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson', address: { country: 'Australia', city: 'Sydney' } },
        { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney', address: { country: 'England', city: 'London' } }
      ]
    }
  }
}
</script>

<style lang="scss">
  @import "../../scss/variables";
  @import "../../scss/functions";
  @import "../../scss/mixins";
  @import "../../scss/groups";
  table.b-table > thead{
    *{
      outline: none;
    }
  }
  .table-hover tbody tr:hover{
    background: $brand-2;
    color: white;
  }
  .pagination{
    justify-content: center;
    .page-item{
      .page-link{
        color: $brand-2;
        &:focus{
          box-shadow: 0 0 0 0.2rem rgba(66, 184, 131, 0.25);
        }
      }
      &.active .page-link{
        border-color: $brand-2;
        background: $brand-2;
        color: white;
      }
    }
  }
  .blankList__currentPage{
    color: $brand-2;
    text-align: center;
    font-size: rem(12px);
  }
</style>
