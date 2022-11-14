import {View, StyleSheet, Text, Image, Alert} from "react-native"
import {colors} from "../constants/colors.js"
import {useEffect, useState} from "react"
import {getWeatherData, getAirQuality} from "../services/getWeatherData.js"
import * as Location from 'expo-location'
import Loading from "../components/loading.js"
import {getTime} from "../utils/DateTime.js"
import { FontAwesome5 } from '@expo/vector-icons'
import moment from "moment"

const Weather = () => {
  const [data, setData] = useState(null)
  const [img, setImg] = useState()
  const [airQuality, setAurQuality] = useState(null)
  let [airQualityTxt, setAurQualityTxt] = useState(null)
  const [,,,weekday] = getTime(new Date)
  const [liveTime, setLiveTime] = useState(new Date())
  
  const refreshLiveTime = () => {
    setLiveTime(new Date())
  }
  
  useEffect(() => {
    (async () => {
      let {status} = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        return
      }
      let location = await Location.getCurrentPositionAsync({})
      const res = await getWeatherData(location.coords.latitude, location.coords.longitude)
      const res2 = await getAirQuality(location.coords.latitude, location.coords.longitude)
      setData(res)
      setAurQuality(res2.list[0].main.aqi)
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
      const timerId = setInterval(refreshLiveTime, 1000)
      return function cleanup() {
        clearInterval(timerId)
     }
    })()
  }, [])
  
  if (data === null && img === undefined) {
    return <Loading title="Fetching weather data..." />
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <View style={styles.locationContainer}>
          <Text style={styles.locationIcon}>
            <FontAwesome5 name="location-arrow" size={16} color={colors.cloud} />
          </Text>
          <Text style={styles.location}>{`${data.name} - ${data.sys.country}`}</Text>
        </View>
        <Image resizeMode="cover" source={img} style={styles.img} />
        <Text style={styles.main}>{data.weather[0].main}</Text>
      </View>
      <View style={styles.info1}>
        <Text style={styles.degree}>{`${data?.main?.feels_like}°`} 
          <View>
            <Text style={styles.dateTime}>{moment(liveTime, "HH:mm:ss").format("hh:mm")}</Text>
            <Text style={styles.weekday}>{weekday}</Text>
          </View>
        </Text>
      </View>
      <View style={styles.info2}>
        <View style={styles.humidityContainer}>
          <Image resizeMode="cover" style={styles.humidityIcon} source={require("../assets/weather/humidity.png")} />
          <Text style={styles.humidityTxt}>{data.main.humidity}%</Text>
          <Text style={styles.humidityTxt2}>HUMIDITY</Text>
        </View>
        <View style={styles.windContainer}>
           <Image resizeMode="cover" style={styles.windIcon} source={require("../assets/weather/airQuality.png")} />
           <Text style={styles.windTxt}>{airQuality} - {airQuality === 1 ? "GOOD" : airQuality === 2 ? "FAIR" : airQuality === 3 ? "MODERATE" : airQuality === 4 ? "POOR" : airQuality === 5 ? "VERY POOR" : "n/a"}</Text>
           <Text style={styles.windTxt2}>AIR QUALITY</Text>
        </View>
      </View>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    paddingHorizontal: 15,
    paddingBottom: 20,
    paddingTop: 5
  },
  img: {
    width: 70,
    height: 70,
    aspectRatio: 1
  },
  imgContainer: {
    alignItems: "center",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly"
  },
  degree: {
    color: colors.skyblue,
    fontFamily: "marsdenBold",
    textAlign: "center",
    fontSize: 100,
  },
  info1: {
    alignItems: "center",
    width: "100%",
    justifyContent: "center",
    marginVertical: 6
  },
  dateTime: {
    color: colors.skyblue,
    fontSize: 17,
    fontFamily: "marsdenBold",
    letterSpacing: 1.5
  },
  weekday: {
    color: colors.skyblue,
    fontSize: 17,
    letterSpacing: 1.5,
    fontFamily: "marsdenBold"
  },
  info2: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  humidityContainer: {
    alignItems: "center"
  },
  windContainer: {
    alignItems: "center"
  },
  humidityIcon: {
    width: 300,
    height: 30,
    aspectRatio: 1,
    marginBottom: 5
  },
  humidityTxt: {
    color: colors.skyblue,
    fontFamily: "marsdenBold",
    fontSize: 27,
  },
  windIcon: {
    width: 30,
    height: 30,
    aspectRatio: 1,
    marginBottom: 5
  },
  windTxt: {
    color: colors.skyblue,
    fontFamily: "marsdenBold",
    fontSize: 27,
  },
  humidityTxt2: {
    color: colors.skyblue,
    fontFamily: "marsdenBold",
    letterSpacing: 1
  },
  windTxt2: {
    color: colors.skyblue,
    fontFamily: "marsdenBold",
    letterSpacing: 1
  },
  location: {
    color: colors.cloud,
    fontFamily: "marsdenBold",
    letterSpacing: 1,
    fontSize: 16,
  },
  main: {
    color: colors.cloud,
    fontFamily: "marsdenBold",
    letterSpacing: 1,
    fontSize: 16
  },
  locationIcon: {
    marginRight: 10
  },
  locationContainer: {
    flexDirection: "row",
  }
})

export default Weather