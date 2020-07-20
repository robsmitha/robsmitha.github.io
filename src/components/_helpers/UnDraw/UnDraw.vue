<template>
    <img :width="width" :src="src" />
</template>
<script>
import { svgs } from './UnDraws'
export default {
    props: {
        svg: String
    },
    computed: {
        width(){
            return window.innerWidth < 768 ? "200px" : "300px"
        },
        src(){
            const baseUrl = 'https://smitha-cdn.s3.us-east-2.amazonaws.com/Content/vendor/unDraw/'
            switch(this.svg){
                case undefined:
                case null: 
                case '':
                return baseUrl + svgs[Math.floor(Math.random() * svgs.length)] + ".svg"
            }
            return baseUrl + this.svg + ".svg"
        }
    }
}
</script>