<template>
    <div>
      <v-parallax src="https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/images/md/bg-009.jpg">
        <v-container
          fluid
          >
          <v-row>
            <v-col class="text-center">
              <h1 class="subtitle-1 text-uppercase">
                Hello there
              </h1>
              <span class="text-lg-h1 text-h2">
                Welcome
              </span>
              <p class="subtitle-2">
                Glad you're here
              </p>
              <v-btn class="mx-2" fab dark small v-for="item in items" :key="item.href" :color="item.color" :href="item.href" target="_blank" rel="noopener noreferrer">
                <v-icon dark>{{item.icon}}</v-icon>
              </v-btn>
            </v-col>
          </v-row>
        </v-container>
        <div class="text-center">
          <v-btn outlined fab color="white" @click="$vuetify.goTo('#projects', { duration: 300, easing: 'easeInCubic' })">
            <v-icon>mdi-chevron-triple-down</v-icon>
          </v-btn>
        </div>
      </v-parallax>
      <v-sheet color="grey lighten-3 py-7 text-center">
        <span class="text-overline d-block" v-if="user">
          {{user.bio}}
        </span>
        <span class="text-overline d-block" v-else>
          Full Stack Web Development With .NET and JavaScript.
        </span>
      </v-sheet>
      <v-container id="projects" class="py-7">
        <h3 class="subtitle-1 text-uppercase">
          Portfolio
        </h3>
        <span class="text-h4">
          My Projects
        </span>
        <p class="subtitle-2">
          Open source projects on github.com
        </p>
        <Repos />
      </v-container>
      <v-sheet color="grey lighten-3">
        <v-container class="py-7">
          <h3 class="subtitle-1 text-uppercase">
            Resources
          </h3>
          <span class="text-h4">
            Starred Projects
          </span>
          <p class="subtitle-2">
            Some open source projects I like
          </p>
          <Starred />
        </v-container>
      </v-sheet>
    </div>
</template>

<script>
import Repos from './_helpers/Repos'
import Starred from './_helpers/Starred'
import { mapState } from 'vuex'

export default {
  components: {
    Repos,
    Starred
  },
  data: () => ({
    items: [
      {
        icon: 'mdi-github',
        color: 'dark',
        href: 'https://github.com/robsmitha'
      },
      {
        icon: 'mdi-linkedin',
        color: 'blue',
        href: 'https://www.linkedin.com/in/robsmitha/'
      },
      {
        icon: 'mdi-file-account',
        color: 'red',
        href: 'https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/files/Rob+Smitha+Resume.pdf'
      }
    ]
  }),
  computed: {
    ...mapState({
      user: state => state.github.user
    })
  },
  created () {
    this.$store.dispatch('github/getUser')
  },
}
</script>
