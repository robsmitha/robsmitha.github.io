<template>
    <div>
        <UnDraw />
        <br>
        <v-icon>mdi-alert-circle</v-icon>
        {{message}}
    </div>
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