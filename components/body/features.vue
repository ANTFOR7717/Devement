<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="bg-gray-800 -mt-12">

    <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">

      <div class="flex pb-5 justify-center lg:-mt-10 lg:mb-9">
        <nuxt-link to="/company" class="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
          <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">Features</span>
          <span class="ml-4 text-sm">Learn more.</span>
          <svg class="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
        </nuxt-link>
      </div>

      <div class="pb-16 xl:flex xl:items-center xl:justify-between">
        <div>

          <h1 class="text-4xl font-extrabold sm:text-5xl sm:tracking-tight">
            <span class="text-gray-50">Everything you need for </span>
            <span class="text-indigo-500">your business</span>
          </h1>
          <p class="mt-5 text-xl text-gray-300">Includes every feature we offer plus unlimited projects and unlimited users.</p>
        </div>
        <a href="#" class="mt-8 w-full bg-indigo-600 border border-transparent px-5 py-3 inline-flex items-center justify-center text-base font-medium rounded-md text-white hover:bg-indigo-700 sm:mt-10 sm:w-auto xl:mt-0">Get started today</a>
      </div>
      <div class="border-t border-gray-200 pt-16 xl:grid xl:grid-cols-3 xl:gap-x-8">
        <div>
          <h2 class="text-base font-semibold text-indigo-400 tracking-wide uppercase">Everything you need</h2>
          <p class="mt-2 text-3xl font-extrabold text-gray-200">All-in-one platform</p>
          <p class="mt-4 text-lg text-gray-400">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla nec. Urna, sed a lectus elementum blandit et.</p>
        </div>
        <div class="mt-4 sm:mt-8 md:mt-10 md:grid md:grid-cols-2 md:gap-x-8 xl:mt-0 xl:col-span-2">
          <ul class="divide-y divide-gray-200">
            <li class="py-4 flex md:py-0 md:pb-4">
              <!-- Heroicon name: outline/check -->
              <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-base text-gray-300">Vitae in pulvinar odio id utobortis in inter.</span>
            </li>

            <li class="py-4 flex">
              <!-- Heroicon name: outline/check -->
              <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-base text-gray-300">Sed sed id viverra viverra augue eget massa.</span>
            </li>

            <li class="py-4 flex">
              <!-- Heroicon name: outline/check -->
              <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-base text-gray-300">Urna, gravida amet, a, integer venenatis.</span>
            </li>

            <li class="py-4 flex">
              <!-- Heroicon name: outline/check -->
              <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-base text-gray-300">Lobortis sed pharetra amet vitae eleifend.</span>
            </li>

            <li class="py-4 flex">
              <!-- Heroicon name: outline/check -->
              <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-base text-gray-300">Ullamcorper blandit a consequat donec elit aoreet.</span>
            </li>
          </ul>
          <ul class="border-t border-gray-200 divide-y divide-gray-200 md:border-t-0">
            <li class="py-4 flex md:border-t-0 md:py-0 md:pb-4">
              <!-- Heroicon name: outline/check -->
              <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-base text-gray-300">Vitae in pulvinar odio id utobortis in inter.</span>
            </li>

            <li class="py-4 flex">
              <!-- Heroicon name: outline/check -->
              <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-base text-gray-300">Sed sed id viverra viverra augue eget massa.</span>
            </li>

            <li class="py-4 flex">
              <!-- Heroicon name: outline/check -->
              <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-base text-gray-300">Urna, gravida amet, a, integer venenatis.</span>
            </li>

            <li class="py-4 flex">
              <!-- Heroicon name: outline/check -->
              <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-base text-gray-300">Lobortis sed pharetra amet vitae eleifend.</span>
            </li>

            <li class="py-4 flex">
              <!-- Heroicon name: outline/check -->
              <svg class="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
              </svg>
              <span class="ml-3 text-base text-gray-300">Ullamcorper blandit a consequat donec elit aoreet.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "features"
}
</script>

<style scoped>


</style>
