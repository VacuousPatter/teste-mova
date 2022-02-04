import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import { Store } from 'vuex'
import Vuetify from 'vuetify'
import Index from '@/pages/index.vue'
import * as StoreHomeSearch from '@/store/homeSearch'
const data = require('./index.data.json')

describe('/pages/index.vue', () => {
  describe('pesquisar paises pela capital', () => {
    test('não aceita pesquisar pela capital sem informar a capital', async () => {
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

      const wrapper = mount(Index, {
        localVue,
        vuetify: new Vuetify(),
        mocks: {
          $route: mockRoute,
          $axios: mockAxios,
          $store: store
        },
        stubs: {
          NuxtLink: RouterLinkStub
        }
      })

      expect(mockAxios.$get).toHaveBeenCalledWith('https://restcountries.com/v3.1/all')
      wrapper.vm.setFilterBy('capital')
      await wrapper.vm.$nextTick()
      wrapper.vm.setSearch('')
      await wrapper.vm.$nextTick()

      // Checar se botao de pesquisa existe
      const botaoPesquisar = wrapper.find('.botao-pesquisar')
      expect(botaoPesquisar.exists()).toBeTruthy()
      botaoPesquisar.trigger('click') // Clicar para pesquisar
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
              resolve(data.pesquisaCapital.pesquisaResult)
            } else {
              resolve([])
            }
          })
        })
      }

      const wrapper = mount(Index, {
        localVue,
        vuetify: new Vuetify(),
        mocks: {
          $route: mockRoute,
          $axios: mockAxios,
          $store: store
        },
        stubs: {
          NuxtLink: RouterLinkStub
        }
      })

      expect(mockAxios.$get).toHaveBeenCalledWith('https://restcountries.com/v3.1/all')

      // Preencher formulario de pesquisa
      wrapper.vm.setFilterBy('capital')
      await wrapper.vm.$nextTick()
      wrapper.vm.setSearch('Berlin')
      await wrapper.vm.$nextTick()

      // Checar se botao de pesquisa existe
      const botaoPesquisar = wrapper.find('.botao-pesquisar')
      expect(botaoPesquisar.exists()).toBeTruthy()
      botaoPesquisar.trigger('click') // Clicar para pesquisar
      expect(mockAxios.$get).toHaveBeenCalledTimes(2)
      expect(mockAxios.$get).toHaveBeenCalledWith('https://restcountries.com/v3.1/capital/Berlin')

      // Checar a resposta da pesquisa
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.countries).toHaveLength(1)
      expect(wrapper.vm.countries[0].name.common).toEqual('Germany')
    })
  })

  describe('pesquisar pais pelo código de ligação', () => {
    test('não pesquisar sem informar o código de ligação', async () => {
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

      const wrapper = mount(Index, {
        localVue,
        vuetify: new Vuetify(),
        mocks: {
          $route: mockRoute,
          $axios: mockAxios,
          $store: store
        },
        stubs: {
          NuxtLink: RouterLinkStub
        }
      })

      expect(mockAxios.$get).toHaveBeenCalledWith('https://restcountries.com/v3.1/all')
      wrapper.vm.setFilterBy('calling-code')
      await wrapper.vm.$nextTick()

      wrapper.vm.setSearch('')
      await wrapper.vm.$nextTick()

      // Checar se botao de pesquisa existe
      const botaoPesquisar = wrapper.find('.botao-pesquisar')
      expect(botaoPesquisar.exists()).toBeTruthy()
      botaoPesquisar.trigger('click') // Clicar para pesquisar
      expect(mockAxios.$get).toHaveBeenCalledTimes(1)
    })

    test('pesquisar pelo código de ligação', async () => {
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
            if (url === 'https://restcountries.com/v2/callingcode/55') {
              resolve(data.pesquisaCodigoLigacao.pesquisaResult)
            } else {
              resolve([])
            }
          })
        })
      }

      const wrapper = mount(Index, {
        localVue,
        vuetify: new Vuetify(),
        mocks: {
          $route: mockRoute,
          $axios: mockAxios,
          $store: store
        },
        stubs: {
          NuxtLink: RouterLinkStub
        }
      })

      expect(mockAxios.$get).toHaveBeenCalledWith('https://restcountries.com/v3.1/all')

      // Preencher formulario de pesquisa
      wrapper.vm.setFilterBy('calling-code')
      await wrapper.vm.$nextTick()
      wrapper.vm.setSearch('55')
      await wrapper.vm.$nextTick()

      // Checar se botao de pesquisa existe
      const botaoPesquisar = wrapper.find('.botao-pesquisar')
      expect(botaoPesquisar.exists()).toBeTruthy()
      botaoPesquisar.trigger('click') // Clicar para pesquisar

      expect(mockAxios.$get).toHaveBeenCalledTimes(2)
      expect(mockAxios.$get).toHaveBeenCalledWith('https://restcountries.com/v2/callingcode/55')

      // Checar a resposta da pesquisa
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.countries).toHaveLength(1)
      expect(wrapper.vm.countries[0].name).toEqual('Brazil')
    })

    test('pesquisar pelo código de ligação inexistente', async () => {
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
            if (url === 'https://restcountries.com/v2/callingcode/559') {
              resolve(data.pesquisaCodigoLigacao.pesquisaResultError404)
            } else {
              resolve([])
            }
          })
        })
      }

      const wrapper = mount(Index, {
        localVue,
        vuetify: new Vuetify(),
        mocks: {
          $route: mockRoute,
          $axios: mockAxios,
          $store: store
        },
        stubs: {
          NuxtLink: RouterLinkStub
        }
      })

      expect(mockAxios.$get).toHaveBeenCalledWith('https://restcountries.com/v3.1/all')

      // Preencher formulario de pesquisa
      wrapper.vm.setFilterBy('calling-code')
      await wrapper.vm.$nextTick()
      wrapper.vm.setSearch('559')
      await wrapper.vm.$nextTick()

      // Checar se botao de pesquisa existe
      const botaoPesquisar = wrapper.find('.botao-pesquisar')
      expect(botaoPesquisar.exists()).toBeTruthy()
      botaoPesquisar.trigger('click') // Clicar para pesquisar

      expect(mockAxios.$get).toHaveBeenCalledTimes(2)
      expect(mockAxios.$get).toHaveBeenCalledWith('https://restcountries.com/v2/callingcode/559')

      // Checar a resposta da pesquisa
      await wrapper.vm.$nextTick()
      expect(wrapper.vm.countries).toHaveLength(0)
      expect(wrapper.vm.countriesError).toEqual('Nenhum país encontrado com esse filtro!')
    })
  })
})
