import { shallowMount, createLocalVue } from '@vue/test-utils'
import { Store } from 'vuex'
import Vuetify from 'vuetify'
import Index from '@/pages/index.vue'
import * as StoreHomeSearch from '@/store/homeSearch'

describe('/pages/index.vue', () => {
  describe('pesquisar paises por capital', () => {
    test('não aceita pesquisar pela capital sem informar a capital', () => {
      const localVue = createLocalVue()

      const store = new Store({
        modules: {
          homeSearch: {
            namespaced: true,
            ...StoreHomeSearch
          }
        }
      })

      const mockRoute = {
        query: {}
      }

      const mockAxios = {
        $get: jest.fn((url) => {
          return new Promise((resolve) => {
            resolve([])
          })
        })
      }

      const FormStub = {
        render: () => {},
        methods: {
          validate: () => false
        }
      }

      const wrapper = shallowMount(Index, {
        localVue,
        mocks: {
          $route: mockRoute,
          $axios: mockAxios,
          $store: store
        },
        stubs: {
          VForm: FormStub
        }
      })

      expect(mockAxios.$get).toHaveBeenCalledWith('https://restcountries.com/v3.1/all')
      wrapper.vm.setFilterBy('capital')
      wrapper.vm.setSearch('')
      wrapper.vm.setFormValid(false)
      wrapper.vm.searchCountries()

      // Checar se botao de pesquisa existe
      // Obs: Impossivel checar se for shallowmount
      // const botaoPesquisar = wrapper.find('.botao-pesquisar')
      // expect(botaoPesquisar.exists()).toBeTruthy()

      // Obs: Não consegui colocar para clicar no botao por causa do mount com erro
      // botaoPesquisar.trigger('click')
      expect(mockAxios.$get).toHaveBeenCalledTimes(1)
    })

    test('pesquisar pela capital', async () => {
      const localVue = createLocalVue()

      const store = new Store({
        modules: {
          homeSearch: {
            namespaced: true,
            ...StoreHomeSearch
          }
        }
      })

      const mockRoute = {
        query: {}
      }

      const mockAxios = {
        $get: jest.fn((url) => {
          return new Promise((resolve) => {
            if (url === 'https://restcountries.com/v3.1/capital/Berlin') {
              resolve([
                {
                  name: {
                    common: 'Germany',
                    official: 'Federal Republic of Germany',
                    nativeName: {
                      deu: {
                        official: 'Bundesrepublik Deutschland',
                        common: 'Deutschland'
                      }
                    }
                  },
                  tld: [
                    '.de'
                  ],
                  cca2: 'DE',
                  ccn3: '276',
                  cca3: 'DEU',
                  cioc: 'GER',
                  independent: true,
                  status: 'officially-assigned',
                  unMember: true,
                  currencies: {
                    EUR: {
                      name: 'Euro',
                      symbol: '€'
                    }
                  },
                  idd: {
                    root: '+4',
                    suffixes: [
                      '9'
                    ]
                  },
                  capital: [
                    'Berlin'
                  ],
                  altSpellings: [
                    'DE',
                    'Federal Republic of Germany',
                    'Bundesrepublik Deutschland'
                  ],
                  region: 'Europe',
                  subregion: 'Western Europe',
                  languages: {
                    deu: 'German'
                  },
                  translations: {
                    ara: {
                      official: 'جمهورية ألمانيا الاتحادية',
                      common: 'ألمانيا'
                    },
                    ces: {
                      official: 'Spolková republika Německo',
                      common: 'Německo'
                    },
                    cym: {
                      official: 'Federal Republic of Germany',
                      common: 'Germany'
                    },
                    deu: {
                      official: 'Bundesrepublik Deutschland',
                      common: 'Deutschland'
                    },
                    est: {
                      official: 'Saksamaa Liitvabariik',
                      common: 'Saksamaa'
                    },
                    fin: {
                      official: 'Saksan liittotasavalta',
                      common: 'Saksa'
                    },
                    fra: {
                      official: "République fédérale d'Allemagne",
                      common: 'Allemagne'
                    },
                    hrv: {
                      official: 'Njemačka Federativna Republika',
                      common: 'Njemačka'
                    },
                    hun: {
                      official: 'Német Szövetségi Köztársaság',
                      common: 'Németország'
                    },
                    ita: {
                      official: 'Repubblica federale di Germania',
                      common: 'Germania'
                    },
                    jpn: {
                      official: 'ドイツ連邦共和国',
                      common: 'ドイツ'
                    },
                    kor: {
                      official: '독일 연방 공화국',
                      common: '독일'
                    },
                    nld: {
                      official: 'Bondsrepubliek Duitsland',
                      common: 'Duitsland'
                    },
                    per: {
                      official: 'جمهوری فدرال آلمان',
                      common: 'آلمان'
                    },
                    pol: {
                      official: 'Republika Federalna Niemiec',
                      common: 'Niemcy'
                    },
                    por: {
                      official: 'República Federal da Alemanha',
                      common: 'Alemanha'
                    },
                    rus: {
                      official: 'Федеративная Республика Германия',
                      common: 'Германия'
                    },
                    slk: {
                      official: 'Nemecká spolková republika',
                      common: 'Nemecko'
                    },
                    spa: {
                      official: 'República Federal de Alemania',
                      common: 'Alemania'
                    },
                    swe: {
                      official: 'Förbundsrepubliken Tyskland',
                      common: 'Tyskland'
                    },
                    urd: {
                      official: 'وفاقی جمہوریہ جرمنی',
                      common: 'جرمنی'
                    },
                    zho: {
                      official: '德意志联邦共和国',
                      common: '德国'
                    }
                  },
                  latlng: [
                    51,
                    9
                  ],
                  landlocked: false,
                  borders: [
                    'AUT',
                    'BEL',
                    'CZE',
                    'DNK',
                    'FRA',
                    'LUX',
                    'NLD',
                    'POL',
                    'CHE'
                  ],
                  area: 357114,
                  demonyms: {
                    eng: {
                      f: 'German',
                      m: 'German'
                    },
                    fra: {
                      f: 'Allemande',
                      m: 'Allemand'
                    }
                  },
                  flag: '🇩🇪',
                  maps: {
                    googleMaps: 'https://goo.gl/maps/mD9FBMq1nvXUBrkv6',
                    openStreetMaps: 'https://www.openstreetmap.org/relation/51477'
                  },
                  population: 83240525,
                  gini: {
                    2016: 31.9
                  },
                  fifa: 'GER',
                  car: {
                    signs: [
                      'DY'
                    ],
                    side: 'right'
                  },
                  timezones: [
                    'UTC+01:00'
                  ],
                  continents: [
                    'Europe'
                  ],
                  flags: {
                    png: 'https://flagcdn.com/w320/de.png',
                    svg: 'https://flagcdn.com/de.svg'
                  },
                  coatOfArms: {
                    png: 'https://mainfacts.com/media/images/coats_of_arms/de.png',
                    svg: 'https://mainfacts.com/media/images/coats_of_arms/de.svg'
                  },
                  startOfWeek: 'monday',
                  capitalInfo: {
                    latlng: [
                      52.52,
                      13.4
                    ]
                  },
                  postalCode: {
                    format: '#####',
                    regex: '^(\\d{5})$'
                  }
                }
              ])
            } else {
              resolve([])
            }
          })
        })
      }

      const FormStub = {
        render: () => {},
        methods: {
          validate: () => true
        }
      }

      localVue.use(Vuetify)
      const wrapper = shallowMount(Index, {
        localVue,
        mocks: {
          $route: mockRoute,
          $axios: mockAxios,
          $store: store
        },
        stubs: {
          VForm: FormStub
        }
      })

      expect(mockAxios.$get).toHaveBeenCalledWith('https://restcountries.com/v3.1/all')

      // Preencher formulario de pesquisa
      wrapper.vm.setFilterBy('capital')
      wrapper.vm.setSearch('Berlin')
      wrapper.vm.setFormValid(true)
      wrapper.vm.searchCountries()

      // Checar se botao de pesquisa existe
      // Obs: Impossivel checar se for shallowmount
      // const botaoPesquisar = wrapper.find('.botao-pesquisar')
      // expect(botaoPesquisar.exists()).toBeTruthy()

      // Checar a resposta da pesquisa
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.countries).toHaveLength(1)
      expect(wrapper.vm.countries[0].name.common).toEqual('Germany')

      expect(mockAxios.$get).toHaveBeenCalledTimes(2)
      expect(mockAxios.$get).toHaveBeenCalledWith('https://restcountries.com/v3.1/capital/Berlin')
    })
  })
})
