<template>
  <aj-nav-bar />
  <aj-mobnav />
  <router-view></router-view>
</template>

<script>
import AjNavBar from './components/AjNavbar.vue'
import AjMobnav from './components/AjMobnav.vue'

export default {
  components: {
    AjNavBar,
    AjMobnav
  },
  setup() {
    
  },
}
</script>