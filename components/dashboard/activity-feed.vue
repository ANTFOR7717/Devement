<template>
  <div class="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
    <div class="pl-6 lg:w-80">
      <div class="pt-6 pb-2">
        <h2 class="text-sm font-semibold">Activity</h2>
      </div>
      <div v-if="checkActivity() === true">
        <ul class="divide-y divide-gray-200">
          <li class="py-4">
            <div class="flex space-x-3">
              <img class="h-6 w-6 rounded-full" :src="commitImg" alt="">
              <div class="flex-1 space-y-1">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-medium">You</h3>
                  <p class="text-sm text-gray-500">1h</p>
                </div>
                <p class="text-sm text-gray-500">Deployed Workcation (2d89f0c8 in master) to production</p>
              </div>
            </div>
          </li>

          <!-- More items... -->
        </ul>
        <div class="py-4 text-sm border-t border-gray-200">
          <a href="" class="text-indigo-600 font-semibold hover:text-indigo-900">View all activity <span aria-hidden="true">&rarr;</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "activity-feed",

  props: {
    commitImg: String,
  },

  methods: {
    async checkActivity() {
      const messageRef = this.$fire.database.ref('users/'+this.$store.state.user.uid)

      try {
        let snapshot = await messageRef.once('value')
        return snapshot.val().activity
      } catch (e) {
        alert(e)
      }

    }

  }
}
</script>

<style scoped>

</style>
