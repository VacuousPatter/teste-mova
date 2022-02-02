import { createLocalVue, shallowMount } from '@vue/test-utils'
import CountryCard from '@/components/countries/CountryCard.vue'

describe('/components/countries/CountryCard.vue', () => {
  const localVue = createLocalVue()

  const paisTeste = {
    name: {
      common: 'Aruba',
      official: 'Aruba',
      nativeName: {
        nld: {
          official: 'Aruba',
          common: 'Aruba'
        },
        pap: {
          official: 'Aruba',
          common: 'Aruba'
        }
      }
    },
    tld: [
      '.aw'
    ],
    cca2: 'AW',
    ccn3: '533',
    cca3: 'ABW',
    cioc: 'ARU',
    independent: false,
    status: 'officially-assigned',
    unMember: false,
    currencies: {
      AWG: {
        name: 'Aruban florin',
        symbol: 'ƒ'
      }
    },
    idd: {
      root: '+2',
      suffixes: [
        '97'
      ]
    },
    capital: [
      'Oranjestad'
    ],
    altSpellings: [
      'AW'
    ],
    region: 'Americas',
    subregion: 'Caribbean',
    languages: {
      nld: 'Dutch',
      pap: 'Papiamento'
    },
    translations: {
      ara: {
        official: 'أروبا',
        common: 'أروبا'
      },
      ces: {
        official: 'Aruba',
        common: 'Aruba'
      },
      cym: {
        official: 'Aruba',
        common: 'Aruba'
      },
      deu: {
        official: 'Aruba',
        common: 'Aruba'
      },
      est: {
        official: 'Aruba',
        common: 'Aruba'
      },
      fin: {
        official: 'Aruba',
        common: 'Aruba'
      },
      fra: {
        official: 'Aruba',
        common: 'Aruba'
      },
      hrv: {
        official: 'Aruba',
        common: 'Aruba'
      },
      hun: {
        official: 'Aruba',
        common: 'Aruba'
      },
      ita: {
        official: 'Aruba',
        common: 'Aruba'
      },
      jpn: {
        official: 'アルバ',
        common: 'アルバ'
      },
      kor: {
        official: '아루바',
        common: '아루바'
      },
      nld: {
        official: 'Aruba',
        common: 'Aruba'
      },
      per: {
        official: 'آروبا',
        common: 'آروبا'
      },
      pol: {
        official: 'Aruba',
        common: 'Aruba'
      },
      por: {
        official: 'Aruba',
        common: 'Aruba'
      },
      rus: {
        official: 'Аруба',
        common: 'Аруба'
      },
      slk: {
        official: 'Aruba',
        common: 'Aruba'
      },
      spa: {
        official: 'Aruba',
        common: 'Aruba'
      },
      swe: {
        official: 'Aruba',
        common: 'Aruba'
      },
      urd: {
        official: 'اروبا',
        common: 'اروبا'
      },
      zho: {
        official: '阿鲁巴',
        common: '阿鲁巴'
      }
    },
    latlng: [
      12.5,
      -69.96666666
    ],
    landlocked: false,
    area: 180,
    demonyms: {
      eng: {
        f: 'Aruban',
        m: 'Aruban'
      },
      fra: {
        f: 'Arubaise',
        m: 'Arubais'
      }
    },
    flag: '🇦🇼',
    maps: {
      googleMaps: 'https://goo.gl/maps/8hopbQqifHAgyZyg8',
      openStreetMaps: 'https://www.openstreetmap.org/relation/1231749'
    },
    population: 106766,
    fifa: 'ARU',
    car: {
      side: 'right'
    },
    timezones: [
      'UTC-04:00'
    ],
    continents: [
      'North America'
    ],
    flags: {
      png: 'https://flagcdn.com/w320/aw.png',
      svg: 'https://flagcdn.com/aw.svg'
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/aw.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/aw.svg'
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [
        12.52,
        -70.03
      ]
    }
  }

  describe('caso 1', () => {
    const wrapper = shallowMount(CountryCard, {
      localVue,
      propsData: {
        country: paisTeste
      },
      data: () => ({
        hovering: true
      })
    })

    test('hover mostra nome do pais', () => {
      const p = wrapper.findAll('p.pais--nome')
      expect(p.exists()).toBeTruthy()
    })
  })

  describe('caso 2', () => {
    const wrapper = shallowMount(CountryCard, {
      localVue,
      propsData: {
        country: paisTeste
      },
      data: () => ({
        hovering: false
      })
    })

    test('sem hover não mostra nome do pais', () => {
      const p = wrapper.findAll('p.pais--nome')
      expect(p.exists()).toBeFalsy()
    })
  })
})
