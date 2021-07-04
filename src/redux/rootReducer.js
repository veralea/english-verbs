import {combineReducers} from 'redux'
import {tableReducer} from './tableReducer'
import {timeReducer} from './timeReducer'
import {scoreReducer} from './scoreReducer'

export const rootReducer = combineReducers({
    customization : tableReducer,
    time: timeReducer,
    score: scoreReducer
})