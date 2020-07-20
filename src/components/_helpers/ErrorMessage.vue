<template>
    <v-row>
        <v-col>
            <UnDraw />
        </v-col>
        <v-col class="text-center">
            <v-icon>mdi-alert-circle</v-icon>
            {{message}}
        </v-col>
    </v-row>
</template>
<script>
import UnDraw from "./UnDraw/UnDraw";
export default {
    props: {
        message: String
    },
    components: {
        UnDraw
    }
}
</script>