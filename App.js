import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import * as Location from "expo-location"
import WeatherInfo from './components/WeatherInfo';

const Weather_api_key = "0bff0698379b96eaf19daa753dfa7f0d"
const base_weather_uri = `https://api.openweathermap.org/data/2.5/weather?`


export default function App() {
  const [errorMessage, setErrorMessage] = useState(null)

  const [currentWeather, setCurrentWeather] = useState(null)

  const [unitsSystem, setUnitsSystem] = useState('metric')

  useEffect(() => {
    load()
  }, [])
  async function load(){
    try{
      let { status } = await Location.requestPermissionsAsync()
      if (status !== "granted"){
        setErrorMessage("Access to location is needed ")
        return
      }
      const location = await Location.getCurrentPositionAsync()

      

      const {latitude, longitude} = location.coords

      const weather_uri = `${base_weather_uri}lat=${latitude}&lon=${longitude}&units=${unitsSystem}&appid=${Weather_api_key}`

      const response = await fetch(weather_uri)

      const result = await response.json()

      if(response.ok) {
        setCurrentWeather(result)
      } else {
        setErrorMessage(result.message)
      }

      alert(`Latttude : ${latitude}, Longitude : ${longitude}`)
    } catch(error) {

      setErrorMessage(error.message)
    }
  }

  if(currentWeather) {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <View style={styles.mainview}>
         <WeatherInfo currentWeather={currentWeather}/>
        </View>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>() 
        <Text>{errorMessage}</Text>
        <StatusBar style="auto" />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    textColor: '#fff',
    fontSize: '10em',
  },
  main: {
    fontSize: '30px',
  },
  mainview: {
    justifyContent: 'center',
    flex: 1,
  }
});
