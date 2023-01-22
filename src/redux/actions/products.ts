import { IProduct } from './../../types/types';
import ProductsActionTypes from "../action-types/products";


export interface SetProductsAction {
    type: ProductsActionTypes.SET_PRODUCTS,
    payload: IProduct[]
}

export interface SetLikedAction {
    type: ProductsActionTypes.SET_LIKDED,
    payload: string
}

export type Action = SetProductsAction | SetLikedAction

