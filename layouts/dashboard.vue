<template>
  <div>
    <main class="main-container">
      <Nuxt />
    </main>
  </div>
</template>

<script>
export default {
name: "dashboard"
}
</script>

<style scoped>

.main-container {
  @apply relative bg-gray-800 overflow-hidden;
}

</style>
