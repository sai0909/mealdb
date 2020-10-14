<template>
  <v-container class="random-meal">
    <div class="random-meal-wrapper" v-if="!isLoading">
      <Meal :mealData ="getMeal"/>
    </div>
  <Loader v-else />
   
  </v-container>
 
</template>
<style>
.random-meal{
  height: 100%;
}
</style>
<script>
// @ is an alias to /src
import { mapActions, mapGetters } from 'vuex'
import Meal from "@/components/Meal.vue";
import Loader from "@/components/Loader.vue"

export default {
  name: "Home",
  components: {
    Meal,
    Loader
  },
  data: () => ({
    isLoading: false,
  }),
  computed: {
    ...mapGetters("Randommeal", ["getMeal"]),
  },
  methods: {
    ...mapActions("Randommeal", ["fetchRandomMeal"]),
  },
  async mounted() {
    if (this.getMeal.length === 0) {
      this.isLoading = true;
      await this.fetchRandomMeal();
      this.isLoading = false;
    }
  },
};
</script>
