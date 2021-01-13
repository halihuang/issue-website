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
                <v-toolbar-title>History</v-toolbar-title>
                <v-spacer/>
            </v-toolbar>
            <v-card-text class="headline bold pa-6" >
                <v-row>
                    In order to understand the magnitude of the danger our nation is in, we can take a look at past disasters in US History to compare the impact of COVID-19 to
                    these infamous pieces of our history.
                    <v-img  class="my-3" src="../assets/history1.png"/>
                    Coronavirus deaths already count more towards US Deaths than 3 wars combined: World War 1, The Vietname War, and the Korean War. That number is ridiculous. Each
                    death is another family member, friend, loved one.<br/><br/> This virus has been allowed to take the lives of more than 3 wars combined, and everything in our power needs to done 
                    to ensure Coronavirus doesn't take any more lives. 
                    <br/><br/>Take action.
                </v-row>
            </v-card-text>
            <v-footer class="pa-2"></v-footer>
        </v-card>
    </v-container>
</template>

<script>
export default {
    name: 'History'
}
</script>