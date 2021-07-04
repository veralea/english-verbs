import {SET_VERB, 
    SET_VOICE, 
    SET_PERSON, 
    SET_TIME, 
    SET_IS_TIME_CLEAR, 
    ADD_TO_ALL_FIELDS, 
    ADD_TO_TRUE_FIELDS,
    DELETE_FROM_TRUE_FIELDS,
    DELETE_FROM_ALL_FIELDS,
    CLEAR_SCORE
} from './types'

export function setVerb(verb){
    return {
        type: SET_VERB,
        payload: verb
    }
}

export function setVoice(voice){
    return {
        type: SET_VOICE,
        payload: voice
    }
}

export function setPerson(person){
    return {
        type: SET_PERSON,
        payload: person
    }
}

export function setTime(sec,min,hour){
    return {
        type: SET_TIME,
        payload: {
            sec: sec,
            min: min,
            hour: hour
        }
    }
}

export function setIsTimeClear (isTimeClear){
    return{
        type: SET_IS_TIME_CLEAR,
        payload: isTimeClear
    }

}

export function addToAllFields (fildNum){
    return{
        type: ADD_TO_ALL_FIELDS,
        payload: fildNum
    }

}

export function addToTrueFields (fildNum){
    return{
        type: ADD_TO_TRUE_FIELDS,
        payload: fildNum
    }

}

export function deleteFromTrueFields (fildNum){
    return{
        type: DELETE_FROM_TRUE_FIELDS,
        payload: fildNum
    }
}

export function deleteFromAllFields (fildNum){
    return{
        type: DELETE_FROM_ALL_FIELDS,
        payload: fildNum
    }
}

export function clearScore (){
    return{
        type: CLEAR_SCORE,
        payload:{
            allFields: [],
            trueFields: []
        }
    }
}