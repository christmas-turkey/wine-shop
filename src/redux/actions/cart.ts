import { IProduct } from './../../types/types';
import CartActionTypes from "../action-types/cart";

export interface AddItem {
    type: CartActionTypes.ADD_ITEM,
    payload: {
        count: number,
        item: IProduct
    }
}

export interface PlusItem {
    type: CartActionTypes.PLUST_ITEM,
    payload: string
}

export interface MinusItem {
    type: CartActionTypes.MINUS_ITEM,
    payload: string
}

export interface RemoveItem {
    type: CartActionTypes.REMOVE_ITEM,
    payload: string
}

export type Action = AddItem | PlusItem | MinusItem | RemoveItem