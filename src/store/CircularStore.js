import axios from 'axios';
import _ from 'lodash';
import { format } from 'date-fns';

export default{
    state : {
        circularDateList:[],
        circularData:[]
    },
    mutations: {
        updateCircularDateList(state, value){
            state.circularDateList = value;
        },
        updateCircularData(state, value){
            let availableCircularData = _.find(state.circularData, {date:value.date});
            if(!availableCircularData){
                availableCircularData = {
                    date:value.date,
                    circularDataList: value.data
                };
                state.circularData.push(availableCircularData);
            }
            availableCircularData.circularDataList = value.data;
        }
    },
    actions: {
        getCircularDateList(){
            var self = this;
            return new Promise(function(resolve, reject) {
                axios.get('http://localhost:8888/circular/distinct/ciriculat-date')
                .then(response => {
                    console.log(response.data);
                    self.commit('updateCircularDateList',response.data);
                    resolve('success');
                })
                .catch(e => {
                    console.log(e);
                });
            });
           
        },
        getCircularByDate(type, date){
            var self = this;
            axios.get('http://localhost:8888/circular/list?date='+date)
            .then(response =>{
                console.log(response.data);
                self.commit('updateCircularData',{
                    date:date,
                    data:response.data
                })
            })
            .catch(e=>{
                console.log(e);
            });
        },
        initialize(){
            var self = this;
            self.dispatch('getCircularDateList')
            .then((succes) => {
                console.log(succes);
                let dateInString = self.state.CircularStore.circularDateList[0].split("-");
                let circularDate = new Date(dateInString[0], dateInString[1]-1, dateInString[2])
                let DateFormatted = format(circularDate, 'yyyy-MM-dd');
                self.dispatch('getCircularByDate',DateFormatted);
            });
            
        }
    }
}