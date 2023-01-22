import { TouchableOpacity, TextStyle, TouchableOpacityProps } from 'react-native'
import React from 'react'


import { SIZES, COLORS, SHADOWS, FONTS } from '../../constants/theme'
import Text from './Text'


interface RoundTextButtonProps extends TouchableOpacityProps {
    title: string,
    titleStyle?: TextStyle
}

export const RoundTextButton: React.FC<RoundTextButtonProps> = ({title, titleStyle, ...props}) => {

  return (
    <TouchableOpacity 
        activeOpacity={0.8}
        {...props} 
        style={[{
          borderRadius: SIZES.extraLarge,
          paddingHorizontal: SIZES.extraLarge,
          paddingVertical: SIZES.font,
          backgroundColor: COLORS.primary,
          alignItems: 'center',
          justifyContent: 'center',
          ...SHADOWS.dark,
          ...props
        }, props.style]}>

      <Text style={[{
        color: COLORS.white,
        fontSize: SIZES.medium,
        fontFamily: FONTS.semiBold
      }, titleStyle]}>
        {title}
      </Text>

    </TouchableOpacity>
  )
}

export const Button: React.FC<TouchableOpacityProps> = ({children, ...props}) => {

  return (
    <TouchableOpacity activeOpacity={0.8} {...props}>
      {children}
    </TouchableOpacity>
  )
}