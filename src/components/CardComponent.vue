<template lang="html">
    <div class="card">
        <div class="card-heard">
            <h1>{{ title }}</h1>
        </div>
        <div>
            <p>{{ description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: ["title", "description"]
}
</script>
<style lang="css">
.card {
    max-width: 400px;
    margin: 20px auto;
    border: 1px solid #ccc;
    padding: 20px;
    border-radius: 6px;
}
</style>