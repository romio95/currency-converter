import {mapGetters, mapMutations} from "vuex";

export default {
  name: 'packages',
  data() {
    return {
      currentLocale: 'en',
      currentVideoObject: {},
      videoArray: [
        {
          id: 0,
          locale: 'en',
          secure: 'D1HycoUE23U',
          encryption: 'MBBkaRIcVs4',
          freelancer: 'wL6VHYwfoDo',
          secretChat: 'LX5T8RHvlHs',
          invisibility: 'QIi10zVMFco',
          socialSpace: null,
          campaigns: null,
          howToRegister: 'LWGkmvi_PRw',
          pinEntry: '8KBkDWL7s2M',
          freelancerRegistration: 'zIolKskIukg',
        },
        {
          id: 1,
          locale: 'es',
          secure: 'meXrB-EGgB8',
          encryption: '_CBKJsnMcf8',
          freelancer: '-YoZhQhyrRs',
          secretChat: 'ipMlK46iHP4',
          invisibility: 'GqmqIO-un5g',
          socialSpace: null,
          campaigns: null,
          howToRegister: 'eYc2OXldCvg',
          pinEntry: 'UOgHzwYJYBc',
          freelancerRegistration: '6ak43xCzDOI',
        },
        {
          id: 2,
          locale: 'ru',
          secure: 'qMf_30SZnRM',
          encryption: '8GZLtdtlgx4',
          freelancer: 'uJb0lRXk6Q8',
          secretChat: 'ReM2xBwIAEw',
          invisibility: 'hqQgP9h_rNY',
          socialSpace: null,
          campaigns: null,
          howToRegister: 'WbN6ARzA0dU',
          pinEntry: 'v_OZAqPHqno',
          freelancerRegistration: '2J4I0OFyEpE',
        },
        {
          id: 3,
          locale: 'zh',
          secure: 'LTjVExvoOlk',
          encryption: 'eVeix20IdCI',
          freelancer: 'TOVYqInC7s0',
          secretChat: 'Ye4IqPmhkjg',
          invisibility: 'TMDQuCjmqxU',
          socialSpace: null,
          campaigns: null,
          howToRegister: 'W8K67c5bH5o',
          pinEntry: 'S4nptSbwClI',
          freelancerRegistration: '1IqaxaX8k88',
        },
        {
          id: 4,
          locale: 'pt',
          secure: 'b-WNtdOTmok',
          encryption: '_xDksZ-eDoQ',
          freelancer: 'YrumT4-bJ9g',
          secretChat: 'NUjiq1aqblc',
          invisibility: 'zpbrZlehFpc',
          socialSpace: null,
          campaigns: null,
          howToRegister: 'LYErS9Ut35c',
          pinEntry: 'shzwILZidm0',
          freelancerRegistration: 'cbdUlwNbw3A',
        },
        {
          id: 5,
          locale: 'fr',
          secure: 'kfNr4jSSuoQ',
          encryption: 'ScKEQI86uNw',
          freelancer: '_luJSvT9nCU',
          secretChat: 'YZFU8WEaKt4',
          invisibility: '4GNYLl1Drn4',
          socialSpace: null,
          campaigns: null,
          howToRegister: 'OOxccULj5jE',
          pinEntry: 'fblp7lQa8x0',
          freelancerRegistration: 'uM43CqagcbA',
        },
        {
          id: 6,
          locale: 'de',
          secure: 'XvjASjaB920',
          encryption: 'c8C93SSpJSM',
          freelancer: 's3egs7SaJ4U',
          secretChat: '9B9hQlWkSPE',
          invisibility: 'V4nUgVHqmCs',
          socialSpace: null,
          campaigns: null,
          howToRegister: 'EqkEZDDxAZ4',
          pinEntry: 'LcgQhs2XJHo',
          freelancerRegistration: 'VaoAKV9Nfdk',
        },
        {
          id: 7,
          locale: 'jp',
          secure: 't78pJsZ7VVY',
          encryption: 'MroxmCXBCng',
          freelancer: 'pEFUypyyMNk',
          secretChat: 'RfwJGqNLPr0',
          invisibility: 'KSwsPMv2cpc',
          socialSpace: null,
          campaigns: null,
          howToRegister: '4g9M6PjWFic',
          pinEntry: 'oAwrwUgLFx4',
          freelancerRegistration: 'ctkIGTqV4NA',
        },
      ]
    }
  },
  head: {
    title: function () {
      return {
        inner: 'Hola ',
        separator: '|',
        complement: this.$t('pagesTitle.packages')
      }
    },
    link: function () {
      return [
        {rel: 'canonical', href: window.location.origin + this.$route.path, id: 'canonical'},
      ]
    }
  },
  computed: {
    ...mapGetters({
      videoPopupId: 'packages/videoPopup',
    }),
    ...mapGetters([
      'currentLanguage',
    ]),
  },
  created(){
    this.currentLocale = this.currentLanguage.urlPrefix;

    for (let i in this.videoArray) {
      if (this.videoArray[i].locale === this.currentLocale) {
        this.currentVideoObject = this.videoArray[i];
      }
    }
  },
  methods: {
    ...mapMutations({
      changeShowVideoPopup: `packages/CHANGE_SHOW_VIDEO_POPUP`,
      changeVideoPopupInfo: `packages/CHANGE_VIDEO_POPUP_INFO`,
    }),
    showVideoPopup(key) {
      if (this.currentVideoObject[key]) {
        this.changeVideoPopupInfo({
          videoId: this.currentVideoObject[key],
        });
        setTimeout(() => {
          this.changeShowVideoPopup(true);
        }, 150)
      }
    }
  }
}
