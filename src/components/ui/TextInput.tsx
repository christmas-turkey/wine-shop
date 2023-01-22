import { TextInput as BaseTextInput, TextInputProps } from 'react-native'
import React from 'react'

import { COLORS, FONTS } from '../../constants/theme'


const TextInput: React.FC<TextInputProps> = (props) => {
  return (
    <BaseTextInput style={{
        fontFamily: FONTS.medium,
        color: COLORS.primary
      }} 
      {...props} />
  )
}

export default TextInput