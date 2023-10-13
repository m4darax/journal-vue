<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="goToDaybook" class="btn btn-primary"> Primary </button>
    <button class="btn btn-secondary"> Primary </button>
    <button class="btn btn-success"> Primary </button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: {
    
  },
  methods: {
    goToDaybook() {
      this.$router.push({ name:'no-entry'})
    }
  }
}
</script>
