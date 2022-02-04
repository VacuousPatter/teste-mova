import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuetify from 'vuetify'
import _code from '@/pages/country/_code'
import ListCountries from '@/components/countries/ListCountries'
const data = require('./data.json')

describe('/pages/country/_code.vue', () => {
  describe('Deve mostrar o país', () => {
    let wrapper, axiosMock

    beforeEach(async () => {
      const localVue = createLocalVue()

      axiosMock = {
        $get: jest.fn((url, options) => {
          return new Promise((resolve) => {
            if (url === 'https://restcountries.com/v3.1/alpha/BRA') {
              resolve(data.country)
            } else if (url === 'https://restcountries.com/v3.1/alpha') {
              if (options.params.codes === 'ARG,BOL,COL,GUF,GUY,PRY,PER,SUR,URY,VEN') {
                resolve(data.borderCountries)
              }
            } else {
              resolve([])
            }
          })
        })
      }

      wrapper = mount(_code, {
        localVue,
        vuetify: new Vuetify(),
        mocks: {
          $axios: axiosMock,
          $route: {
            params: {
              code: 'BRA'
            }
          }
        },
        stubs: {
          NuxtLink: RouterLinkStub
        }
      })

      await wrapper.vm.$nextTick()
    })

    test('mostrar informações na tela', () => {
      const nomeLocal = wrapper.find('.details__detail--nome-local')
      expect(nomeLocal.exists()).toBeTruthy()
      expect(nomeLocal.isVisible()).toBeTruthy()
      expect(nomeLocal.element.textContent).toEqual('Nome Local: Brasil')

      const nomeInternacional = wrapper.find('.details__detail--nome-internacional')
      expect(nomeInternacional.exists()).toBeTruthy()
      expect(nomeInternacional.isVisible()).toBeTruthy()
      expect(nomeInternacional.element.textContent).toEqual('Nome Internacional: Brazil')

      const nomeCapital = wrapper.find('.details__detail--nome-capital')
      expect(nomeCapital.exists()).toBeTruthy()
      expect(nomeCapital.isVisible()).toBeTruthy()
      expect(nomeCapital.element.textContent).toEqual('Capital: Brasília')

      const nomeRegiao = wrapper.find('.details__detail--nome-regiao-link')
      expect(nomeRegiao.exists()).toBeTruthy()
      expect(nomeRegiao.isVisible()).toBeTruthy()
      expect(nomeRegiao.element.textContent.trim()).toEqual('Americas')

      const nomeSubRegiao = wrapper.find('.details__detail--nome-subregiao')
      expect(nomeSubRegiao.exists()).toBeTruthy()
      expect(nomeSubRegiao.isVisible()).toBeTruthy()
      expect(nomeSubRegiao.element.textContent).toEqual('Sub-região: South America')

      const populacao = wrapper.find('.details__detail--populacao')
      expect(populacao.exists()).toBeTruthy()
      expect(populacao.isVisible()).toBeTruthy()
      expect(populacao.element.textContent).toEqual('População: 212 Milhões')

      const linguas = wrapper.find('.details__detail--linguas')
      expect(linguas.exists()).toBeTruthy()
      expect(linguas.isVisible()).toBeTruthy()
      expect(linguas.element.textContent).toEqual('Linguas: Portuguese')

      const ListCountriesWrapper = wrapper.findComponent(ListCountries)
      expect(ListCountriesWrapper.exists()).toBeTruthy()
      expect(ListCountriesWrapper.isVisible()).toBeTruthy()

      expect(axiosMock.$get).toHaveBeenCalledTimes(2)

      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('Deve mostrar o país e mensagem sem paises vizinhos', () => {
    let wrapper, axiosMock

    beforeEach(async () => {
      const localVue = createLocalVue()

      axiosMock = {
        $get: jest.fn((url, options) => {
          return new Promise((resolve) => {
            if (url === 'https://restcountries.com/v3.1/alpha/BRA') {
              resolve(data.country)
            } else if (url === 'https://restcountries.com/v3.1/alpha') {
              if (options.params.codes === 'ARG,BOL,COL,GUF,GUY,PRY,PER,SUR,URY,VEN') {
                resolve([])
              }
            } else {
              resolve([])
            }
          })
        })
      }

      wrapper = mount(_code, {
        localVue,
        mocks: {
          $axios: axiosMock,
          $route: {
            params: {
              code: 'BRA'
            }
          }
        },
        stubs: {
          NuxtLink: RouterLinkStub
        }
      })

      await wrapper.vm.$nextTick()
    })

    test('mostrar informações na tela', () => {
      const nomeLocal = wrapper.find('.details__detail--nome-local')
      expect(nomeLocal.exists()).toBeTruthy()
      expect(nomeLocal.isVisible()).toBeTruthy()
      expect(nomeLocal.element.textContent).toEqual('Nome Local: Brasil')

      const nomeInternacional = wrapper.find('.details__detail--nome-internacional')
      expect(nomeInternacional.exists()).toBeTruthy()
      expect(nomeInternacional.isVisible()).toBeTruthy()
      expect(nomeInternacional.element.textContent).toEqual('Nome Internacional: Brazil')

      const nomeCapital = wrapper.find('.details__detail--nome-capital')
      expect(nomeCapital.exists()).toBeTruthy()
      expect(nomeCapital.isVisible()).toBeTruthy()
      expect(nomeCapital.element.textContent).toEqual('Capital: Brasília')

      const nomeRegiao = wrapper.find('.details__detail--nome-regiao-link')
      expect(nomeRegiao.exists()).toBeTruthy()
      expect(nomeRegiao.isVisible()).toBeTruthy()
      expect(nomeRegiao.element.textContent.trim()).toEqual('Americas')

      const nomeSubRegiao = wrapper.find('.details__detail--nome-subregiao')
      expect(nomeSubRegiao.exists()).toBeTruthy()
      expect(nomeSubRegiao.isVisible()).toBeTruthy()
      expect(nomeSubRegiao.element.textContent).toEqual('Sub-região: South America')

      const populacao = wrapper.find('.details__detail--populacao')
      expect(populacao.exists()).toBeTruthy()
      expect(populacao.isVisible()).toBeTruthy()
      expect(populacao.element.textContent).toEqual('População: 212 Milhões')

      const linguas = wrapper.find('.details__detail--linguas')
      expect(linguas.exists()).toBeTruthy()
      expect(linguas.isVisible()).toBeTruthy()
      expect(linguas.element.textContent).toEqual('Linguas: Portuguese')

      const ListCountriesWrapper = wrapper.findComponent(ListCountries)
      expect(ListCountriesWrapper.exists()).toBeFalsy()

      const MensagemSemPaisesVizinho = wrapper.find('.mensagem-sem-pais-vizinho')
      expect(MensagemSemPaisesVizinho.exists()).toBeTruthy()

      expect(axiosMock.$get).toHaveBeenCalledTimes(2)

      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('Não mostrar país', () => {
    let wrapper, axiosMock

    beforeEach(async () => {
      const localVue = createLocalVue()

      axiosMock = {
        $get: jest.fn((url, options) => {
          return new Promise((resolve) => {
            if (url === 'https://restcountries.com/v3.1/alpha/BRA') {
              resolve([])
            } else if (url === 'https://restcountries.com/v3.1/alpha') {
              if (options.params.codes === 'ARG,BOL,COL,GUF,GUY,PRY,PER,SUR,URY,VEN') {
                resolve([])
              }
            } else {
              resolve([])
            }
          })
        })
      }

      wrapper = mount(_code, {
        localVue,
        mocks: {
          $axios: axiosMock,
          $route: {
            params: {
              code: 'BRA'
            }
          }
        },
        stubs: {
          NuxtLink: RouterLinkStub
        }
      })

      await wrapper.vm.$nextTick()
    })

    test('mostrar informações na tela', () => {
      const countryWrapper = wrapper.find('.country-wrapper')
      expect(countryWrapper.exists()).toBeFalsy()

      const avisoPaisNaoEncontrado = wrapper.find('.erro-pais-404')
      expect(avisoPaisNaoEncontrado.exists()).toBeTruthy()

      expect(axiosMock.$get).toHaveBeenCalledTimes(1)

      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
