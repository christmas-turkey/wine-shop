import { View, Image, StyleSheet } from 'react-native'
import React, { useMemo } from 'react'
import { useNavigation } from '@react-navigation/native'

import { COLORS, FONTS, SHADOWS, SIZES } from '../constants/theme'
import { IProduct } from '../types/types'
import useActions from '../hooks/useActions'
import {Button} from './ui/Button'
import Text from './ui/Text'
import Icon from './ui/Icon'


interface ProductItemProps {
    product: IProduct
}

const ProductItem: React.FC<ProductItemProps> = (({product}) => {

  const {navigate} = useNavigation()
  const actions = useActions()

  const onLike = () => {
    actions.products.setLiked(product.id)
  }

  return useMemo(() => (
    <Button 
        onPress={() => navigate('DetailProduct', {product})} 
        style={styles.container}>
    
    <Image 
        style={styles.img} 
        resizeMode='contain'
        source={{uri: product.image}} />
        <Text 
            numberOfLines={1}
            style={styles.name}>
            {product.name}
        </Text>
        <Text 
            numberOfLines={1}
            style={styles.description}>
            {product.description}
        </Text>
        <View style={styles.bottom}>
            <Text style={styles.price}>
                ${product.price}
            </Text>
            <Button
                onPress={onLike}
                style={[{
                    backgroundColor: product.liked ? COLORS.primary : COLORS.white,
                    borderWidth: product.liked ? 0 : 2
                }, styles.like]}>
                <Icon name='heart' color={product.liked ? COLORS.white : COLORS.primary} size={20} />
            </Button>
        </View>
    </Button>
  ), [product.liked])

})


const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.white,
        borderRadius: SIZES.medium,
        marginBottom: SIZES.medium,
        padding: SIZES.font,
        width: 170,
        ...SHADOWS.dark
    },

    img: {
        width: '100%', 
        height: 180, 
        marginBottom: SIZES.medium
    },

    name: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.medium,
        lineHeight: 20
    },
    description: {
        fontFamily: FONTS.medium,
        color: COLORS.gray,
        fontSize: SIZES.small,
        lineHeight: 16
    },

    bottom: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SIZES.small
    },
    price: {
        fontFamily: FONTS.semiBold,
        fontSize: SIZES.large
    },
    like: {
        borderRadius: 17.5,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderStyle: 'solid',
        borderColor: COLORS.primary,
        ...SHADOWS.dark
    }
})

export default ProductItem