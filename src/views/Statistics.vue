<template>
    <v-container fluid>
        <v-card
            class="mx-auto mt-12"
            dark
            raised
            height="80vh"
            style="overflow-y:scroll"
            max-width="600"
            >
             <v-toolbar card>
                <router-link to="/"><v-icon>mdi-keyboard-backspace</v-icon></router-link>
                <v-spacer/>
                <v-toolbar-title>Statistics</v-toolbar-title>
                <v-spacer/>
            </v-toolbar>
            <v-card-text class="headline bold pa-6" >
                <v-row>
                    The COVID-19 statistics in the US are horrifying. The number of cases have only grown day by day and its impact on our economy is only growing.
                    The statistics behind its impact can help you get a better understanding of Coronavirus' devasting impact on the US.
                    <v-img  class="my-3" src="../assets/stat1.png"/>
                    This graph on daily cases up to December 17 2020 show how the US has lead other first world countries in cases: a scary indicator of how poorly it has handled the pandemic.
                    <v-img  class="my-3" src="../assets/stat2.png"/>
                    Recent data by the NY Times shows the situation isn't exactly getting better. The number of the dead and the infected is only continuing to rise. With
                    how cases and deaths are spiraling out of control, the damage to the economy has not been pretty either.
                    <v-img  class="my-3" src="../assets/stat3.png"/>
                    Compared to previous recessions, COVID-19 has devasted the American economy like never before. The GDP has changed dramatically as a result of COVID. For the people to keep their livelihoods, COVID-19 must be
                    stopped soon. COVID-19–related job losses wiped out 113 straight months of job growth.
                    <v-img  class="my-3" src="../assets/stat4.png"/>
                    Unemployment figures have skyrocketed all around the globe and in the US particularly so. In many ways, COVID-19 has destroyed our nation as evident by the statistics. 
                    More efforts need to be taken to curb the pandemic. The nation is in grave danger.
                </v-row>
            </v-card-text>
            <v-footer class="pa-2"></v-footer>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'Statistics'
}
</script>