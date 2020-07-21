<template>
    <div>
      <v-parallax src="https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/images/md/bg-030.jpg" style="height: 250px">
        <v-container
          fluid
          >
          <v-row>
            <v-col class="text-center">
              <h1 class="subtitle-1 text-uppercase">
                Hi there
              </h1>
              <span class="text-lg-h1 text-h2">
                About
              </span>
              <p class="subtitle-2">
                Let me tell you a little about myself
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
      <v-container class="py-7">
        <h3 class="subtitle-1 text-uppercase">
            About me
        </h3>
        <span class="text-h4">
            Background
        </span>
        <p class="subtitle-2">
            I'll spare you the life story
        </p>
        <p class="text-body-1" v-if="user">
            {{user.bio}}
        </p>
      </v-container>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
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
