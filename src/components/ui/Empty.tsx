import { View } from 'react-native'
import React from 'react'

import Text from './Text'
import Icon from './Icon'
import { COLORS, FONTS, SIZES } from '../../constants/theme'


interface EmptyProps {
  title: string
}

const Empty: React.FC<EmptyProps> = ({title}) => {
  return (
    <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
      <Icon name='file-tray-outline' size={80} color={COLORS.gray} />
      <Text style={{
        color: COLORS.gray,
        fontSize: SIZES.medium,
        fontFamily: FONTS.medium,
        marginTop: SIZES.base
      }}>
        {title}
      </Text>
    </View>
  )
}

export default Empty