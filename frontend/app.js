import Vue from 'vue/dist/vue.esm'
import Hello from './components/hello.vue'

document.addEventListener('DOMContentLoaded', () => {
  const app = new Vue({
    el: '#app',
    props: { name: "f" },
    template: '<hello :name="\'my friend\'" :alterName="\'Habibi\'"></hello>',
    components: { Hello }
  });
});
