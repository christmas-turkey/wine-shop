import { StyleSheet, View } from 'react-native'
import React, {useEffect, useMemo, useState} from 'react'

import { COLORS, FONTS, SIZES } from '../constants/theme'
import ProductItem from './ProductItem'
import { IProduct } from '../types/types'
import SearchProducts from './SearchProducts'
import Text from './ui/Text'
import Empty from './ui/Empty'


interface ProductsListProps {
  products: IProduct[]
}

const ProductsList: React.FC<ProductsListProps> = ({products}) => {
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>(products)

  useEffect(() => {
    setFilteredProducts(products)
  }, [products])

  const onSearch = (value: string) => {
    if (!value) {
      return setFilteredProducts(products)
    }

    const filtered = products.filter(item => item.name.toLocaleLowerCase().includes(value.toLocaleLowerCase()))
    
    setFilteredProducts(filtered)

  }

  return (
    <View style={{flex: 1}}>
      <SearchProducts onSearch={onSearch} />
      <View style={{paddingHorizontal: SIZES.large, flex: 1}}>
        {filteredProducts.length ? (
          <>
            <Text style={styles.title}>
              Found {filteredProducts.length} results
            </Text>
            <View style={styles.productsContainer}>
              {filteredProducts.map(item => <ProductItem key={item.id} product={item} />)}
            </View>
          </>
        ): (
          <Empty title='No items found' />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.extraLarge,
    marginBottom: SIZES.medium
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  }
})

export default ProductsList