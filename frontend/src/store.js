import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { 
    productListReducers, 
    productDetailsReducers 
} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'


//redux set up

const reducer = combineReducers({
    productList: productListReducers,
    productDetails: productDetailsReducers,
    cart: cartReducer
})

const cartItemsFromStorage = localStorage.getItem('cartItmes') ? JSON.parse(localStorage.getItem('cartItmes')) : []

const inithialState = {
    cart: { cartItmes: cartItemsFromStorage}
}
const middlewere = [thunk]

const store = createStore(
    reducer,
    inithialState,
    composeWithDevTools(
        applyMiddleware( ...middlewere )
    ))

export default store