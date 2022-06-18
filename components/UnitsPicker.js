import { View, Text } from 'react-native'
import React from 'react'
import {Picker} from '@react-native-community/picker'

export default function UnitsPicker({unitsSystem, setUnitsSystem}) {
  return (
    <View>
      <Picker selectedValue={unitsSystem}>
        <Picker.Item label="° F" value="imperial"/>
        <Picker.Item label="° C" value="metric"/>
      </Picker>
    </View>
  )
}