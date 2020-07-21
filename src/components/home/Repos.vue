<template>
<div>
    <v-row v-if="loading">
      <v-col v-for="i in 6" :key="i"
        cols="12"
        xl="3"
        md="4"
        sm="6">
        <v-skeleton-loader
          ref="skeleton"
          :type="type"
          class="mx-auto"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        v-for="repo in repos"
        :key="repo.name"
        cols="12"
        xl="3"
        md="4"
        sm="6">
        <RepoItem :repo="repo" />
      </v-col>
    </v-row>
</div>
</template>

<script>
import RepoItem from './../_helpers/RepoItem'
import { mapState } from 'vuex'

export default {
  components: {
    RepoItem
  },
  data: () => ({
    type: 'article'
  }),
  computed: {
    ...mapState({
      repos: state => state.github.repos
    }),
    loading(){
      return this.repos === null
    }
  },
  created () {
    this.$store.dispatch('github/getRepos')
  },
}
</script>
