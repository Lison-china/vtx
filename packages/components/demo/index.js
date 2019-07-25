import demo from './demo.vue'
demo.install = function(Vue){    
    Vue.component('demo',demo)
}
export default demo