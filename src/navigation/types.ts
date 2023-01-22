import { IProduct } from './../types/types';

export type TypeRootParamList = {
    Home: undefined,
    Liked: undefined,
    Cart: undefined,
    DetailProduct: {
        product: IProduct
    }
}