<template>
  <div>
  <nav class="nav z-50" aria-label="Global">
    <div class="flex items-center flex-1">
      <div class="flex items-center justify-between w-full md:w-auto z-0">
        <nuxt-link to="/">
          <span class="sr-only">Devement</span>
          <devement-logo/>
        </nuxt-link>
        <div class="-mr-2 flex items-center md:hidden">
          <button @click="open()" type="button" class="bg-gray-800 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white" id="main-menu" aria-haspopup="true">
            <a class="sr-only">Open main menu</a>
            <!-- Heroicon name: menu -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
      <div class="hidden space-x-10 md:flex md:ml-10">
        <nuxt-link to="/products" class="font-medium text-white hover:text-gray-300">Products</nuxt-link>

        <nuxt-link to="/features" class="font-medium text-white hover:text-gray-300">Features</nuxt-link>

        <a href="#" class="font-medium text-white hover:text-gray-300">Showcase</a>

        <nuxt-link to="/company" class="font-medium text-white hover:text-gray-300">Company</nuxt-link>
      </div>
    </div>
    <div class="hidden md:flex">
      <nuxt-link to="/login" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700">
        Log in
      </nuxt-link>
    </div>
  </nav>
  <nav :class="{'hidden' : active}" @click="close()" class="mobile-nav">
    <div class="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
      <div class="px-5 pt-4 flex items-center justify-between">
        <div>
          <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg" alt="">
        </div>
        <div class="-mr-2">
          <button type="button" class="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
            <span class="sr-only">Close menu</span>
            <!-- Heroicon name: x -->
            <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

        </div>
      </div>
      <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
        <div class="px-2 pt-2 pb-3 space-y-1" role="none">
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Product</a>

          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Features</a>

          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Showcase</a>

          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Company</a>
        </div>

        <div role="none">
          <a href="#" class="block w-full px-5 py-3 text-center font-medium text-indigo-600 bg-gray-50 hover:bg-gray-100" role="menuitem">
            Log in
          </a>
        </div>
      </div>

    </div>
  </nav>

  </div>
</template>

<script>
export default {
  name: "navbar.vue",

  data: () => ({
    active: true
  }),

  methods: {
    open() {
      this.active = false
    },

    close() {
      this.active = true
    }
  }
}
</script>

<style scoped>
.nav {
 @apply relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6;
}

.mobile-nav {
  @apply absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden;
}
</style>
