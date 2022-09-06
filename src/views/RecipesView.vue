<template lang="html">
    <div class="recipe-container">
        <router-link class="recipe"
            :to="{name: 'recipeDetail', params:{slug: item.slug}}"
            v-for="(item, index) in recipes"
            :key="index">
            {{ item.name }}
        </router-link>
    </div>
</template>
<script>
export default {
    data() {
        return {
            recipes: [
                {
                    id: 1,
                    name: "Fried Rice",
                    slug: "fried-rice"
                },
                {
                    id: 2,
                    name: "Spaghetti",
                    slug: "spag"
                },
                {
                    id: 3,
                    name: "Chicken and Chips",
                    slug: "chicken-and-chips"
                },
            ]
        }
    }
}
</script>
<style lang="css">
.recipe-container {
    display: flex;
    gap: 10px;
    flex-direction: column;
}

.recipe {
    background-color: red;
    color: white;
    padding: 20px;
}
</style>
