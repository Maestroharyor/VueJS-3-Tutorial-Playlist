<template lang="html">
    <div>
        <p>This is {{ title }}</p>
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "ParentComponentVue",
    data() {
        return {
            title: "Parent Component"
        }
    }
}
</script>
<style lang="">
    
</style>