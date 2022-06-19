import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import {colors} from '../utils/index' 
import {FontAwesome5, MaterialCommunityIcons} from '@expo/vector-icons'

const {PRIMARY_COLOR, SECONDARY_COLOR, BORDER_COLOR} = colors

export default function WeatherDetails({currentWeather}) {
    const {
        main: {feels_like, humidity },
    } = currentWeather
  return (
    <View style={styles.weatherDetails}>
        <View style={styles.weatherDetailsRow}>
            <View style={styles.weatherDetailsBox}>
                <View style={styles.weatherDetailsRow}>
                    <FontAwesome5 name="temperature-low" size={25} color={PRIMARY_COLOR}/>
                    <View>
                        <Text>Feels Like : </Text>
                        <Text>{feels_like}</Text>
                    </View>
                </View>
            </View>
            <View style={styles.weatherDetailsBox}>
                <Text>{humidity}</Text>
            </View>
        </View>  
    </View>
  )
}

const styles = StyleSheet.create({
    weatherDetails: {
        marginTop: 'auto',
        borderWidth: 1,
        borderColor: BORDER_COLOR,
        borderRadius: 10,
        margin: 15,
    },
    weatherDetailsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    weatherDetailsBox: {
        flex: 1,
        padding: 20,
        borderRightWidth:1,
        borderRightColor: BORDER_COLOR
    },
    weatherDetailsItems: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
    }
})