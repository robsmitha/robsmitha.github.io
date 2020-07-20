<template>
  <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
          <v-card
          v-bind="attrs"
          v-on="on"
          class="mx-auto pb-3"
          :ripple="true"
          :hover="true"
          outlined
          :tile="true"
          :to="isExternalLink ? '' : 'repo/'+repo.name"
          :target="isExternalLink ? '_blank' : ''" 
          :rel="isExternalLink ? 'noopener noreferrer' : ''"
          :href="isExternalLink ? repo.html_url : ''"
          >
            <v-list-item three-line>
                <v-list-item-content>
                  <v-list-item-title class="headline my-1">{{repo.name}}</v-list-item-title>
                  <v-list-item-subtitle>{{repo.description}}</v-list-item-subtitle>
                </v-list-item-content>
                <v-list-item-avatar
                size="50"
                tile
                >
                  <Devicon :icon="icon" />
                </v-list-item-avatar>
            </v-list-item>
          </v-card>
      </template>
      <span>
        {{isExternalLink ? `${repo.name} on github.com` : `${repo.name} Project`}}
        <v-icon color="white">{{isExternalLink ? `mdi-open-in-new` : `mdi-source-repository`}}</v-icon>
      </span>
    </v-tooltip>
</template>

<script>
import Devicon from './Devicons/Devicon'
import { map } from './Devicons/Devicons'
export default {
  props: {
    repo: Object,
    isExternalLink: Boolean
  },
  components: {
    Devicon
  },
  computed:{
      icon(){
        if(this.isExternalLink && this.repo && this.repo.name && map){
          const key = this.repo.name.toLowerCase()
          if(map.has(key)){
            return this.repo.name
          }
        }
        return this.repo.language
      }
  }
}
</script>
