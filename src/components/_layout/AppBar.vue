<template>
    <div>
        <v-navigation-drawer
        v-model="drawer"
        clipped
        app
        right
        temporary
        fixed
        >
        <v-list dense>
            <template v-for="item in items">
            <v-row
                v-if="item.heading"
                :key="item.heading"
                align="center"
            >
                <v-col cols="6">
                <v-subheader v-if="item.heading">
                    {{ item.heading }}
                </v-subheader>
                </v-col>
                <v-col
                cols="6"
                class="text-center"
                >
                <a
                    href="#!"
                    class="body-2 black--text"
                >EDIT</a>
                </v-col>
            </v-row>
            <v-list-group
                v-else-if="item.children"
                :key="item.text"
                v-model="item.model"
                :prepend-icon="item.model ? item.icon : item['icon-alt']"
                append-icon=""
            >
                <template v-slot:activator>
                <v-list-item-content>
                    <v-list-item-title>
                    {{ item.text }}
                    </v-list-item-title>
                </v-list-item-content>
                </template>
                <v-list-item
                v-for="(child, i) in item.children"
                :key="i"
                link
                :to="child.to"
                :href="child.href"
                :target="child.href ? '_blank' : ''" 
                :rel="child.href ? 'noopener noreferrer' : ''">
                
                <v-list-item-action v-if="child.icon">
                    <v-icon>{{ child.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                    <v-list-item-title>
                    {{ child.text }}
                    </v-list-item-title>
                </v-list-item-content>
                </v-list-item>
            </v-list-group>
            <v-list-item
                v-else
                :key="item.text"
                link
                :to="item.to"
            >
                <v-list-item-action>
                <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-action>
                <v-list-item-content>
                <v-list-item-title>
                    {{ item.text }}
                </v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            </template>
        </v-list>
        </v-navigation-drawer>

        <v-app-bar
        clipped-right
        app
        dark
        >
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        icon
                        large
                        class="ml-md-4 ml-2"
                        to="/"
                        v-bind="attrs"
                        v-on="on"
                    >
                    <v-avatar
                        size="2.8rem"
                        item
                        >
                        <v-img
                            src="https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/images/robsmitha-avatar-2.png"
                            alt="Rob Smitha"
                        ></v-img>
                        </v-avatar>
                    </v-btn>
                </template>
                Home
            </v-tooltip>
        <v-toolbar-title
            class="ml-0 pl-md-4 pl-2"
        >
            <span>
                Rob Smitha 
            </span>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        </v-app-bar>
    </div>
</template>

<script>
import { mapState } from 'vuex'
  export default {
    computed: {
        ...mapState({
            repos: state => state.github.repos
        })
    },
    watch:{
        repos(val){
            if(val && Array.isArray(val)){
                const index = 2
                this.items[index].children = []
                val.map((repo) => {
                    this.items[index].children.push({ text: repo.name, to: `/repo/${repo.name}` })
                })
            }
        }
    },
    data: () => ({
      dialog: false,
      drawer: false,
      items: [
        { icon: 'mdi-home', text: 'Home', to: '/' },
        //{ icon: 'mdi-account', text: 'About', to: '/about' },
        //{ icon: 'mdi-post-outline', text: 'Blog', to: '/blog' },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'External Links',
          model: true,
          children: [
            { icon: 'mdi-github', text: 'GitHub', href: 'https://github.com/robsmitha' },
            { icon: 'mdi-linkedin', text: 'LinkedIn', href: 'https://www.linkedin.com/in/robsmitha/' },
            { icon: 'mdi-file-account', text: 'Résumé', href: 'https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/files/Rob+Smitha+Resume.pdf' },
          ],
        },
        {
          icon: 'mdi-chevron-up',
          'icon-alt': 'mdi-chevron-down',
          text: 'Projects',
          model: false,
          children: [],
        },
      ],
    }),
    created(){
        this.$store.dispatch('github/getRepos')
    }
  }
</script>