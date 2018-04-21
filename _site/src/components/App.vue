<template>
  <div class="App">
    <div class="App-body">
      <home />
    </div>
  </div>
</template>

<script>
import Home from './Home'

export default {
  name: 'App',

  components: {
    Home,
  },
}
</script>

<style>
body {
  font-family: 'Source Sans Pro';
}
</style>
