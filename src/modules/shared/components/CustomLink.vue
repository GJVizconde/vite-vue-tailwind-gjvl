<template>
    <a v-if="isExternalLink" 
    :href="link.to"
    target="_blank"
    class='normal-link'
>{{link.name}}</a>

    <router-link
        v-else
        :to="link.to"
        v-slot="{href, isActive}"
        >
        <a 
        :href="href"
        :class="isActive ? 'is-active' : 'normal-link'"
        >{{link.name}}</a>
    </router-link>

  
</template>

<script>
import { computed } from 'vue'

export default {


    props:{
        link:{
            type:Object,
            required: true
        }
    },
    
    setup(props){
        
        const isExternalLink = computed(() => {
            return props.link.to.startsWith('http');
    });

    return{
        isExternalLink
    }
        
    }
    

}
</script>

<style scoped>
.is-active{
    color: #42b983
}

.normal-link{
    color: #c6c5c5;
}

</style>

