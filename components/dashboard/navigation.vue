<template>
  <main>

  <!-- Background color split screen for large screens -->
    <!-- Navbar -->
    <nav class="flex-shrink-0 bg-indigo-600">
      <div class="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <!-- Logo section -->
          <div class="flex items-center px-2 l:px-0 xl:w-64">
            <div class="flex-shrink-0">
               <devement-logo class="h-8 w-1"/>
            </div>
          </div>

          <!-- Search section -->
          <div class="flex-1 flex justify-center lg:justify-end">
            <div class="w-full px-2 lg:px-6">
              <div class="relative pt-1">
                <div class="flex mb-2 items-center justify-between">
                  <div>
      <span class="text-xs font-semibold inline-block mt-2 py-1 px-2 uppercase rounded-full text-gray-100 bg-indigo-500">
        {{ hours.remaining }}/{{ hours.allowed }} Hours Remaining
      </span>
                  </div>
                  <div class="text-right -mb-2.5">
      <span class="text-medium inline-block text-white">
        {{ hours.plan }}
      </span>
                  </div>
                </div>
                <div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-white">
                  <div :style="'width:' + (this.hours.remaining / this.hours.allowed) * 100 + '%'" :class="(this.hours.remaining / this.hours.allowed) * 100 > 80 ? 'bg-green-500' : (this.hours.remaining / this.hours.allowed) * 100 > 25 ? 'bg-yellow-400' : 'bg-red-500' " class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="flex lg:hidden">
            <!-- Mobile menu button -->
            <button v-on:click="$emit('mobilenav')" class="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-indigo-400 hover:text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-600 focus:ring-white" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
              <!-- Icon when menu is closed. -->
              <!--
                Heroicon name: menu-alt-1

                Menu open: "hidden", Menu closed: "block"
              -->
              <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
              <!-- Icon when menu is open. -->
              <!--
                Heroicon name: x

                Menu open: "block", Menu closed: "hidden"
              -->
              <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <!-- Links section -->
          <div class="hidden lg:block lg:w-80">
            <div class="flex items-center justify-end">
              <div class="flex">
                <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white">Documentation</a>
                <a href="#" class="px-3 py-2 rounded-md text-sm font-medium text-indigo-200 hover:text-white">Support</a>
              </div>
              <!-- Profile dropdown -->
              <div class="ml-4 relative flex-shrink-0">
                <div>
                  <button v-on:click="$emit('fullnav-drop')" class="bg-indigo-700 flex text-sm rounded-full text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white" id="user-menu" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" :src="imgProfile" alt="">
                  </button>
                </div>
       <!-- Dropdown TODO: implement reactive class-->
                <div :class="navbar" class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                  <a v-on:click="$emit('settings')" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Settings</a>
                  <a v-on:click="$emit('logout')" href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" role="menuitem">Logout</a>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <!--
        Mobile menu, toggle classes based on menu state.

        TODO: Menu open: "block", Menu closed: "hidden"
      -->
      <div :class="mobileNav" class="lg:hidden">
        <div class="px-2 pt-2 pb-3">
          <a href="#" class="block px-3 py-2 rounded-md text-base font-medium text-white bg-indigo-800">Dashboard</a>
          <a href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Support</a>
        </div>
        <div class="pt-4 pb-3 border-t border-indigo-800">
          <div class="px-2">
            <a v-on:click="$emit('settings')" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Settings</a>
            <a v-on:click="$emit('logout')" href="#" class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-indigo-200 hover:text-indigo-100 hover:bg-indigo-600">Sign out</a>
          </div>
        </div>
      </div>
    </nav>

    <!-- 3 column wrapper -->


  </main>
</template>

<script>
export default {
  name: "navigation",
  data: () => ({
    hours: {
      remaining: 6,
      allowed: 20,
      plan: 'Guest'
    }

  }),



  props: {
    imgProfile: String,
    navbar: String,
    mobileNav: String,
  },

  methods: {

  }

}
</script>

<style scoped>

</style>
