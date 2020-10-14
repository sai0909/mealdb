<template>
  <v-container>
    <v-card v-if="mealData" class="recipe-meals mt-7">
      <div class="d-md-flex">
        <div class="w-md-50">
          <div class="recipe-img-wrapper fill-height">
            <v-img
              class="recipe-img fill-height"
              lazy-src="@/assets/recipe-placeholder.png"
              :src="mealData.strMealThumb"
              alt
            >
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular
                    indeterminate
                    color="blue-grey darken-4"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <div class="white--text pl-4 recipe-info">
              <h2 class="recipe-title">
                {{ mealData.strMeal }}
              </h2>
              <h4 class="recipe-category caption">
                {{ mealData.strCategory }}
              </h4>
              <v-btn class="youtube-ref" fab dark small color="red" :href="mealData.strYoutube" target="_blank">
                <v-icon dark>
                  mdi-youtube
                </v-icon>
              </v-btn>
            </div>
          </div>
        </div>
        <div class="w-md-50">
          <v-tabs grow slider-color="grey">
            <v-tab ripple>
              Ingredients
            </v-tab>
            <v-tab ripple>
              Preparations
            </v-tab>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <div class="recipe-ingredients">
                    <h2 class="title">Ingredients</h2>
                    <ul>
                      <li v-for="it in ingredients" :key="it.id">
                        {{ it.item }} {{ it.mes }}
                      </li>
                    </ul>
                  </div>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item>
              <v-card flat>
                <v-card-text>
                  <h4 class="recipe-origin subtitle-1">
                    Origin: {{ mealData.strArea }}
                  </h4>

                  <p class="recipe-instructions">
                    {{ mealData.strInstructions }}
                  </p></v-card-text
                >
              </v-card>
            </v-tab-item>
          </v-tabs>
        </div>
      </div>
    </v-card>

    <!-- <button class="recipe-cta" @click="fetchRecipe">Get another Recipe</button> -->
  </v-container>
</template>
<style>
/*Media Queries */
@media (min-width: 960px) {
  .w-md-50 {
    width: 50%;
  }
}

.recipe-img-wrapper {
  overflow: hidden;
  position: relative;
}
.recipe-info {
  position: absolute;
  bottom: 0px;
  height: 100px;
  border-bottom-left-radius: 5px;
  background: -moz-linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgb(0, 0, 0, 0.65) 38%,
    rgba(0, 0, 0, 0.75) 100%,
    rgba(0, 0, 0, 0.75) 101%
  );
  background: -webkit-linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgb(0, 0, 0, 0.65) 38%,
    rgba(0, 0, 0, 0.75) 100%,
    rgba(0, 0, 0, 0.75) 101%
  );
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgb(0, 0, 0, 0.65) 38%,
    rgba(0, 0, 0, 0.75) 100%,
    rgba(0, 0, 0, 0.75) 101%
  );
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#a6000000',GradientType=0 );
  width: 100%;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  transition-delay: 1.2s;
  -webkit-transition-delay: 0.7s;
  -o-transition-delay: 0.7s;
  transition-delay: 0.7s;
}

.recipe-img {
  opacity: 0.76;
  -webkit-transition: all 0.5s;
  -o-transition: all 0.5s;
  transition: all 0.5s;
  transition: all 1s;
}

.recipe-img:hover {
  transform: scale(1.5);
}

.recipe-ingredients,
.recipe-origin,
.recipe-instructions {
  padding: 15px;
  text-align: justify;
}

.youtube-ref{
    position: absolute !important;
    bottom: 50px;
    right: 30px;
}
</style>
<script>
export default {
  name: "Meal",
  props: ["mealData"],
  mounted() {
    console.log(this.mealData);
  },
  computed: {
    ingredients() {
      // Creating copy of the object
      const { mealData } = this;

      let ings = [];
      if (mealData) {
        console.log(mealData);
        let a = 1;
        for (a; a < 21; a++) {
          if (mealData[`strIngredient${a}`]) {
            ings.push({
              id: a,
              item: mealData[`strIngredient${a}`],
              mes: mealData[`strMeasure${a}`],
            });
          }
        }
      }
      return ings;
    },
  },
};
</script>
