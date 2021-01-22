<template>

  <div>
     <!-- Background SVG -->
    <background-svg/>
     <!-- Container -->
    <div class="div-container">
      <!-- Navbar -->
     <navbar/>
      <!-- Main Body -->
      <app-body/>

    </div>
  </div>


</template>

<script>
export default {


}
</script>

<style>

.div-container {
  @apply relative pt-6 pb-16 sm:pb-24;
}


</style>
