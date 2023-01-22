import { IProduct } from './../../types/types';
import {Action} from '../actions/cart'
import CartActionTypes from '../action-types/cart';


interface CartState {
    totalPrice: number,
    items: {
        [itemId: string]: {
            count: number,
            item: IProduct
        }
    }
}

const getTotalPrice = (items: CartState['items']): number => {
    const totalPrice = (
        Object.values(items)
          .reduce((total, {item, count}) => total + item.price * count, 0).toFixed(2)
        )
    
    return +totalPrice
}

const removeItem = (id: string, items: CartState['items']) => {
    const updatedItems: CartState['items'] = {}

    Object.values(items).forEach((obj) => {
        if (obj.item.id !== id) {
            updatedItems[obj.item.id] = obj
        }
    })

    return updatedItems
}

const initialState = {
    totalPrice: 0,
    items: {}
}

export default (state: CartState = initialState, action: Action): CartState => {
    switch (action.type) {
        case CartActionTypes.ADD_ITEM: {
            const updatedItems: CartState['items'] = {
                ...state.items,
                [action.payload.item.id]: {
                    count: action.payload.count,
                    item: action.payload.item
                }
            }

            return {
                totalPrice: getTotalPrice(updatedItems),
                items: updatedItems
            }
        }
        
        case CartActionTypes.PLUST_ITEM: {
            const updatedItems = state.items

            updatedItems[action.payload].count++

            return {
                totalPrice: getTotalPrice(updatedItems),
                items: updatedItems
            }
        }

        case CartActionTypes.MINUS_ITEM: {
            let updatedItems: CartState['items'] = state.items

            if (updatedItems[action.payload].count > 1 ) {
                updatedItems[action.payload].count--
            } else {
                updatedItems = removeItem(action.payload, state.items)
            }

            return {
                totalPrice: getTotalPrice(updatedItems),
                items: updatedItems
            }
        }

        case CartActionTypes.REMOVE_ITEM: {
            const updatedItems = removeItem(action.payload, state.items)

            return {
                totalPrice: getTotalPrice(updatedItems),
                items: updatedItems
            }
        }
    
        default:
            return state
    }
}