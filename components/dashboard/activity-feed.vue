<template>
  <div class="bg-gray-50 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0 xl:pr-20 xl:-mr-10 xl:ml-20">
    <div class="pl-8 lg:w-80">
      <div class="pt-6 pb-2">
        <h2 class="text-sm font-semibold">Activity</h2>
      </div>
      <div>
        <ul class="divide-y divide-gray-200">
          <li v-for="i in activity" :key="activitySet" class="py-4">
            <div class="flex space-x-3">
              <img class="h-6 w-6 rounded-full" :src="commitImg" alt="">
              <div class="flex-1 space-y-1">
                <div class="flex items-center justify-between">
                  <h3 class="text-sm font-medium">{{ i.author.name }}</h3>
                  <p class="text-sm text-gray-500">{{ timeConversion(timeSince(i.author.date)) }}</p>
                </div>
                <p class="text-sm text-gray-500">{{ i.message }}</p>
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

  computed: {
    activitySet () {
      return this.$store.state.user.activity
    }
  },

  data: () => ({
    start: false,
    title: '',
    test: null,
    activity: [],
    time: '',
    commiter: '',
    comment: '',

  }),

  props: {
    commitImg: String,

  },

  async beforeCreate() {

    const messageRef = this.$fire.database.ref('users/'+this.$store.state.user.uid+'/github')
    try {
      let snapshot = await messageRef.once('value')

      let user = snapshot.val().name
      let repo = snapshot.val().repository
      let url = 'https://api.github.com/repos/'+user+'/'+repo+'/commits'



      fetch(url)
        .then(res => res.json())
        .then((json) => {
          let activity = []
          for (let i = 0; i < json.length; i++) {
            activity.push(json[i].commit)
          }
          this.activity = activity

        })
        .catch(err => { throw err });





    } catch (e) {
      alert(e)
    }

  },





  methods: {
    timeSince(time) {

      let commitTime = new Date(time).getTime();
      let currentTime = new Date().getTime();

     return currentTime - commitTime
    },

    timeConversion(milliseconds) {

      let seconds = (milliseconds / 1000).toFixed(1);

      let minutes = (milliseconds / (1000 * 60)).toFixed(1);

      let hours = (milliseconds / (1000 * 60 * 60)).toFixed(1);

      let days = (milliseconds / (1000 * 60 * 60 * 24)).toFixed(1);

      if (seconds < 60) {
        return Math.floor(parseInt(seconds)) + "s";
      } else if (minutes < 60) {
        return Math.floor(parseInt(minutes)) + "m";
      } else if (hours < 24) {
        return Math.floor(parseInt(hours)) + "h"
      } else {
        return Math.floor(parseInt(days)) + "d"
      }
      },

    testing() {
      return 'wtf'
    }


  }
}
</script>

<style scoped>
body {
  background-color: #f9fafb;
}

</style>
