export default {
    state : {
        bottomBarValue : 'parent'
    },
    mutations: {
        changeBottomBarValue(state, currentValue){
            state.bottomBarValue = currentValue;
        }
    }
}