<template>
  <body class="app-body">
  <div class="mx-auto max-w-7xl">
    <div class="lg:grid lg:grid-cols-12 lg:gap-8">

      <text-cta/>


      <pricing-table/>

    </div>
  </div>
  </body>
</template>

<script>
export default {
  name: "body.vue",
  props: {


  }
}
</script>

<style scoped>

.app-body {
  @apply mt-16 sm:mt-24;
}

</style>
