import { ScrollView } from 'react-native'
import React from 'react'

import useTypedSelector from '../hooks/useTypedSelector'
import ProductsHeader from '../components/ProductsHeader'
import ProductsList from '../components/ProductsList'


const Liked = () => {

  const products = useTypedSelector(state => state.products).filter(item => item.liked)

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
      <ProductsHeader />
      <ProductsList products={products} />
    </ScrollView>
  )
}

export default Liked