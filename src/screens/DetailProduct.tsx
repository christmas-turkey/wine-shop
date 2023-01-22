import { View, Image, Dimensions, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import {SwiperFlatList} from 'react-native-swiper-flatlist'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native'
import {Rating} from 'react-native-ratings'

import { SIZES, COLORS, FONTS, SHADOWS } from '../constants/theme'
import { TypeRootParamList } from '../navigation/types'
import useActions from '../hooks/useActions'
import {Button, RoundTextButton} from '../components/ui/Button'
import Text from '../components/ui/Text'
import Icon from '../components/ui/Icon'



const DetailProduct = () => {
  
  const {params} = useRoute<RouteProp<TypeRootParamList, 'DetailProduct'>>()
  const product = params.product

  const {navigate, goBack} = useNavigation()

  const [count, setCount] = useState(1)
  const actions = useActions()

  const onPlus = () => setCount(count + 1)
  const onMinus = () => count > 1 && setCount(count - 1)

  const addToCart = () => {
    actions.cart.addItem(product, count)
    navigate('Cart')
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.headerContainer}>
        <Button onPress={goBack}>
          <Icon name='arrow-back' size={32} />
        </Button>
        <Button>
          <Icon name='qr-code' size={32} />
        </Button>
      </View>
      <SwiperFlatList
        showPagination
        paginationStyle={{
          position: 'relative',
          marginVertical: SIZES.extraLarge
        }}
        paginationStyleItem={{
          width: 12,
          height: 12
        }}
        paginationActiveColor={COLORS.primary}
        data={new Array(3).fill(null).map(() => product.image)}
        renderItem={({item, index}) => (
          <Image
            resizeMode='contain' 
            style={{width: Dimensions.get('window').width, height: 400}} 
            key={index} 
            source={{uri: item}} />
        )}/>
      <View style={styles.infoContainer}>
          <View style={styles.infoRow}>
            <Text style={styles.name}>
              {product.name}
            </Text>
            <Rating imageSize={20} />
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.secondaryText}>
              {product.size}
            </Text>
            <Text style={styles.secondaryText}>
              ({product.views} views)
            </Text>
          </View>
          <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: SIZES.extraLarge
          }}>
            <Text style={styles.price}>
              ${product.price}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.countContainer}>
                <Button onPress={onMinus}>
                  <Text style={styles.countBtnText}>-</Text>
                </Button>
                <Text style={styles.countValue}>
                  {count}
                </Text>
                <Button onPress={onPlus}>
                  <Text style={styles.countBtnText}>+</Text>
                </Button>
              </View>
              <RoundTextButton onPress={addToCart} title='Cart' />
            </View>
          </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  headerContainer: {
    paddingHorizontal: SIZES.large, 
    flexDirection: 'row',
    paddingTop: 70,
    justifyContent: 'space-between'
  },

  infoContainer: {
    backgroundColor: COLORS.white,
    padding: SIZES.large,
    borderTopLeftRadius: SIZES.extraLarge,
    borderTopRightRadius: SIZES.extraLarge
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  name: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.extraLarge,
  },

  price: {
    fontFamily: FONTS.semiBold,
    fontSize: 30
  },

  secondaryText: {
    fontFamily: FONTS.medium,
    color: COLORS.gray
  },

  countContainer: {
    borderRadius: SIZES.extraLarge,
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: SIZES.small,
    overflow: 'hidden'
  },

  countValue: {
    fontFamily: FONTS.semiBold,
    lineHeight: 40,
    width: 35,
    backgroundColor: COLORS.lightgray,
    textAlign: 'center'
  },

  countBtnText: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.large,
    lineHeight: 40,
    backgroundColor: COLORS.lightgray,
    paddingHorizontal: SIZES.large
  },
})

export default DetailProduct