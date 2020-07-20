<template>
    <img :src="src" />
</template>
<script>
import { DeviconDeviconOriginalWordmark, map } from "./Devicons";
export default {
    props: {
        icon: String
    },
    computed: {
        devicon(){
            if(map && this.icon) {
                const key = this.icon.toLowerCase()
                if(map.has(key)) {
                    return map.get(key)
                }
            }
            return null
        },
        src(){
            const baseUrl = 'https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/vendor/devicons/'
            switch(this.devicon){
                case undefined:
                case null: 
                case '': 
                return baseUrl + DeviconDeviconOriginalWordmark + ".svg"
            }
            return baseUrl + this.devicon + ".svg"
        }
    }
}
</script>