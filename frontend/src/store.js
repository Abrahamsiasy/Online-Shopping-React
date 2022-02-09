import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
    productListReducers, 
    productDetailsReducers 
} from './reducers/productReducers'


//redux set up

const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers
})
const inithialState = {}
const middlewere = [thunk]

const store = createStore(
    reducer,
    inithialState,
    composeWithDevTools(
        applyMiddleware( ...middlewere )
    ))

export default store