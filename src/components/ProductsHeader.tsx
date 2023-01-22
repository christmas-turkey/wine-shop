import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

import { FONTS,  SIZES } from '../constants/theme'
import Text from './ui/Text'


const ProductsHeader = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.extraLarge
        }}>
          Welcome,
        </Text>
        <Text style={{
          lineHeight: 26,
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.extraLarge
        }}>
          Sviatoslav
        </Text>
      </View>
      <Image
        resizeMode='contain'
        style={styles.headerImg} 
        source={require('../../assets/images/person.jpg')} />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    paddingTop: 70,
    paddingHorizontal: SIZES.large, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerImg: {
    width: 50,
    height: 50,
    borderRadius: SIZES.base
  }
})

export default ProductsHeader