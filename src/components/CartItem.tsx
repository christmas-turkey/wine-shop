import { View, Image, StyleSheet, } from 'react-native'
import React, { useMemo } from 'react'

import { IProduct } from '../types/types'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants/theme'
import useActions from '../hooks/useActions'
import Text from './ui/Text'
import Icon from './ui/Icon'
import {Button} from './ui/Button'


interface CartItemProps {
    count: number,
    item: IProduct
}

const CartItem: React.FC<CartItemProps> = ({item, count}) => {
  
  const actions = useActions()

  const onPlus = () => {
    actions.cart.plusItem(item.id)
  }

  const onMinus = () => {
    actions.cart.minusItem(item.id)
  }

  const onRemove = () => {
    actions.cart.removeItem(item.id)
  }
  
  return useMemo(() => (
    <View style={styles.container}>
      <View style={styles.image}>
        <Image
            resizeMode='contain'
            style={{
                width: 80,
                height: 80
            }} 
            source={{uri: item.image}} />
      </View>
      <View style={{flex: 1}}>

        <Button
            onPress={onRemove}
            style={{
                position: 'absolute',
                right: 0,
                zIndex: 1
            }}>
            <Icon name="close" size={24} />
        </Button>

        <Text style={styles.name}>
            {item.name}
        </Text>
        <Text style={styles.size}>
            {item.size}
        </Text>
        <View style={styles.bottom}>
            <Text style={styles.price}>
                ${item.price}
            </Text>
            <View style={styles.countContainer}>
                <Button
                    onPress={onMinus} 
                    style={styles.countBtn}>
                    
                    <Text 
                        style={styles.countBtnText}>
                        -
                    </Text>
                </Button>
                <Text style={styles.countValue}>
                    {count}
                </Text>
                <Button
                    onPress={onPlus}
                    style={[styles.countBtn, {backgroundColor: COLORS.primary}]}>
                    
                    <Text 
                        style={[styles.countBtnText, {color: COLORS.white}]}>
                        +
                    </Text>
                </Button>
            </View>
        </View>
      </View>
    </View>
  ), [count])
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: SIZES.extraLarge,
    },

    image: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.large,
        marginRight: SIZES.large,
        justifyContent: 'center',
        position: 'relative',
        ...SHADOWS.dark
    },

    name: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.large
    },

    size: {
        fontFamily: FONTS.medium,
        color: COLORS.gray
    },

    bottom: {
        marginTop: SIZES.medium,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    price: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.extraLarge
    },

    countContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    countBtn: {
        width: 35,
        height: 35,
        borderRadius: 17.5,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: COLORS.primary,
        justifyContent: 'center',
        alignItems: 'center'
    },

    countBtnText: {
        color: COLORS.primary,
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.large
    },

    countValue: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.extraLarge,
        width: 45,
        textAlign: 'center'
    }
})

export default CartItem