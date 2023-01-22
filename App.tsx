import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import {Provider} from 'react-redux'

import products from './src/constants/products';
import { setProducts } from './src/redux/action-creators/products';
import {RootNavigation} from './src/navigation/Navigation';
import store from './src/redux/store';


export default function App() {

  const [loaded] = useFonts({
    PoppinsLight: require('./assets/fonts/Poppins-Light.ttf'),
    PoppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    PoppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    PoppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    PoppinsBold: require('./assets/fonts/Poppins-Bold.ttf')
  })

  useEffect(() => {
    store.dispatch(setProducts(products))
  }, [])

  if (!loaded) return null

  return (
    <Provider store={store}>
      <RootNavigation />
    </Provider>
  )
}
