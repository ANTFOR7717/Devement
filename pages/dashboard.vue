<template>
  <main>
  <div v-if="userLoggedIn()">
    <!-- Background color split screen for large screens -->
  <div class="fixed top-0 left-0 w-1/2 h-full bg-white" aria-hidden="true"></div>
  <div class="fixed top-0 right-0 w-1/2 h-full bg-gray-50" aria-hidden="true"></div>


    <!-- 3 column wrapper -->
  <div class="relative min-h-screen flex flex-col">

    <navigation :navbar="changeNav()"
                :mobile-nav="changeMobileNav()"
                v-on:logout="logout()"
                v-on:settings="swapState()"
                v-on:fullnav-drop="navState()"
                v-on:mobilenav="mobileNavState()"
                :img-profile="this.userImage"
    />

  <div class="flex-grow w-full max-w-7xl mx-auto xl:px-8 lg:flex">

  <div class="flex-1 min-w-0 bg-white xl:flex">


        <account-profile
          :img-profile="this.userImage"
          :businessName="businessName()"
          :button-state="buttonState"
          :business-name="user.business"
          :github-user="github.user"
          :membership="user.membership"
          v-on:new-project="startProject()"
          v-on:settings="swapState()"
        />

        <projects v-show="projects === true && newProject === false"/>

        <settings v-show="userSettings === true && newProject === false"/>

        <new-project v-show="newProject === true"/>

        <activity-feed v-show="newProject === false"/>

    </div>


  </div>

  </div>

  </div>

<!--
    <not-signed-in v-else/>
-->
  </main>
</template>

<script>

import Settings from "@/components/dashboard/settings";
export default {
  name: "manage",

  async asyncData(ctx) {
  },

  components: {Settings},

  data: () => ({


    newProject: false,
    userSettings: false,
    projects: true,
    buttonState: 'Settings',
    userImage: 'https://www.nacdnet.org/wp-content/uploads/2016/06/person-placeholder.jpg',

    navigation: {
      full: false,
      mobile: false,
    },

    user: {
      business: 'Armerdius',
      membership: 'Standard',
    },

    github: {
      user: 'armerdius',
      link: 'armerdius/platinum',
      name: 'platinum',
    }

  }),

  head() {
    return {}
  },


  methods: {
    logout(){
      this.$fire.auth.signOut().then(() => {
        alert('signing out')
        this.$router.push('/')
      }).catch((error) => {
       alert('failure')
      });

    },



    swapState() {
      this.userSettings = !this.userSettings
      this.projects = !this.projects

      if (this.userSettings === false ) {
        this.buttonState = 'Settings'
      } else {
        this.buttonState = 'Projects'
      }

      if (this.newProject === true) {
        this.newProject = false
      }

      if (this.userSettings === this.projects) {
        this.projects = !this.projects
      }

    },

    startProject() {
      this.newProject = !this.newProject
      this.settings = !this.newProject



    },

    userLoggedIn() {
      return this.$store.state.user.login
    },

    navState() {
      this.navigation.full = !this.navigation.full
    },

    mobileNavState() {
      this.navigation.mobile = !this.navigation.mobile

    },

    changeNav() {
      if (this.navigation.full === false) {
        return 'hidden'
      } else {
        return ''
      }
    },

    changeMobileNav() {
      if (this.navigation.mobile === false) {
        return 'hidden'
      } else {
        return 'block'
      }
    },

    businessName() {
      let user = this.$fire.auth.currentUser;
      return user.displayName

    },

    async checkActivity() {

      try {

        let user = 'ANTFOR7717'
        let repo = 'testAPI'
        let url = 'https://api.github.com/repos/'+user+'/'+repo+'/commits'

        fetch(url)
          .then(res => res.json())
          .then((json) => {
            let activity = []
            for (let i = 0; i < json.length; i++) {
              activity.push(json[i].commit)
            }
            return JSON.stringify(activity)

          })
          .catch(err => { throw err });

        console.log('Yo wtf');



      } catch (e) {
        alert(e)
      }

    }

  }
}
</script>

<style scoped>
body {
  background-color: #f9fafb;
}

</style>
