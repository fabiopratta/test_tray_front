<template>
  <div id="app">
    <nav-bar-component />
    <side-bar-component />
    <router-view />
  </div>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue'
import SideBarComponent from './components/SideBarComponent.vue'

export default {
  name: 'App',
  components: {
    NavBarComponent,
    SideBarComponent,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  text-align: left;
  padding: 30px;
}

button {
      border-style: none;
      background-color: transparent;
}
</style>
