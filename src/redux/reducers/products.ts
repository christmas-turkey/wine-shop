import { Action } from './../actions/products';
import { IProduct } from './../../types/types';
import ProductsActionTypes from '../action-types/products';


type ProductsState = IProduct[]

export default (state: ProductsState = [], action: Action): ProductsState => {
    switch (action.type) {
        case ProductsActionTypes.SET_PRODUCTS:
            return action.payload
        
        case ProductsActionTypes.SET_LIKDED:
            const updatedItems = state.map(item => {
                if (item.id === action.payload) {
                    item.liked = !item.liked
                }

                return item
            })

            return updatedItems
    
        default:
            return state
    }
}