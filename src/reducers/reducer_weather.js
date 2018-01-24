
 import {FETCH_WEATHER} from '../actions/index';

export default function(state=[], action){
//          // console.log('Action recieved', action);
         switch(action.type){
                 case FETCH_WEATHER :
//                               //we concat to create a new array to put the old data, to avoid mutation
                               return [action.payload.data, ...state]; //Using ES6 REST operator;  Outputs [city, city,city] and not [city, [city[city]] 
          }
return state;
 }
