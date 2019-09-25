<template>
  <v-bottom-navigation
    v-model="bottomNav"
    color="light-blue accent-4"
    height="65"
    app
  >
    <v-row justify="center" align="center">
      <v-col cols="12" justify="center" align="center">
            <v-btn value="parent" height="50">
              <span>Parent Zone</span>
              <v-icon>mdi-human-child</v-icon>
            </v-btn>
            <v-btn value="student" height="50">
                <span>Student Zone</span>
                <v-icon>mdi-human-child</v-icon>
            </v-btn>
      </v-col>
       <!-- <v-col cols="6" justify="center" align="center">
            
      </v-col> -->
    </v-row>
    

    

  </v-bottom-navigation>
</template>

<script>
  export default {
    data () {
      return {
        bottomNav: 'parent',
      }
    },
    watch: {
        bottomNav : function() {
           this.$store.commit('changeBottomBarValue',this.bottomNav);
        }
    }
  }
</script>