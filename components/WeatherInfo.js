import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { colors } from '../utils/index'

const {PRIMARY_COLOR, SECONDARY_COLOR } = colors

export default function WeatherInfo({currentWeather}) {
  const {
    main: {temp},
    weather: [details],
    name,
} = currentWeather  
const {icon, main, description} = details
const iconUrl = `https://openweathermap.org/img/wn/${icon}@4x.png`
  return (
    <View style={styles.weatherInfo}>
    <Text style={styles.textSize}>City: {name}</Text>
    <Image style={styles.weatherIcon} source={{ uri: iconUrl }}/>
      <Text style={styles.textPrimary}>{temp}</Text>
      <Text style={styles.weatherDescription} >Description: {description}</Text>
      <Text style={styles.textSecondary}>Weather: {main}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    weatherInfo: {
        alignItems: 'center',
    },
    weatherIcon: {
        width: 100,
        height: 100
    },
    textSize: {
        fontSize: 25,
    },
    weatherDescription: {
        fontSize: 25,
        textTransform: 'capitalize',
    },
    textPrimary: {
        fontSize: 40,
        color: PRIMARY_COLOR,
    },
    textSecondary: {
      fontSize: 20,
      color: SECONDARY_COLOR,
      fontWeight: 500,
      marginTop: 10,
    }})