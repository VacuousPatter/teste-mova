<template>
  <v-container>
    <v-form ref="form-filters" @input="setFormValid">
      <v-row justify="end" justify-md="start" align="center">
        <v-col cols="12" md="6" lg="3">
          <v-select :value="filterBy" :items="itemsListFilterBy" label="Filtar por" item-color="transparent" @input="setFilterBy">
            <template #prepend-item>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold item__title">
                    Escolha uma opção
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>

            <template #item="{on,attrs,item}">
              <v-list-item v-bind="attrs" v-on="on">
                <v-list-item-content>
                  <v-list-item-title class="font-weight-bold item__title" :class="{'item--active':filterBy===item.value}">
                    {{ item.text }}
                  </v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>
          </v-select>
        </v-col>
        <v-col v-if="filterBy" cols="12" md="6" lg="3">
          <v-select
            v-if="filterBy === 'region'"
            :value="search"
            :placeholder="placeholderSearch"
            persistent-placeholder
            :items="allRegions"
            :rules="[ruleRequired]"
            @input="setSearch"
            @keypress.enter="searchCountries()"
          >
            <template #label>
              <span class="primary--text">{{ labelSearch }}</span>
            </template>
          </v-select>

          <v-autocomplete
            v-else-if="['capital','lang'].some(str => str === filterBy)"
            :value="search"
            :placeholder="placeholderSearch"
            persistent-placeholder
            :items="itemsAutoCompleteSearch"
            no-data-text="Nenhum resultado encontrado."
            :rules="[ruleRequired]"
            @input="setSearch"
            @keypress.enter="searchCountries()"
          >
            <template #label>
              <span class="primary--text">{{ labelSearch }}</span>
            </template>
          </v-autocomplete>

          <v-text-field
            v-else
            :value="search"
            :placeholder="placeholderSearch"
            persistent-placeholder
            :rules="[ruleRequired]"
            @input="setSearch"
            @keypress.enter="searchCountries()"
          >
            <template #label>
              <span class="primary--text">{{ labelSearch }}</span>
            </template>
          </v-text-field>
        </v-col>
        <v-col cols="auto">
          <v-btn color="primary" :loading="loadingCountries" class="botao-pesquisar" @click="searchCountries">
            Pesquisar
          </v-btn>
        </v-col>
      </v-row>
    </v-form>

    <v-row v-if="loadingCountries" justify="center">
      <v-col cols="auto">
        <v-progress-circular indeterminate />
      </v-col>
    </v-row>

    <ListCountries :countries="countries" :items-per-page="12" />
  </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import ListCountries from '../components/countries/ListCountries.vue'

export default {
  components: { ListCountries },

  data () {
    return {
      countries: [],
      allCountries: [],
      loadingCountries: false,
      countriesError: null,
      lockWatchFilterBy: false,

      itemsListFilterBy: [
        {
          text: 'Região',
          value: 'region'
        },
        {
          text: 'Capital',
          value: 'capital'
        },
        {
          text: 'Língua',
          value: 'lang'
        },
        {
          text: 'País',
          value: 'country'
        },
        {
          text: 'Código de Ligação',
          value: 'calling-code'
        }
      ],

      allRegions: [
        {
          text: 'África',
          value: 'africa'
        },
        {
          text: 'Américas',
          value: 'americas'
        },
        {
          text: 'Antártida',
          value: 'antartic'
        },
        {
          text: 'Ásia',
          value: 'asia'
        },
        {
          text: 'Europa',
          value: 'europe'
        },
        {
          text: 'Oceânia',
          value: 'oceania'
        }
      ]
    }
  },

  computed: {
    ...mapState('homeSearch', ['search', 'filterBy', 'formValid']),
    labelSearch () {
      if (this.filterBy === 'region') { return 'Região' }
      if (this.filterBy === 'capital') { return 'Capital' }
      if (this.filterBy === 'lang') { return 'Língua' }
      if (this.filterBy === 'country') { return 'País' }
      if (this.filterBy === 'calling-code') { return 'Código de ligação' }
      return ''
    },
    placeholderSearch () {
      if (this.filterBy === 'region') { return 'Escolha uma região' }
      if (this.filterBy === 'capital') { return 'Digite uma capital' }
      if (this.filterBy === 'lang') { return 'Digite uma Língua' }
      if (this.filterBy === 'country') { return 'Digite um país' }
      if (this.filterBy === 'calling-code') { return 'Digite um código de ligação' }
      return ''
    },
    itemsAutoCompleteSearch () {
      if (this.filterBy === 'capital') { return this.allCapitals }
      if (this.filterBy === 'lang') { return this.allLanguages }
      return []
    },
    allCapitals () {
      return this.allCountries
        .reduce((p, v) => {
          if (!v.capital) { return p }
          p.push(...v.capital.map((c) => {
            return {
              text: c,
              value: c
            }
          }))
          return p
        }, [])
        .sort((a, b) => {
          return a.text.localeCompare(b.text)
        })
    },
    allLanguages () {
      return this.allCountries
        .reduce((p, v) => {
          if (!v.languages) { return p }
          const languages = Object.keys(v.languages).map((langCode) => {
            return {
              value: langCode,
              text: v.languages[langCode]
            }
          })
          languages.forEach((language) => {
            if (!p.includes(language)) {
              p.push(language)
            }
          })

          return p
        }, [])
        .sort((a, b) => {
          return a.text.localeCompare(b.text)
        })
    },
    searchCountriesUrl () {
      const base = 'https://restcountries.com/'
      if (this.filterBy === 'region') { return base + `v3.1/region/${this.search}` }
      if (this.filterBy === 'capital') { return base + `v3.1/capital/${this.search}` }
      if (this.filterBy === 'lang') { return base + `v3.1/lang/${this.search}` }
      if (this.filterBy === 'country') { return base + `v3.1/name/${this.search}` }
      if (this.filterBy === 'calling-code') { return base + `v2/callingcode/${this.search}` }
      return base
    }
  },

  watch: {
    'filterBy' () {
      if (this.lockWatchFilterBy) { return }
      this.setSearch('')
    }
  },

  mounted () {
    if (this.$route.query.region) {
      const region = this.allRegions.find(r => r.value === this.$route.query.region.toLowerCase())
      if (region) {
        this.lockWatchFilterBy = true
        this.setFilterBy('region')
        this.setSearch(region.value)
        this.$nextTick(() => {
          this.lockWatchFilterBy = false
        })
      }
    }

    this.getCountries()
    if (this.filterBy) { this.searchCountries() }
  },

  methods: {
    ...mapMutations('homeSearch', ['setSearch', 'setFilterBy', 'setFormValid']),
    getCountries () {
      this.loadingCountries = true
      this.countriesError = null

      this.$axios.$get('https://restcountries.com/v3.1/all')
        .then((countries) => {
          if (!this.filterBy) { this.countries = countries }
          this.allCountries = countries
        })
        .catch(() => {
          this.countriesError = 'Ocorreu um erro ao obter os países!'
        })
        .finally(() => {
          this.loadingCountries = false
        })
    },
    searchCountries () {
      this.$refs['form-filters'].validate()
      if (!this.formValid) { return }
      this.loadingCountries = true
      this.countriesError = null
      this.$axios.$get(this.searchCountriesUrl)
        .then((countries) => {
          if (countries.status === 404) {
            this.countriesError = 'Nenhum país encontrado com esse filtro!'
          }
          this.countries = countries
        })
        .catch(() => {
          this.countriesError = 'Ocorreu um erro ao obter os países!'
        })
        .finally(() => {
          this.loadingCountries = false
        })
    },

    ruleRequired (val) {
      if (!val && !val.trim()) { return 'Campo obrigatório!' }
      return true
    }
  }
}
</script>

<style scoped>
.item__title{
  color: #8D8D8D;
}

.item--active{
  color: #02AE99;
}

.botao-pesquisar{
  border-radius: 10px;
}
</style>
