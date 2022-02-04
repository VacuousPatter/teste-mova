import { createLocalVue, mount, RouterLinkStub } from '@vue/test-utils'
import Vuetify from 'vuetify'
import CountryCard from '@/components/countries/CountryCard.vue'
const data = require('./CountryCard.data.json')

describe('/components/countries/CountryCard.vue', () => {
  const paisTeste = data.pais

  describe('caso 1', () => {
    const localVue = createLocalVue()
    const vuetify = new Vuetify()
    const wrapper = mount(CountryCard, {
      localVue,
      vuetify,
      propsData: {
        country: paisTeste
      },
      stubs: {
        NuxtLink: RouterLinkStub
      },
      data: () => ({
        hovering: true
      })
    })

    test('hover mostra nome do pais', () => {
      const p = wrapper.findAll('p.pais--nome')
      expect(p.exists()).toBeTruthy()
    })

    test('snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
  })

  describe('caso 2', () => {
    const localVue = createLocalVue()
    const vuetify = new Vuetify()
    const wrapper = mount(CountryCard, {
      localVue,
      vuetify,
      propsData: {
        country: paisTeste
      },
      stubs: {
        NuxtLink: RouterLinkStub
      },
      data: () => ({
        hovering: false
      })
    })

    test('sem hover não mostra nome do pais', () => {
      const p = wrapper.findAll('p.pais--nome')
      expect(p.exists()).toBeFalsy()
    })

    test('snapshot', () => {
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
