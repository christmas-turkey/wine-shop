import React from 'react'
import { TextStyle } from 'react-native'
import BaseIcon from 'react-native-vector-icons/Ionicons'

import { COLORS } from '../../constants/theme'


interface IconProps {
  name: string,
  color?: string,
  size?: number,
  style?: TextStyle
}

const Icon: React.FC<IconProps> = ({name, style, color=COLORS.primary, size=24}) => {
  return <BaseIcon name={name} color={color} size={size} style={style} />
}

export default Icon