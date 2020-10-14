<template>
  <v-dialog
    v-model="getOpenOverlay"
    fullscreen
    scrollable
    hide-overlay
    transition="dialog-bottom-transition"
  >
    <v-card class="search-overlay d-flex flex-column">
      <v-container>
        <v-btn
          class="ml-auto"
          icon
          aria-label="close"
          color="white"
          right
          absolute
          @click="closeOverlay"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
        <v-text-field
          v-model="query"
          @input="searchMeal"
          label="Search your favorite meal"
          class="pt-6 mt-4"
        ></v-text-field>

        <Meal v-show="Object.keys(meal).length >0" :mealData="meal" />
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters } from "vuex";
import { getSearchMeals } from "@/api/search.api";
import Meal from "./Meal.vue";

export default {
  name: "Search",
  components: {
    Meal,
  },
  data: () => ({
    query: "",
    meal: [],
  }),
  computed: {
    ...mapGetters("Search", ["getOpenOverlay"]),
  },
  methods: {
    closeOverlay() {
      this.$store.dispatch("Search/updateOverlay", false);
      this.meal = '';
      this.query = ''
    },
    //...mapMutations('Search', ['setOpenOverlay']),
    async searchMeal() {
      getSearchMeals(this.query).then((res) => (this.meal = res.data.meals[0]));
      console.log("search called", this.meal);
    },
  },
  mounted() {
    console.log("from search vu", this.getOpenOverlay);
    console.log(this.meal);
  },
};
</script>

<style lang="scss">
.search {
  .v-overlay__content {
    width: 100%;
    padding: 1rem;
  }
}
.search-overlay {
  width: 1140px;
  margin: 0 auto;
  max-width: 100%;
}
</style>
