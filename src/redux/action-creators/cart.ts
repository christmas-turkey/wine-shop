import { PlusItem, MinusItem, RemoveItem } from './../actions/cart';
import CartActionTypes from '../action-types/cart';
import { AddItem } from '../actions/cart';
import { IProduct } from './../../types/types';


export const addItem = (item: IProduct, count: number): AddItem => {
    return {
        type: CartActionTypes.ADD_ITEM,
        payload: {item, count}
    }
}

export const plusItem = (itemId: string): PlusItem => {
    return {
        type: CartActionTypes.PLUST_ITEM,
        payload: itemId
    }
}

export const minusItem = (itemId: string): MinusItem => {
    return {
        type: CartActionTypes.MINUS_ITEM,
        payload: itemId
    }
}

export const removeItem = (itemId: string): RemoveItem => {
    return {
        type: CartActionTypes.REMOVE_ITEM,
        payload: itemId
    }
}