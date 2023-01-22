import { SetProductsAction, SetLikedAction } from './../actions/products';
import { IProduct } from './../../types/types';
import ProductsActionTypes from '../action-types/products';


export const setProducts = (payload: IProduct[]): SetProductsAction => {
    return {
        type: ProductsActionTypes.SET_PRODUCTS,
        payload
    }
}

export const setLiked = (payload: string): SetLikedAction => {
    return {
        type: ProductsActionTypes.SET_LIKDED,
        payload
    }
}