import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import ListCountries from '@/components/countries/ListCountries.vue'
import CountryCard from '@/components/countries/CountryCard.vue'
const data = require('./ListCountries.data.json')

describe('/components/countries/ListaCountries.vue', () => {
  const listaPaises = data.listaPaises

  describe('caso 1', () => {
    const localVue = createLocalVue()
    const vuetify = new Vuetify()
    const wrapper = mount(ListCountries, {
      localVue,
      vuetify,
      propsData: {
        countries: listaPaises
      }
    })

    test('possui 4 cards do paises na pagina atual', () => {
      const countryCardsCount = wrapper.findAllComponents(CountryCard).length
      expect(countryCardsCount).toEqual(4)
    })

    test('array com paises <= que limite de paises por pagina', () => {
      const itemsSelecionadosPagina = wrapper.vm.countriesPageList
      const itemsPorPagina = wrapper.vm.$props.itemsPerPage
      expect(itemsSelecionadosPagina.length).toBeLessThanOrEqual(itemsPorPagina)
    })

    test('não mostrar paginação', () => {
      const paginacao = wrapper.find('.paginacao')
      expect(paginacao.isVisible()).toBeFalsy()
    })

    test('contagem de páginas deve ser 1', () => {
      expect(wrapper.vm.pagesCount).toEqual(1)
    })

    test('snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('caso 2', () => {
    const localVue = createLocalVue()
    const vuetify = new Vuetify()
    const wrapper = mount(ListCountries, {
      localVue,
      vuetify,
      propsData: {
        countries: listaPaises,
        itemsPerPage: 1
      }
    })

    test('possui 1 card de país na página atual', () => {
      const countryCardsCount = wrapper.findAllComponents(CountryCard).length
      expect(countryCardsCount).toEqual(1)
    })

    test('array com paises <= que limite de paises por pagina', () => {
      const itemsSelecionadosPagina = wrapper.vm.countriesPageList
      const itemsPorPagina = wrapper.vm.$props.itemsPerPage
      expect(itemsSelecionadosPagina.length).toBeLessThanOrEqual(itemsPorPagina)
    })

    test('mostrar paginação', () => {
      const paginacao = wrapper.find('.paginacao')
      expect(paginacao.isVisible()).toBeTruthy()
    })

    test('contagem de páginas deve ser 4', () => {
      expect(wrapper.vm.pagesCount).toEqual(4)
    })

    test('snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
