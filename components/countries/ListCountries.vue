<template>
  <v-row class="countries__wrapper">
    <v-col
      v-for="(country,i) in countriesPageList"
      :key="i"
      cols="12"
      md="6"
      lg="4"
      class="countries"
    >
      <CountryCard :country="country" />
    </v-col>
    <v-col v-show="pagesCount>1" cols="12">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-pagination v-model="page" class="paginacao" :length="pagesCount" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
import CountryCard from './CountryCard.vue'

export default {
  components: { CountryCard },

  props: {
    countries: {
      type: Array,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 25
    }
  },

  data () {
    return {
      page: 1,
      pagesCount: Math.ceil(this.countries.length / this.itemsPerPage)
    }
  },

  computed: {
    countriesPageList () {
      return this.countries.slice(this.page * this.itemsPerPage - this.itemsPerPage, this.page * this.itemsPerPage)
    }
  },

  watch: {
    countries (val) {
      this.pagesCount = Math.ceil(val.length / this.itemsPerPage)
    }
  }
}
</script>

<style scoped>
.countries__wrapper{
  overflow: hidden;
}
</style>

<style>
.countries__country{
  position: relative;
  margin: 0px 21px;
}

@media (max-width:600px) {
  .countries__country{
    margin: 0;
  }
}
</style>
