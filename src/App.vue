<template>
  <aj-nav-bar />
  <router-view></router-view>
</template>

<script>
import AjNavBar from './components/AjNavbar.vue'

export default {
  components: {
    AjNavBar
  },
  setup() {
    
  },
}
</script>