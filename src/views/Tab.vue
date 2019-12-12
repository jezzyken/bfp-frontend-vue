<template>
    <div v-show="isActive"><slot></slot></div>
</template>

<script>
export default {

    props:{

        info:{},
        selected: { default: false}
    },
    data(){
        return{
            isActive: false,
        }
    },
    created(){
        this.isActive = this.selected
    },
    
}
</script>