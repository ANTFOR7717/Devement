<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <div class="">
    <div class="pt-12 sm:pt-16 lg:pt-2">
      <div class="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto space-y-2 lg:max-w-none">
          <div class="features-button flex pb-5 justify-center">
            <nuxt-link to="/features" class="inline-flex items-center text-white bg-gray-900 rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
              <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">Products</span>
              <span class="ml-4 text-sm">Learn more.</span>
              <!-- Heroicon name: chevron-right -->
              <svg class="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
              </svg>
            </nuxt-link>
          </div>
          <p class="text-3xl font-extrabold text-white sm:text-4xl lg:text-4xl">
            The right price for you, whoever you are
          </p>
          <p class="text-lg text-gray-300">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum sequi unde repudiandae natus.
          </p>
        </div>
      </div>
    </div>
    <div class="main-body bg-gray-800 mt-8 pb-12 bg-gray-50 sm:mt-12 sm:pb-16 lg:mt-16 lg:pb-24">
      <div class="relative">
        <div class="absolute inset-0 h-3/4 bg-gray-800"></div>
        <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div class="max-w-md mx-auto space-y-4 lg:-mt-5 lg:max-w-5xl lg:grid lg:grid-cols-2 lg:gap-5 lg:space-y-0">


            <div class="pricing-chart">
              <div class="pricing-chart-bg">
                <div>
                  <h3 class="pricing-chart-heading">
                    Hosting
                  </h3>
                </div>
                <div class="pricing-chart-price">
                  $12
                  <span class="ml-1 text-xl font-medium text-gray-500">
                  /mo
                </span>
                </div>
                <p class="mt-5 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Pariatur quod similique
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Sapiente libero doloribus modi nostrum
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Vel ipsa esse repudiandae excepturi
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Itaque cupiditate adipisci quibusdam
                    </p>
                  </li>
                </ul>
                <div class="rounded-md shadow">
                  <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900" aria-describedby="tier-standard">
                    Get started
                  </a>
                </div>
              </div>
            </div>

            <div class="pricing-chart">
              <div class="pricing-chart-bg">
                <div>
                  <h3 class="pricing-chart-heading">
                    Support
                  </h3>
                </div>
                <div class="pricing-chart-price">
                  $79
                  <span class="ml-1 text-xl font-medium text-gray-500">
                  /mo
                </span>
                </div>
                <p class="mt-5 text-base text-gray-500">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </p>
              </div>
              <div class="flex-1 flex flex-col justify-between px-6 pt-6 pb-8 bg-gray-50 space-y-6 sm:p-10 sm:pt-6">
                <ul class="space-y-4">
                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Pariatur quod similique
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Sapiente libero doloribus modi nostrum
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Vel ipsa esse repudiandae excepturi
                    </p>
                  </li>

                  <li class="flex items-start">
                    <div class="flex-shrink-0">
                      <!-- Heroicon name: outline/check -->
                      <svg class="h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p class="ml-3 text-base text-gray-700">
                      Itaque cupiditate adipisci quibusdam
                    </p>
                  </li>
                </ul>
                <div class="rounded-md shadow">
                  <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900" aria-describedby="tier-standard">
                    Get started
                  </a>
                </div>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div class="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-5">
        <div class="max-w-md mx-auto lg:max-w-5xl">
          <div class="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
            <div class="flex-1">
              <div>
                <h3 class="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-yellow-300 text-gray-700">
                  Development
                </h3>
              </div>
              <div class="mt-4 text-base text-gray-600">Get full access to all of standard license features for solo projects that make less than $20k gross revenue for <span class="font-semibold text-gray-900">$29</span>.</div>
            </div>
            <div class="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
              <a href="#" class="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                Create your account
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


</template>

<script>
export default {
  name: "products"
}
</script>

<style scoped>
.pricing-chart {
  @apply flex flex-col rounded-lg shadow-lg overflow-hidden;
}

.pricing-chart-bg {
  @apply px-6 py-8 bg-white sm:p-10 sm:pb-6;
}

.pricing-chart-heading {
  @apply text-sm inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-indigo-100 text-indigo-600;
}

.pricing-chart-price {
  @apply mt-4 flex items-baseline text-4xl font-extrabold;
}

</style>
