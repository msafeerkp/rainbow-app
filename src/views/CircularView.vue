<template>
    <v-row align="start" justify="center">
        <v-col >
            <v-expansion-panels
            multiple
            :value="PanelCollapseStatus"
            >
                <v-expansion-panel
                v-for="(circularDate,index) in circularDateList"
                :key="index" 
                @change="panelChange(circularDate)"
                >
                <v-expansion-panel-header class="white--text amber lighten-2">{{format(circularDate, 'EEEE, d MMMM, yyyy')}}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <v-row align="start" justify="center" v-for="(circular,chIndex) in circularData(circularDate)" :key="chIndex">
                        <v-col >
                            <v-card >
                                <v-card-text>
                                    <div class="headline mb-2">{{circular.subject}}</div>
                                    {{circular.message}}
                                </v-card-text>
                            </v-card>
                        </v-col>
                    </v-row>

                </v-expansion-panel-content>
                </v-expansion-panel>
            </v-expansion-panels>
        </v-col>
    </v-row>
    
</template>
<script>
import { format } from 'date-fns';
import _ from 'lodash';

export default {

    data(){
        return {
            PanelCollapseStatus : []
        }
    },
    computed:{
        circularDateList(){
            let circularDateList = [];
            let dateList = this.$store.state.CircularStore.circularDateList;
            this.PanelCollapseStatus.fill(1);
            this.PanelCollapseStatus[0] = 0;
            dateList.forEach(item => {
                let dateInString = item.split("-");
                circularDateList.push(new Date(dateInString[0], dateInString[1]-1, dateInString[2]));
                //circularDateList.push(format(new Date(dateInString[0], dateInString[1]-1, dateInString[2]), 'EEEE, d MMMM, yyyy'));
            })
            return circularDateList;
        }
    },
    methods: {
        format :format,
        circularData(circularDate){
            let DateFormatted = format(circularDate, 'yyyy-MM-dd');
            let circularData = _.find(this.$store.state.CircularStore.circularData, {date:DateFormatted});
            if(circularData){
                return circularData.circularDataList;
            }
            else{
                return [];
            }
           // this.$store.state.CircularStore.circularData
        },
        expandValue(length){
            let expandArr = new Array(length);
            expandArr.fill(1);
            expandArr[0] = 0;
            return expandArr;
        },
        panelChange(circularDate){
            let DateFormatted = format(circularDate, 'yyyy-MM-dd');
            console.log(circularDate);
            this.$store.dispatch('getCircularByDate', DateFormatted);
            //console.log(this.PanelCollapseStatus)
        }
    },
    mounted(){
       this.$store.dispatch('initialize');
    }
    
}
</script>
