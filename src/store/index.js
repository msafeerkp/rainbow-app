import Vue from 'vue';
import Vuex from 'vuex';
import NavigationMenuStore from './NavigationMenuStore.js'
import BottomBarStore from './BottomBarStore.js'
import CircularStore from './CircularStore';

Vue.use(Vuex);
export default new Vuex.Store({
    modules: {
        NavigationMenuStore,
        BottomBarStore,
        CircularStore
    }
});