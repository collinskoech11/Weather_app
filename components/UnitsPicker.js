import { View, StyleSheet, Platform } from 'react-native'
import React from 'react'
import {Picker} from '@react-native-community/picker'
import { colors } from '../utils/index'

const {BORDER_COLOR} = colors

export default function UnitsPicker({unitsSystem, setUnitsSystem}) {

  return (
    <View style={styles.unitsSystem}>
      <Picker 
        style={styles.dropdown} 
        selectedValue={unitsSystem} 
        onValueChange={(item) => setUnitsSystem(item)} 
        mode="dropdown"
        itemStyle={{ fontSize: '12px' }}
      >
        <Picker.Item label="°F" value="imperial"/>
        <Picker.Item label="°C" value="metric"/>
      </Picker>
    </View>
  )
}
const styles = StyleSheet.create({
  unitsSystem: {
      position: 'absolute',
      ...Platform.select({
        ios: {
          top: -20,
        },
        android: {
          top: 10,
        }
      }),
      top:40,
      left:30,
      height: 75,
      width: 100,
      borderRadius: 20,
      padding:10,
      borderColor:'red',
      fontSize: 30,
  },
  dropdown: {
    height: 75,
      width: 100,
      borderRadius: 20,
      padding:10,
      borderColor:'red',
      fontSize: 30,
  }
})