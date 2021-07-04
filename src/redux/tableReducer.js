import {SET_PERSON, SET_VERB, SET_VOICE} from './types'
const initialState = {
    verb: -1,
    voice: "ACTIVE",
    person: "I"
}

export const tableReducer = (state=initialState,action) =>{
    switch(action.type){
        case SET_VERB: 
            return {...state, verb: action.payload}
        case SET_VOICE: 
            return {...state, voice: action.payload}
        case SET_PERSON: 
            return {...state, person: action.payload}            
        default : return state
    }
    
}