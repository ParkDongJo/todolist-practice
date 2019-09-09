import { combineReducers } from 'redux'

import { todoReducer as todo } from './todo'
import { StoreState } from '../interfaces'

const rootReducer = combineReducers<StoreState>({
    todo
});

export default rootReducer