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
        alert('logged out')
      }
    });
  },
}

</script>

<style>
.main-container {
  @apply relative bg-gray-800 overflow-hidden;
}

</style>
