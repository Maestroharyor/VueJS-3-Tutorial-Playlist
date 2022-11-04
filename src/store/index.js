import { categoryData } from "../data";
import { createStore } from "vuex";

export default createStore({
  state: {
    recipeOfTheDay: null,
    categories: categoryData,
    selectedCategory:
      categoryData[Math.floor(Math.random() * categoryData.length)],
    featuredRecipes: [],
    currentRecipesList: [],
  },
  getters: {
    getCategoryDetails(state) {
      return state.categories;
    },
    getSelectedCategory(state) {
      return state.selectedCategory.strCategory;
    },
    getCurrentCategory(state, catName) {
      return state.categories.filter(
        (category) =>
          category.strCategory.toLowerCase() === catName.toLowerCase()
      )[0];
    },
  },
  mutations: {
    setSelectedCategory(state, strCategory) {
      const newCategory = state.categories.filter(
        (category) =>
          category.strCategory.toLowerCase() === strCategory.toLowerCase()
      );
      state.selectedCategory = newCategory[0];
    },
    setRecipeOfTheDay(state, recipe) {
      state.recipeOfTheDay = recipe;
    },
    setFeaturedRecipes(state, recipes) {
      state.featuredRecipes = recipes;
    },
    setCurrentRecipesList(state, recipes) {
      state.currentRecipesList = recipes;
    },
  },
  actions: {},
});
