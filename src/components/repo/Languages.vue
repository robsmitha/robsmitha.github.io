<template>
    <v-row>
        <v-col v-for="l in languages" :key="l.language" xl="2" lg="3" md="4">
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
</template>

<script>
import Devicon from "./../_helpers/Devicons/Devicon"
export default {
    components: {
        Devicon
    },
    props: {
        languages: Array
    },
}
</script>
