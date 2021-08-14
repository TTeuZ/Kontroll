import Vue from 'vue'
import Vuex from 'vuex'
import home from './home'
import testimony from './testimony'
import service from './service'
import loading from './loading'

Vue.use(Vuex)

export default {
  modules: {
    home,
    testimony,
    service,
    loading,
  },
}