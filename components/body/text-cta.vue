<template>

  <div class="px-4 sm:px-6 sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left lg:flex lg:items-center">
    <div>
      <nuxt-link to="/products" class="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
        <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">Devement</span>
        <span class="ml-4 text-sm">Learn more.</span>
        <!-- Heroicon name: chevron-right -->
        <svg class="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
        </svg>
      </nuxt-link>
      <h1 class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:leading-none lg:mt-6 lg:text-5xl xl:text-6xl">
        <span class="md:block">Developers for your</span>
        <div class="typer-box">
        <vue-typer class="typer pr-3 text-indigo-400 md:block" :text="['Online Business','Eccomerce Store','Review Website','Mobile Application','Landing Page','Dropshipping Site','Consulting Firm']" :shuffle='true'></vue-typer>
        </div>
          <div class="mb-5"></div>

        <!--
        <span class="text-indigo-400 md:block">{{ page.extra }}</span>
        -->
      </h1>
      <p class="-mt-2.5 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
        We create custom solutions as unique as your business. Let's develop your strategic technology plan so your business can scale indefinitely.
      </p>
      <p class="mt-8 text-sm text-white uppercase tracking-wide font-semibold sm:mt-10">Used by</p>
      <div class="mt-5 w-full sm:mx-auto sm:max-w-lg lg:ml-0">
        <div class="flex flex-wrap items-start justify-between">
          <div class="flex justify-center px-1">
            <img class="technologies h-9 sm:h-10" src="/nuxt-logo.svg" alt="Nuxt">
          </div>
          <div class="flex justify-center px-1">
            <img class="technologies h-9 sm:h-10" src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg" alt="Workcation">

          </div>
          <div class="flex justify-center px-1">
            <img class="technologies h-9 sm:h-10" src="/django-logo.svg" alt="StaticKit">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>

import { VueTyper } from 'vue-typer'

export default {
  components: {
    VueTyper
  },

  data() {
   return {
     page: ''

   }
  },

  name: "text-cta",

 // async fetch() {
 // this.page = await this.$content('text-cta').fetch()
 // }


}
</script>

<style lang="scss">
.vue-typer .custom.char {
  color: #6466f1;

}
</style>

<style scoped>

.typer-box {
  min-height: 3rem;
}

.technologies {
  filter: grayscale(100%);
}

</style>
