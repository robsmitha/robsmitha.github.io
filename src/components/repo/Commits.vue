<template>
    <v-timeline dense>
        <v-timeline-item
            v-for="c in commits"
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
                 <v-list-item two-line v-for="gc in c.commits" 
                    :key="gc.sha" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    :href="gc.html_url"
                    >
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
</template>

<script>
export default {
    props: {
        commits: Array
    },
}
</script>
