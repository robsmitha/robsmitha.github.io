<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="dark flex white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="item in items" 
          :key="item.href"
          :href="item.href" 
          icon
          target="_blank" 
          class="mx-4 white--text"
          rel="noopener noreferrer">
          <v-icon size="24px">{{ item.icon }}</v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class=" pt-0">
         This site was handmade with <a class="text-decoration-none white--text" href="https://vuetifyjs.com/en/" target="_blank" rel="noopener noreferrer">Vuetify.</a>
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —  Made with <v-icon color="red">mdi-heart</v-icon> by Rob Smitha
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
import socialmedia from './../_helpers/socialmedia'
export default {
    data: () => ({
        items: socialmedia
    }),
}
</script>