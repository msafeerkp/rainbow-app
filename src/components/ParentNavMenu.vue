<template>
  <v-card>
    <v-navigation-drawer
      :value="drawerValue"
      app
    >
      <v-list-item>
        <!-- <v-list-item-avatar>
          <v-img src="https://cdn.vuetifyjs.com/images/lists/1.jpg"></v-img>
        </v-list-item-avatar> -->
        <v-list-item-content>
          <v-list-item-title class="title">
            Muhammed Safeer K P
          </v-list-item-title>
          <v-list-item-subtitle>
            Contact No: 8105246239
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item v-for="(item,index) in menuItems" :key="index"
          link :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{item.icon}}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{item.label}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn block color="blue lighten-4">Logout</v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
import COMMON_CONSTANTS from '../constants/CommonConstant.js';

export default {
    //props:{ value: { type: Boolean } },
    data: () => {
       return {
           //drawerValue: false
           menuItems : COMMON_CONSTANTS.COMMON.PARENT_LEFT_MENU
       }
    },
    computed : {
      drawerValue(){
        return this.$store.state.NavigationMenuStore.drawerVisibility;
      }
    },
    watch: {
        // value : function(){
        //     this.drawerValue = this.value;
        // },
        // drawerValue : function() {
        //    this.$emit('input', this.drawerValue);
        // }
    }
}
</script>
