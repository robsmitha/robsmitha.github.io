<template>
  <div>
    <v-row v-if="loading">
      <v-col v-for="i in 8" :key="i"
        cols="12"
        xl="2"
        md="3"
        sm="4">
        <v-skeleton-loader
          ref="skeleton"
          :type="type"
          class="mx-auto"
        ></v-skeleton-loader>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col
        v-for="repo in starred"
        :key="repo.name"
        cols="12"
        xl="2"
        md="3"
        sm="4">
        <RepoItem :repo="repo" :isExternalLink="true" />
      </v-col>
    </v-row>
  </div>
</template>

<script>
import RepoItem from './RepoItem'
import { mapState } from 'vuex'

export default {
  components: {
    RepoItem
  },
  data: () => ({
    type: 'list-item-two-line'
  }),
  computed: {
    ...mapState({
      starred: state => state.github.starred
    }),
    loading(){
      return this.starred === null
    }
  },
  mounted () {
    this.$store.dispatch('github/getStarred')
  },
}
</script>
