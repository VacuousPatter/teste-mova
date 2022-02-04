import { mount, createLocalVue, RouterLinkStub } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Header from '@/components/templates/Header.vue'

describe('/components/templates/Header.vue', () => {
  let wrapper, mockRouter

  beforeEach(() => {
    const localVue = createLocalVue()
    const vuetify = new Vuetify()

    mockRouter = {
      back: jest.fn()
    }

    wrapper = mount(Header, {
      localVue,
      vuetify,
      stubs: {
        NuxtLink: RouterLinkStub
      },
      mocks: {
        $router: mockRouter
      }
    })
  })

  describe('deve exibir a logo e o botao de voltar', () => {
    test('imagens estão sendo exibidas', () => {
      const imageLogo = wrapper.find('.link-home__logo')
      expect(imageLogo.exists()).toBeTruthy()
      expect(imageLogo.isVisible()).toBeTruthy()
    })

    test('botões estão sendo exibidos e funcionando', () => {
      const botaoVoltar = wrapper.find('.button--back')
      expect(botaoVoltar.exists()).toBeTruthy()
      expect(botaoVoltar.isVisible()).toBeTruthy()
      botaoVoltar.trigger('click')
      expect(mockRouter.back).toHaveBeenCalledTimes(1)
    })
  })
})
