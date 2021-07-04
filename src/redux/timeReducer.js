import {SET_TIME,SET_IS_TIME_CLEAR} from './types'
const initialState = {
    sec: 0,
    min: 0,
    hour: 0
}

export const timeReducer = (state=initialState,action) =>{
    switch(action.type){
        case SET_TIME: 
            return {...state, 
                sec: (action.payload.sec > 58 ? 0 : action.payload.sec + 1), 
                min: (action.payload.sec > 58 ? 
                            action.payload.min > 58 ? 0  : action.payload.min + 1 : action.payload.min), 
                hour: (action.payload.min > 58 && action.payload.sec > 58 ? 
                            action.payload.hour + 1 : action.payload.hour)}
        case SET_IS_TIME_CLEAR:
            return {...state, isTimeClear: action.payload}   
        default : return state
    }
    
}