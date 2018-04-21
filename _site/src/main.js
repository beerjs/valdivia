import Vue from 'vue'
import App from './components/App'

new Vue({
  el: '#root',
  components: { App },
  template: '<App/>',
  render: h => h(App),
})
