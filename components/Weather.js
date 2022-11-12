import {View, StyleSheet, Text, Image} from "react-native"
import {colors} from "../constants/colors.js"
import {useEffect, useState} from "react"
import {getWeatherData} from "../services/getWeatherData.js"
import * as Location from 'expo-location'
import Loading from "../components/loading.js"

const Weather = () => {
  const [data, setData] = useState(null)
  const [img, setImg] = useState()
  
  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied')
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      const res = await getWeatherData(7.8731, 80.7718)
      setData(res)
      if (data?.weather[0]?.description === "clear sky") {
        setImg(require("../assets/weather/clearSky.png"))
      } else if (res?.weather[0]?.description === "few clouds") {
        setImg(require("../assets/weather/fewClouds.png"))
      } else if (res?.weather[0]?.description === "scattered clouds") {
        setImg(require("../assets/weather/scatteredClouds.png"))
      } else if (res?.weather[0]?.description === "broken clouds") {
        setImg(require("../assets/weather/brokenClouds.png"))
      } else if (res?.weather[0]?.description === "shower rain") {
        setImg(require("../assets/weather/rain.png"))
      } else if (res?.weather[0]?.description === "rain") {
        setImg(require("../assets/weather/rain.png"))
      } else if (res?.weather[0]?.description === "thunderstorm") {
        setImg(require("../assets/weather/thunderstorm.png"))
      } else if (res?.weather[0]?.description === "snow") {
        setImg(require("../assets/weather/snow.png"))
      } else if (res?.weather[0]?.description === "mist") {
        setImg(require("../assets/weather/mist.png"))
      } else if (res?.weather[0]?.description === "overcast clouds") {
        setImg(require("../assets/weather/scatteredClouds.png"))
      }
      else {
        setImg(require("../assets/weather/weather.png"))
      }
    })()
  }, [])
  if (data === null && img === undefined) {
    return <Loading title="Fetching weather data..." />
  }
  
  return (
    <View style={styles.container}>
      <Image resizeMode="cover" source={img} style={styles.img} />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1
  },
  img: {
    width: 50,
    height: 50,
    aspectRatio: 1
  }
})

export default Weather