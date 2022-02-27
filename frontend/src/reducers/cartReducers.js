import { CART_ADD_ITEM} from '../constants/cartConstant'

export const cartReducer = (state = { cartItmes: []}, action ) => {
    switch(action.type ) {
        case CART_ADD_ITEM:
            const item = action.payload

            const existsItem = state.cartItmes.find(x => x.product === item.product)

            if(existsItem){
                return {
                    ...state,
                    cartItmes: state.cartItmes.map(x => x.product === existsItem.product ? item : x)
                }
            } else {
                return {
                    ...state,
                    cartItmes: [...state.cartItmes, item]
                }
            }
        default:
            return state 
    }
}