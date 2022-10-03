<template lang="html">
    <div>
        Child component - {{title}}
    </div>
</template>
<script>
export default {
    props: ['title'],
    setup(props) {
        console.log(`Props value in composition API - ${props.title}`)
    }
}
</script>
<style lang="">
    
</style>