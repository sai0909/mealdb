<template>
  <v-app>
    <v-app-bar app dark flat>
      <div class="d-flex align-center">
        <v-icon large color="green darken-2">
          mdi-food
        </v-icon>
      </div>

      <v-spacer></v-spacer>

      <v-btn
        aria-label="search"
        icon
        color="white"
        @click="setupdateOverlay"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
     <Search />
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import Search from '@/components/Search.vue'
export default {
  name: "App",

  components: {
    Search
  },

  data: () => ({
    //
  }),
   computed: {
    ...mapGetters('Search', ['getOpenOverlay']),
  },
  methods: {
    setupdateOverlay(){
      console.log('overlay',!this.getOpenOverlay);
      this.$store.dispatch('Search/updateOverlay',!this.getOpenOverlay)
    }
    
  },
};
</script>
