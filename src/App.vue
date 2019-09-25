<template>
  <v-app id="inspire">

    <!-- <NavigationMenu v-model="drawer"></NavigationMenu> -->
    <!-- <NavigationMenu></NavigationMenu> -->
    <ParentNavMenu v-if="bottomNav == 'parent'"></ParentNavMenu>
    <StudentNavMenu v-if="bottomNav == 'student'"></StudentNavMenu>
    <ApplicationBar></ApplicationBar>

    <v-content>
      <v-container
        class="overflow-y-auto"
      >
        
        <router-view/>
      </v-container>
    </v-content>
    
    <BottomBar></BottomBar>
  </v-app>
</template>

<script>
  import StudentNavMenu from './components/StudentNavMenu';
  import BottomBar from './components/BottomBar';
  import ApplicationBar from './components/ApplicationBar';
  import ParentNavMenu from './components/ParentNavMenu'

  export default {
    props: {
      source: String,
    },
    components:{
      StudentNavMenu,
      BottomBar,
      ApplicationBar,
      ParentNavMenu
    },
    data: () => ({
      //bottomNav : null
    }),
    computed: {
      bottomNav(){
        return this.$store.state.BottomBarStore.bottomBarValue;
      }
    }
  }
</script>
