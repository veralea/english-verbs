import {ADD_TO_ALL_FIELDS, 
    ADD_TO_TRUE_FIELDS,
    DELETE_FROM_TRUE_FIELDS,
    DELETE_FROM_ALL_FIELDS,
    CLEAR_SCORE
} from './types'

const initialState = {
    allFields: [],
    trueFields: []
}

export const scoreReducer = (state=initialState,action) =>{
    switch(action.type){
        case ADD_TO_ALL_FIELDS: 
            return {...state, allFields: state.allFields.indexOf(action.payload) > -1 ? state.allFields:state.allFields.concat([action.payload])}
        case ADD_TO_TRUE_FIELDS: 
            return {...state, trueFields: state.trueFields.indexOf(action.payload) > -1 ? state.trueFields : state.trueFields.concat([action.payload])}        
        case DELETE_FROM_TRUE_FIELDS:
            let arr = state.trueFields;
            console.log(arr);
            let ind = arr.indexOf(action.payload);
            if(ind > -1){
                arr.splice(ind,1);
            }
            return {...state, trueFields: arr}
        case DELETE_FROM_ALL_FIELDS:
            let arr1 = state.allFields;
            let ind1 = arr1.indexOf(action.payload);
            if(ind1 > -1){
                arr1.splice(ind1,1);
            }
            return {...state, allFields: arr1}            
        case CLEAR_SCORE:
            return {...state, allFields: [], trueFields: []}    
        default : return state
    }
    
}