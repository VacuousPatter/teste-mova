import { createLocalVue, shallowMount } from '@vue/test-utils'
import ListCountries from '@/components/countries/ListCountries.vue'

describe('/components/countries/ListaCountries.vue', () => {
  const localVue = createLocalVue()

  const listaPaises = [{
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
  }, {
    name: {
      common: 'Djibouti',
      official: 'Republic of Djibouti',
      nativeName: {
        ara: {
          official: 'جمهورية جيبوتي',
          common: 'جيبوتي‎'
        },
        fra: {
          official: 'République de Djibouti',
          common: 'Djibouti'
        }
      }
    },
    tld: [
      '.dj'
    ],
    cca2: 'DJ',
    ccn3: '262',
    cca3: 'DJI',
    cioc: 'DJI',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      DJF: {
        name: 'Djiboutian franc',
        symbol: 'Fr'
      }
    },
    idd: {
      root: '+2',
      suffixes: [
        '53'
      ]
    },
    capital: [
      'Djibouti'
    ],
    altSpellings: [
      'DJ',
      'Jabuuti',
      'Gabuuti',
      'Republic of Djibouti',
      'République de Djibouti',
      'Gabuutih Ummuuno',
      'Jamhuuriyadda Jabuuti'
    ],
    region: 'Africa',
    subregion: 'Eastern Africa',
    languages: {
      ara: 'Arabic',
      fra: 'French'
    },
    translations: {
      ara: {
        official: 'جمهورية جيبوتي',
        common: 'جيبوتي'
      },
      ces: {
        official: 'Džibutská republika',
        common: 'Džibutsko'
      },
      cym: {
        official: 'Gweriniaeth Jibwti',
        common: 'Jibwti'
      },
      deu: {
        official: 'Republik Dschibuti',
        common: 'Dschibuti'
      },
      est: {
        official: 'Djibouti Vabariik',
        common: 'Djibouti'
      },
      fin: {
        official: 'Dijiboutin tasavalta',
        common: 'Dijibouti'
      },
      fra: {
        official: 'République de Djibouti',
        common: 'Djibouti'
      },
      hrv: {
        official: 'Republika Džibuti',
        common: 'Džibuti'
      },
      hun: {
        official: 'Dzsibuti Köztársaság',
        common: 'Dzsibuti'
      },
      ita: {
        official: 'Repubblica di Gibuti',
        common: 'Gibuti'
      },
      jpn: {
        official: 'ジブチ共和国',
        common: 'ジブチ'
      },
      kor: {
        official: '지부티 공화국',
        common: '지부티'
      },
      nld: {
        official: 'Republiek Djibouti',
        common: 'Djibouti'
      },
      per: {
        official: 'جمهوری جیبوتی',
        common: 'جیبوتی'
      },
      pol: {
        official: 'Republika Dżibuti',
        common: 'Dżibuti'
      },
      por: {
        official: 'República do Djibouti',
        common: 'Djibouti'
      },
      rus: {
        official: 'Республика Джибути',
        common: 'Джибути'
      },
      slk: {
        official: 'ǅibutská republika',
        common: 'ǅibutsko'
      },
      spa: {
        official: 'República de Djibouti',
        common: 'Djibouti'
      },
      swe: {
        official: 'Republiken Djibouti',
        common: 'Djibouti'
      },
      urd: {
        official: 'جمہوریہ جبوتی',
        common: 'جبوتی'
      },
      zho: {
        official: '吉布提共和国',
        common: '吉布提'
      }
    },
    latlng: [
      11.5,
      43
    ],
    landlocked: false,
    borders: [
      'ERI',
      'ETH',
      'SOM'
    ],
    area: 23200,
    demonyms: {
      eng: {
        f: 'Djibouti',
        m: 'Djibouti'
      },
      fra: {
        f: 'Djiboutienne',
        m: 'Djiboutien'
      }
    },
    flag: '🇩🇯',
    maps: {
      googleMaps: 'https://goo.gl/maps/V1HWfzN3bS1kwf4C6',
      openStreetMaps: 'https://www.openstreetmap.org/relation/192801'
    },
    population: 988002,
    gini: {
      2017: 41.6
    },
    fifa: 'DJI',
    car: {
      signs: [
        'DJI'
      ],
      side: 'right'
    },
    timezones: [
      'UTC+03:00'
    ],
    continents: [
      'Africa'
    ],
    flags: {
      png: 'https://flagcdn.com/w320/dj.png',
      svg: 'https://flagcdn.com/dj.svg'
    },
    coatOfArms: {
      png: 'https://mainfacts.com/media/images/coats_of_arms/dj.png',
      svg: 'https://mainfacts.com/media/images/coats_of_arms/dj.svg'
    },
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [
        11.58,
        43.15
      ]
    }
  }, {
    name: {
      common: 'Timor-Leste',
      official: 'Democratic Republic of Timor-Leste',
      nativeName: {
        por: {
          official: 'República Democrática de Timor-Leste',
          common: 'Timor-Leste'
        },
        tet: {
          official: 'Repúblika Demokrátika Timór-Leste',
          common: 'Timór-Leste'
        }
      }
    },
    tld: [
      '.tl'
    ],
    cca2: 'TL',
    ccn3: '626',
    cca3: 'TLS',
    cioc: 'TLS',
    independent: true,
    status: 'officially-assigned',
    unMember: true,
    currencies: {
      USD: {
        name: 'United States dollar',
        symbol: '$'
      }
    },
    idd: {
      root: '+6',
      suffixes: [
        '70'
      ]
    },
    capital: [
      'Dili'
    ],
    altSpellings: [
      'TL',
      'East Timor',
      'Democratic Republic of Timor-Leste',
      'República Democrática de Timor-Leste',
      'Repúblika Demokrátika Timór-Leste',
      "Timór Lorosa'e",
      'Timor Lorosae'
    ],
    region: 'Asia',
    subregion: 'South-Eastern Asia',
    languages: {
      por: 'Portuguese',
      tet: 'Tetum'
    },
    translations: {
      ara: {
        official: 'جمهورية تيمور الشرقية الديمقراطية',
        common: 'تيمور الشرقية'
      },
      ces: {
        official: 'Demokratická republika Východní Timor',
        common: 'Východní Timor'
      },
      cym: {
        official: 'Democratic Republic of Timor-Leste',
        common: 'Timor-Leste'
      },
      deu: {
        official: 'Demokratische Republik Timor-Leste',
        common: 'Osttimor'
      },
      est: {
        official: 'Timor-Leste Demokraatlik Vabariik',
        common: 'Ida-Timor'
      },
      fin: {
        official: 'Itä-Timorin demokraattinen tasavalta',
        common: 'Itä-Timor'
      },
      fra: {
        official: 'République démocratique du Timor oriental',
        common: 'Timor oriental'
      },
      hrv: {
        official: 'Demokratska Republika Timor-Leste',
        common: 'Istočni Timor'
      },
      hun: {
        official: 'Kelet-timori Demokratikus Köztársaság',
        common: 'Kelet-Timor'
      },
      ita: {
        official: 'Repubblica Democratica di Timor Est',
        common: 'Timor Est'
      },
      jpn: {
        official: '東ティモール民主共和国',
        common: '東ティモール'
      },
      kor: {
        official: '동티모르 민주 공화국',
        common: '동티모르'
      },
      nld: {
        official: 'Democratische Republiek Oost-Timor',
        common: 'Oost-Timor'
      },
      per: {
        official: 'جمهوری دموکراتیک تیمور شرقی',
        common: 'تیمور شرقی'
      },
      pol: {
        official: 'Demokratyczna Republika Timoru Wschodniego',
        common: 'Timor Wschodni'
      },
      por: {
        official: 'República Democrática de Timor-Leste',
        common: 'Timor-Leste'
      },
      rus: {
        official: 'Демократическая Республика Тимор -Лешти',
        common: 'Восточный Тимор'
      },
      slk: {
        official: 'Východotimorská demokratická republika',
        common: 'Východný Timor'
      },
      spa: {
        official: 'República Democrática de Timor-Leste',
        common: 'Timor Oriental'
      },
      swe: {
        official: 'Demokratiska republiken Östtimor',
        common: 'Östtimor'
      },
      urd: {
        official: 'جمہوری جمہوریہ مشرقی تیمور',
        common: 'مشرقی تیمور'
      },
      zho: {
        official: '东帝汶民主共和国',
        common: '东帝汶'
      }
    },
    latlng: [
      -8.83333333,
      125.91666666
    ],
    landlocked: false,
    borders: [
      'IDN'
    ],
    area: 14874,
    demonyms: {
      eng: {
        f: 'East Timorese',
        m: 'East Timorese'
      },
      fra: {
        f: 'Est-timoraise',
        m: 'Est-timorais'
      }
    },
    flag: '🇹🇱',
    maps: {
      googleMaps: 'https://goo.gl/maps/sFqBC9zjgUXPR1iTA',
      openStreetMaps: 'https://www.openstreetmap.org/relation/305142'
    },
    population: 1318442,
    gini: {
      2014: 28.7
    },
    fifa: 'TLS',
    car: {
      signs: [
        'TL'
      ],
      side: 'left'
    },
    timezones: [
      'UTC+09:00'
    ],
    continents: [
      'Oceania'
    ],
    flags: {
      png: 'https://flagcdn.com/w320/tl.png',
      svg: 'https://flagcdn.com/tl.svg'
    },
    coatOfArms: {},
    startOfWeek: 'monday',
    capitalInfo: {
      latlng: [
        -8.58,
        125.6
      ]
    }
  },
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
  }]

  describe('caso 1', () => {
    const wrapper = shallowMount(ListCountries, {
      localVue,
      propsData: {
        countries: listaPaises
      }
    })

    test('possui os 4 cards do paises', () => {
      const allCountriesListed = wrapper.findAll('.countries').length
      expect(allCountriesListed).toEqual(4)
    })

    test('items selecionados da pagina <=itemsPerPage', () => {
      const itemsSelecionadosPagina = wrapper.vm.countriesPageList
      const itemsPorPagina = wrapper.vm.$props.itemsPerPage
      expect(itemsSelecionadosPagina.length).toBeLessThanOrEqual(itemsPorPagina)
    })

    test('não mostrar paginação', () => {
      const paginacao = wrapper.find('.paginacao')
      expect(paginacao.isVisible()).toBeFalsy()
    })
  })

  describe('caso 2', () => {
    const wrapper = shallowMount(ListCountries, {
      localVue,
      propsData: {
        countries: listaPaises,
        itemsPerPage: 1
      }
    })

    test('possui 1 cards de país', () => {
      const allCountriesListed = wrapper.findAll('.countries').length
      expect(allCountriesListed).toEqual(1)
    })

    test('possui apenas 1 card no array da pagina atual', () => {
      const itemsSelecionadosPagina = wrapper.vm.countriesPageList
      const itemsPorPagina = wrapper.vm.$props.itemsPerPage
      expect(itemsSelecionadosPagina.length).toBeLessThanOrEqual(itemsPorPagina)
    })

    test('mostrar paginação', () => {
      const paginacao = wrapper.find('.paginacao')
      expect(paginacao.isVisible()).toBeTruthy()
    })
  })
})
