<template>
  <v-container class="text-center" fluid>
    <v-spacer/>
    <v-row class="mt-md-16 justify-center">
      <v-spacer/>
      <router-link to="/statistics"><v-col><h1 class="text-md-h3" style="color:white">THE STATISTICS</h1><v-icon class="mt-5" color="white" size="72px">mdi-chart-bar</v-icon></v-col></router-link>
      <v-spacer/>
      <router-link to="/history"><v-col><h1 class="text-md-h3"  style="color:white">THE HISTORY</h1><v-icon class="mt-5" color="white" size="72px">mdi-book-open-page-variant</v-icon></v-col></router-link>
      <v-spacer/>
    </v-row>
    <v-row class="">
      <v-col>
        <h1 class="text-md-h2">THE PANDEMIC</h1>
         <v-card
          class="mx-auto mt-12"
          dark
          max-width="600"
        >
        <v-card-text class="headline bold pt-6">
          "COVID-19 has completely changed how we live as society. People have lost their jobs, livelihoods, lives. We've become unable to see 
          our friends in person and interact like normal. Gatherings with loved ones have become relegated to screens. Despite the US's influence and affluence, 
          we failed in containing this pandemic as well as we should have. To restore our society to its former state, action needs to be taken."
        </v-card-text>
         </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    name: 'Categories',
  }
</script>
