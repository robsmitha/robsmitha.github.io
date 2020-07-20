<template>
    <div>
      <v-parallax src="https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/images/md/bg-030.jpg" style="height: 250px">
        <v-container
          fluid
          >
          <v-row>
            <v-col class="text-center">
              <h1 class="subtitle-1 text-uppercase">
                Project
              </h1>
              <v-progress-circular v-if="repo.loading"
                :size="40"
                color="white"
                indeterminate
                ></v-progress-circular>
              <div v-else-if="!repo.success">
                <!-- TODO: ErrorMessage -->
              </div>
              <span class="text-lg-h1 text-h4 font-weight-light" v-else>
                {{repo.data.name}}
              </span>
              <p class="subtitle-2">
                Thanks to GitHub Developer API
              </p>
            </v-col>
          </v-row>
        </v-container>
      </v-parallax>
      <v-container class="py-7">
        <h3 class="subtitle-1 text-uppercase">
            Description
        </h3>
        <span class="text-h4">
            About Project 
        </span>
        <p class="subtitle-2">
            This project is on github.com
        </p>
        <v-skeleton-loader v-if="repo.loading"
          type="list-item-two-line"
        ></v-skeleton-loader>
        <div v-else-if="!repo.success">
        <!-- TODO: ErrorMessage -->
        </div>
        <div v-else>
            <p class="text-body-1">
            {{repo.data.description}}
            </p>
            
            <v-tooltip bottom>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn 
                    icon 
                    color="black" 
                    v-bind="attrs"
                    v-on="on">
                        <v-icon>mdi-github</v-icon>
                    </v-btn>
                </template>
                GitHub Repository
            </v-tooltip>
            
            <v-tooltip bottom v-if="repo.data.homepage && repo.data.homepage.length > 0">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn 
                    icon 
                    color="black" 
                    v-bind="attrs"
                    v-on="on"
                    target="_blank"
                    rel="noopener noreferrer"
                    :href="repo.data.homepage"
                    >
                        <v-icon>mdi-open-in-new</v-icon>
                    </v-btn>
                </template>
                Open Project
            </v-tooltip>
        </div>
      </v-container>
      <v-container class="py-7">
        <h3 class="subtitle-1 text-uppercase">
            Languages
        </h3>
        <span class="text-h4">
            Code Breakdown
        </span>
        <p class="subtitle-2">
            Line counts of source code languages
        </p>
        <v-skeleton-loader v-if="languages.loading"
          type="list-item-avatar-three-line"
          width="300px"
        ></v-skeleton-loader>
        <div v-else-if="!languages.success">
        <!-- TODO: ErrorMessage -->
        </div>
        <v-row v-else>
            <v-col v-for="l in languages.data" :key="l.language" xl="2" lg="3" md="4">
                <v-tooltip bottom>
                    <template v-slot:activator="{ on, attrs }">
                        <v-card class="text-center" outlined
                        v-bind="attrs"
                            v-on="on">
                            <v-list-item two-line>
                                <v-list-item-content class="text-left">
                                    <div class="overline mb-3">{{l.lines}} lines</div>
                                    <v-list-item-title class="headline mb-1">
                                        <v-avatar tile size="1.5rem">
                                            <Devicon :icon="l.language" />
                                        </v-avatar>
                                        {{l.language}}
                                    </v-list-item-title>
                                </v-list-item-content>

                                <v-list-item-avatar
                                    tile
                                    size="80"
                                >
                                    <v-progress-circular size="80" :value="l.percent">
                                        <span class="text-h6 font-weight-thin">
                                            {{l.percent}}%
                                        </span>
                                    </v-progress-circular>
                                </v-list-item-avatar>
                            </v-list-item>
                        </v-card>
                    </template>
                    {{l.lines}} lines of {{l.language}}
                </v-tooltip>
            </v-col>
        </v-row>
      </v-container>
      <v-container class="py-7">
        <h3 class="subtitle-1 text-uppercase">
            Commits
        </h3>
        <span class="text-h4">
            Recent Activity
        </span>
        <p class="subtitle-2">
            Code changes to this project
        </p>
        <v-skeleton-loader v-if="commits.loading"
          type="list-item-avatar-three-line"
        ></v-skeleton-loader>
        <div v-else-if="!commits.success">
        <!-- TODO: ErrorMessage -->
        </div>
        <v-timeline dense v-else>
            <v-timeline-item
                v-for="c in commits.data"
                :key="c.date"
                :fill-dot="true"
                :icon="'mdi-source-commit'"
                color="transparent"
                icon-color="grey"
            >
                <v-card class="elevation-2">
                    <v-card-title>
                        <span class="d-sr-only">Commits on </span>{{new Date(c.date).toDateString()}}
                    </v-card-title>
                    <v-list-item two-line v-for="gc in c.commits" :key="gc.sha" target="_blank" rel="noopener noreferrer" :href="gc.html_url">
                        <v-list-item-avatar
                            size="50"
                        >   
                            <v-img :src="gc.author !== null ? gc.author.avatar_url : ''"></v-img>
                        </v-list-item-avatar>
                        <v-list-item-content>
                            <v-list-item-title class="mb-1">
                                {{gc.commit.message}}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                                {{gc.author.login}}
                                at {{new Date(gc.commit.author.date).toLocaleTimeString()}}
                            </v-list-item-subtitle>
                        </v-list-item-content>
                    </v-list-item>
                </v-card>
            </v-timeline-item>
        </v-timeline>
      </v-container>
    </div>
</template>

<script>
import Devicon from "./_helpers/Devicons/Devicon";
import github from './../api/github'
export default {
    components: {
        Devicon
    },
    data: () => ({
        repo: {
            loading: true,
            success: false,
            data: null
        },
        commits: {
            loading: true,
            success: false,
            data: null
        },
        languages: {
            loading: true,
            success: false,
            data: null
        }
    }),
   watch:{
        $route (to, from){
            if(to.fullPath !== from.fullPath){
                this.loadData(to.params.name)
            }
        }
    },
    created(){
        this.loadData(this.$router.currentRoute.params.name)
    },
    methods: {
        loadData(name){
            if(name){
                github.getRepo(name)
                .then(data => this.repo = {
                    loading: false,
                    success: data !== null,
                    data: data
                })

                github.getLanguages(name)
                .then(data => {
                    let cards = []
                    if(data){
                        const keys = Object.keys(data)
                        const sum = keys.reduce((s, l) => s + data[l], 0)
                        keys.map(l => {
                            cards.push({
                                language: l,
                                lines: data[l],
                                percent: Math.round((data[l] / sum) * 100)
                            })
                        })
                    }
                    this.languages = {
                        loading: false,
                        success: data !== null,
                        data: cards
                    }
                })

                github.getCommits(name)
                .then(data => {

                    const dates = data !== null ? data.reduce((groups, group) => {
                        const date = group.commit.committer.date.split('T')[0];
                        if (!groups[date]) {
                            groups[date] = [];
                        }
                        groups[date].push(group);
                        return groups;
                    }, {}) 
                    : [];

                    const commitGroups = Object.keys(dates).map((date) => {
                        return {
                            date,
                            commits: dates[date]
                        };
                    });

                    this.commits = {
                        loading: false,
                        success: commitGroups !== null,
                        data: commitGroups
                    }
                })
            }
        }
    }
}
</script>
