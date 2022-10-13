<template>

    <MainHeader />
    <slot></slot>
    <Footer />

</template>
<script>
import MainHeader from '../headers/MainHeader.vue';
import Footer from '../footers/Footer.vue';
export default {
    components: { MainHeader, Footer }
}
</script>
<style lang="">
    
</style>