<template>
  <div>
    <main class="main-container">
    <Nuxt />
    </main>
  </div>
</template>

<script>

export default {
  created() {
    this.$fire.auth.onAuthStateChanged((user) => {
      if (user) {
        let logged = this.$fire.auth.currentUser;

        this.$store.commit('uid', logged.uid)
        this.$store.commit('login',true)
        console.log("User logged in.")
        // update data or vuex state
      } else {
      }
    });
  },
}

</script>

<style scoped>
.main-container {
  @apply relative bg-gray-800 overflow-hidden;
}


</style>

<style>
@media screen and (min-width: 1200px) {
  body {
    overflow: hidden;
  }
}


body {
  zoom: 100%;

}

</style>
