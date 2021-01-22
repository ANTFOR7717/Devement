<template>
  <div class="mt-16 sm:mt-24 lg:mt-0 lg:col-span-6 rounded-3xl">
    <div class="bg-white sm:max-w-md sm:w-full sm:mx-auto sm:rounded-lg sm:overflow-hidden">
      <div class="px-4 py-4 sm:px-10">
        <div>
          <div class="mb-4 mt-1 grid grid-cols-3 gap-3">
            <div>
              <button @click="writeToRealtimeDb()" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Standard</span>
                <p>Standard</p>
              </button>
            </div>

            <div>
              <button @click="testFunction()" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Business</span>
                <p>Business</p>
              </button>
            </div>

            <div>
              <button @click="readFromRealtimeDb()" class="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-500 hover:bg-gray-50">
                <span class="sr-only">Premium</span>
                <p>Premium</p>
              </button>
            </div>
          </div>

        </div>


        <span class="flex flex-col text-center mt-2">
          <span class="pb-1 flex flex-col text-center">
            <span class="pt-1 text-5xl font-extrabold text-black tracking-tight">$1299
                  <span class="text-xl font-medium text-gray-500">
                        /month
                      </span></span>


          </span>


           <div class="mt-2">
           <span class="mx-3 px-5 py-0.5 text-white text-lg font-semibold leading-5 uppercase tracking-wide bg-indigo-500 rounded-full">
                    40 Hours
                  </span>
              </div>
              </span>

        <div class="mt-4">
          <div class="space-y-6 content-center mb-2">
            <!--TODO: Programmatic list -->
          <ul class="flex items-center justify-center">
            <li class="inline flex lg:col-span-1">
              <div class="flex-shrink-0">
                <!-- Heroicon name: check-circle -->
                <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="ml-3 text-sm text-gray-700">
                Entry to annual conference
              </p>
            </li>
          </ul>
          <ul class="flex items-center justify-center">
            <li class="inline flex lg:col-span-1">
                <div class="flex-shrink-0">
                  <!-- Heroicon name: check-circle -->
                  <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <p class="ml-3 text-sm text-gray-700">
                  Entry to annual conference
                </p>
              </li>
          </ul>
          <ul class="flex items-center justify-center">
            <li class="inline flex lg:col-span-1">
              <div class="flex-shrink-0">
                <!-- Heroicon name: check-circle -->
                <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="ml-3 text-sm text-gray-700">
                Entry to annual conference
              </p>
            </li>
          </ul>
          <ul class="flex items-center justify-center">
            <li class="inline flex lg:col-span-1">
              <div class="flex-shrink-0">
                <!-- Heroicon name: check-circle -->
                <svg class="h-5 w-5 text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                </svg>
              </div>
              <p class="ml-3 text-sm text-gray-700">
                Entry to annual conference
              </p>
            </li>
          </ul>
          </div>
        </div>

      </div>

      <div class="px-4 py-6 pt-6 bg-gray-50 border-t-2 border-gray-200 sm:px-10">
        <div class="mb-2.5">
          <NuxtLink to="/signup" type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Create your account
          </NuxtLink>
        </div>
        <p class="mt-4 text-xs leading-5 text-gray-500">By signing up, you agree to our <a href="#" class="font-medium text-gray-900 hover:underline">Terms</a>, <a href="#" class="font-medium text-gray-900 hover:underline">Data Policy</a> and <a href="#" class="font-medium text-gray-900 hover:underline">Cookies Policy</a>.</p>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "pricing-table",

  methods: {


    async writeToRealtimeDb() {
      const messageRef = this.$fire.database.ref('users/test')
      try {
        await messageRef.set({
          username: 'ladylike'
        })
      } catch (e) {
        alert(e)
        return
      }
      alert('Success.')
    },

    async readFromRealtimeDb() {
      const messageRef = this.$fire.database.ref('message')
      try {
        const snapshot = await messageRef.once('value')
        alert(snapshot.val().message)
      } catch (e) {
        alert(e)
      }
    },

    async testFunction() {
      const messageRef = this.$fire.database.ref('message')
      try {
        await messageRef.set({
          message: 'Nuxt-Fire with Firebase Realtime Database rocks!'
        })
      } catch (e) {
        alert(e)
        return
      }
      alert('Success.')
    }



  },

}
</script>

<style scoped>

</style>
