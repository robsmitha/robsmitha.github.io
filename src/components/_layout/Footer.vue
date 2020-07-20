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
         This site is built with Vuetify.
      </v-card-text>

      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} —  Made with <v-icon color="red">mdi-heart</v-icon> by Rob Smitha
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
    data: () => ({
        items: [
        {
            icon: 'mdi-github',
            href: 'https://github.com/robsmitha'
        },
        {
            icon: 'mdi-linkedin',
            href: 'https://www.linkedin.com/in/robsmitha/'
        },
        {
            icon: 'mdi-file-account',
            href: 'https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/files/Rob+Smitha+Resume.pdf'
        }
    ]
    }),
}
</script>