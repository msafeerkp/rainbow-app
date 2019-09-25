<template>
    <v-app-bar
      app
      color="amber"
      dark
    >
      <v-app-bar-nav-icon @click.stop="changeDrawerState()"></v-app-bar-nav-icon>
      <v-toolbar-title>St. Francis School</v-toolbar-title>
    </v-app-bar>
</template>
<script>
export default {
    data(){
        return{
            drawer: false
        }
    },
    methods:{
      changeDrawerState(){
        this.drawer = this.drawer == false? true: false;
        this.$store.commit('changeDrawerVisibility', this.drawer);
      }
    }
}
</script>
