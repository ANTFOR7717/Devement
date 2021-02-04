<template>

  <div>
     <!-- Background SVG
    <background-svg/>
     Container -->
    <div class="div-container">
      <!-- Navbar -->
     <navbar class="mb-10"/>
      <!-- Main Body -->
      <products class="body"/>

    </div>
  </div>


</template>

<script>
export default {


}
</script>

<style scoped>

.body {
  zoom: 72%
}


.div-container {
  @apply relative pt-6 mb-20 pb-16 sm:pb-24;
}


</style>
