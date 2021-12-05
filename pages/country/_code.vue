<template>
  <v-container>
    <v-row v-if="country">
      <v-col cols="12">
        <v-row>
          <v-col cols="12" md="3">
            <v-img class="mx-auto" max-width="400px" :src="country.flags.png || country.coatOfArms.png" :aspect-ratio="16/9" />
          </v-col>
          <v-col cols="">
            <v-list class="country__details">
              <v-list-item class="details__detail">
                <v-list-item-title>Nome Local: {{ localCountryName }}</v-list-item-title>
              </v-list-item>
              <v-list-item class="details__detail">
                <v-list-item-title>Nome Internacional: {{ country.name.common }}</v-list-item-title>
              </v-list-item>
              <v-list-item class="details__detail">
                <v-list-item-title>Capital: {{ country.capital[0] }}</v-list-item-title>
              </v-list-item>
              <v-list-item class="details__detail">
                <v-list-item-title>
                  Região: <nuxt-link
                    :to="{
                      path:'/',
                      query:{
                        region: country.region
                      }
                    }"
                  >
                    {{ country.region }}
                  </nuxt-link>
                </v-list-item-title>
              </v-list-item>
              <v-list-item class="details__detail">
                <v-list-item-title>Sub-região: {{ country.subregion }}</v-list-item-title>
              </v-list-item>
              <v-list-item class="details__detail">
                <v-list-item-title>População: {{ formatPopulationNumber(country.population) }}</v-list-item-title>
              </v-list-item>
              <v-list-item class="details__detail">
                <v-list-item-title>Linguas: {{ countryLanguages }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="12">
            <v-card tile flat>
              <v-card-title>Países Vizinhos:</v-card-title>

              <ListCountries v-if="borderCountries.length>0" :countries="borderCountries" :items-per-page="12" />
              <v-alert v-else text>
                Esse país não possui nenhum país vizinho.
              </v-alert>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import ListCountries from '../../components/countries/ListCountries.vue'

export default {
  components: { ListCountries },

  data () {
    return {
      country: null,
      borderCountries: []
    }
  },

  computed: {
    countryLanguages () {
      if (!this.country) { return null }
      const arr = Object.values(this.country.languages)
      const strLanguages = arr.reduce((p, lang, index, array) => {
        if (index === 0) {
          p += lang
        } else if (index + 1 === array.length) {
          p += ` e ${lang}`
        } else {
          p += `, ${lang}`
        }

        return p
      }, '')

      return strLanguages
    },
    localCountryName () {
      return this.country.name.nativeName && Object.values(this.country.name.nativeName)[0] ? Object.values(this.country.name.nativeName)[0].common : this.country.name.common
    }
  },

  mounted () {
    this.getCountry()
  },

  methods: {
    getCountry () {
      this.$axios.$get(`https://restcountries.com/v3.1/alpha/${this.$route.params.code}`)
        .then((countries) => {
          this.country = countries[0]
          this.getCountryBorderCountries()
        })
    },
    getCountryBorderCountries () {
      this.$axios.$get('https://restcountries.com/v3.1/alpha', {
        params: {
          codes: this.country.borders.join(',')
        }
      })
        .then((countries) => {
          this.borderCountries = countries
        })
    },
    formatPopulationNumber (number) {
      const numberArr = number.toString().split('')
      const resto = numberArr.length % 3
      if (resto === 0) {
        return numberArr.slice(0, 3).join('') + ' ' + this.getNumberCardinalName(number)
      } else if (resto === 1) {
        return numberArr.slice(0, 2).join('') + ' ' + this.getNumberCardinalName(number)
      } else if (resto === 2) {
        return numberArr.slice(0, 1).join('') + ' ' + this.getNumberCardinalName(number)
      }
    },
    getNumberCardinalName (number) {
      const numberSize = number.toString().length
      if (numberSize >= 4 && numberSize <= 6) {
        return 'Mil'
      } else if (numberSize >= 7 && numberSize <= 9) {
        return 'Milhões'
      } else if (numberSize >= 10 && numberSize <= 12) {
        return 'Bilhões'
      }
      return ''
    }
  }
}
</script>

<style scoped>
.details__detail{
  color: #454545 !important;
}
</style>
