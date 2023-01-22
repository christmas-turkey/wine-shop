import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import * as ProductsActionCreators from '../redux/action-creators/products'
import * as CartActionCreators from '../redux/action-creators/cart'


export default () => {
    const dispatch = useDispatch()

    return {
        products: bindActionCreators(ProductsActionCreators, dispatch),
        cart: bindActionCreators(CartActionCreators, dispatch)
    }
}