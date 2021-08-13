import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'

import config from './config'
import translations from './translations/translations.json'
import { register_service_worker } from './utils'

register_service_worker()

Vue.config.productionTip = false
Vue.prototype.config = config // <- set config to global scope
Vue.prototype.translations = translations // <- set translations to global scope

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)

/* (global) This code is going to tell us, if history mode can be activated on the client, so the application can be consumed without sessionStorage */
Vue.prototype.history = () => {
  try {
      sessionStorage.getItem('check')
      return true
  }

  catch {
      return false
  }
}


/* (global) Currently selected language or fallback language (en). Needs to be a function, since it's reactive. No need for vuex there */
Vue.prototype.lang = () => {
  if (Vue.prototype.history()) return sessionStorage.getItem('lang') || config.fallback_lang
  return config.fallback_lang
}

/* (global) Debug mode */
Vue.prototype.debug = () => process.env.NODE_ENV == 'development'


new Vue({
  el: '#app',
  router,
  store,
  icons,
  template: '<App/>',
  components: {
    App
  }
})
