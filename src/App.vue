<template>
  <div id="app">
    <NavHeader />
    <router-view/>
  </div>
</template>

<script>
// // @ is an alias to /src
import NavHeader from '@/components/nav-header'

export default {
  name: 'app',
  components: {
    NavHeader
  }
}
</script>

<style src="./assets/css/style.css"></style>
