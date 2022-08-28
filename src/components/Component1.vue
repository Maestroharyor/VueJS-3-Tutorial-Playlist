<template lang="html">
    <div>
        <p :class="$style.text">{{ title }}</p>
    </div>
</template>
<script>
export default {
    name: "Component1Vue",
    data() {
        return {
            title: "Component 1",
            color: "white"
        }
    }
}
</script>
<style  module>
.text {
    color: v-bind(color);
    font-size: 40px;
}
</style>