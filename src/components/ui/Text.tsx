import { Text as BaseText, TextProps } from 'react-native'
import React from 'react'

import { COLORS, FONTS } from '../../constants/theme'


const Text: React.FC<TextProps> = ({children, ...props}) => {
  return (
    <BaseText style={[{
       fontFamily: FONTS.regular,
       color: COLORS.primary 
    }, props.style]} {...props}>
      {children}
    </BaseText>
  )
}

export default Text