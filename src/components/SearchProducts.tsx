import { View, StyleSheet } from 'react-native'
import React from 'react'

import { COLORS, SIZES } from '../constants/theme'
import Icon from './ui/Icon'
import TextInput from './ui/TextInput'
import {Button} from './ui/Button'


interface SearchProductsProps {
  onSearch: (value: string) => void
}

const SearchProducts: React.FC<SearchProductsProps> = ({onSearch}) => {

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Icon style={{marginRight: SIZES.base}} name='search' size={24} color={COLORS.gray} />
        <TextInput 
            placeholder='Search'
            onChangeText={onSearch}
            style={{flex: 1}} />
      </View>
      <Button style={styles.filterBtn}>
        <Icon name='md-filter' size={24} />
      </Button>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.large, 
    paddingVertical: SIZES.extraLarge, 
    flexDirection: 'row'
  },
  inputContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    flex: 1,
    padding: SIZES.font,
    borderRadius: SIZES.base
  },
  filterBtn: {
    backgroundColor: COLORS.white,
    padding: SIZES.font,
    marginLeft: SIZES.font,
    borderRadius: SIZES.base
  }
})

export default SearchProducts