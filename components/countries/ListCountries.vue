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
      <v-hover v-slot="{hover}">
        <v-card class="countries__country" link nuxt :to="`/country/${country.cca3||country.alpha3Code}`">
          <v-responsive :aspect-ratio="16/9">
            <v-img :aspect-ratio="16/9" :src="country.flags.png || country.coatOfArms.png" />
          </v-responsive>
          <v-expand-transition>
            <div
              v-if="hover"
              class="country__hover-panel"
            >
              <p>{{ country.name.common }} | {{ country.cca3 }}</p>
            </div>
          </v-expand-transition>
        </v-card>
      </v-hover>
    </v-col>
    <v-col v-show="pagesCount>1" cols="12">
      <v-row justify="center">
        <v-col cols="12" sm="8" md="6" lg="4">
          <v-pagination v-model="page" :length="pagesCount" />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script>
export default {
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

.country__hover-panel{
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  background: #fff;
}

.country__hover-panel p{
  margin: 15px;
  font-size: 1.1em;
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
