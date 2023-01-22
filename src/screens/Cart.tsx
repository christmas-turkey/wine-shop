import { ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'

import { COLORS, FONTS, SIZES } from '../constants/theme'
import useTypedSelector from '../hooks/useTypedSelector'
import CartItem from '../components/CartItem'
import {RoundTextButton} from '../components/ui/Button'
import Icon from '../components/ui/Icon'
import Text from '../components/ui/Text'
import TextInput from '../components/ui/TextInput'
import Empty from '../components/ui/Empty'


const Cart = () => {

  const {cartItems, totalPrice} = useTypedSelector(state => ({
    cartItems: Object.values(state.cart.items),
    totalPrice: state.cart.totalPrice
  }))

  const shippingPrice = 5.99

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
      <View style={styles.header}> 
        <Text style={styles.headerTitle}>
          Shopping bag
        </Text>
        <View style={styles.headerImg}> 
          <Icon name='cart' size={32} />
          <Text style={styles.headerImgBadge}>{cartItems.length}</Text>
        </View>
      </View>
        {cartItems.length ? (
          <>
            <View style={styles.cartItemsContainer}>
              {cartItems.map(({item, count}) => (
                <CartItem key={item.id} item={item} count={count} />
              ))}
            </View>
            <View style={styles.promocodeInput}>
              <TextInput 
                style={{flex: 1}} 
                placeholder='Promocode' />
              <RoundTextButton title='Apply' />
            </View>
            <View style={styles.info}>
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>
                  Subtotal
                </Text>
                <View style={styles.infoRow}>
                  <Text style={styles.infoPrice}>
                    ${totalPrice}
                  </Text>
                  <Text style={styles.infoCurrency}>
                    USD
                  </Text>
                </View>
              </View>
              <View style={styles.infoSeparator} />
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>
                  Shipping
                </Text>
                <View style={styles.infoRow}>
                  <Text style={styles.infoPrice}>
                    ${shippingPrice}
                  </Text>
                  <Text style={styles.infoCurrency}>
                    USD
                  </Text>
                </View>
              </View>
              <View style={styles.infoSeparator} />
              <View style={styles.infoRow}>
                <Text style={styles.infoTitle}>
                  Total
                </Text>
                <View style={styles.infoRow}>
                  <Text>
                    ({cartItems.length} items)
                  </Text>
                  <Text style={styles.infoPrice}>
                    ${(totalPrice + shippingPrice).toFixed(2)}
                  </Text>
                  <Text style={styles.infoCurrency}>
                    USD
                  </Text>
                </View>
              </View>
            </View>
            <RoundTextButton style={styles.proceedBtn} title='Proceed to checkout' />
          </>
        ) : (
          <Empty title='No items in cart' />
        )}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: SIZES.large,
    paddingTop: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  headerTitle: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.extraLarge
  },

  headerImg: {
    width: 60,
    height: 60,
    backgroundColor: COLORS.white,
    borderRadius: SIZES.large,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
  },

  headerImgBadge: {
    position: 'absolute',
    top: -5,
    right: -5,
    paddingHorizontal: SIZES.base,
    paddingVertical: 2,
    borderRadius: SIZES.base,
    backgroundColor: COLORS.primary,
    color: COLORS.white
  },

  cartItemsContainer: {
    marginTop: SIZES.extraLarge,
    paddingHorizontal: SIZES.large
  },

  promocodeInput: {
    marginHorizontal: SIZES.large,
    borderRadius: SIZES.medium,
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.large,
    paddingVertical: SIZES.small,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: SIZES.extraLarge
  },

  info: {
    marginVertical: 30,
    paddingHorizontal: SIZES.large
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  infoSeparator: {
    height: 2,
    marginVertical: SIZES.small,
    backgroundColor: COLORS.white
  },

  infoTitle: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.large,
  },

  infoPrice: {
    fontFamily: FONTS.semiBold,
    fontSize: SIZES.extraLarge,
    marginHorizontal: SIZES.base
  },

  infoCurrency: {
    fontFamily: FONTS.medium,
    fontSize: SIZES.large,
    color: COLORS.gray
  },

  proceedBtn: {
    marginVertical: SIZES.medium,
    marginHorizontal: SIZES.large
  }
})

export default Cart