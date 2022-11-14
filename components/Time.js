import {getTime} from "../utils/DateTime.js"
import {View, Text, StyleSheet} from "react-native"
import {colors} from "../constants/colors.js"
import {useState, useEffect} from "react"
import Loading from "../components/loading.js"
import {getTimezone} from "../services/getTimezone.js"
import moment from "moment"

const [,,ampm, weekday] = getTime(new Date)

const Time = () => {
  const [timezone, setTimezone] = useState(null)
  const [liveTime, setLiveTime] = useState(new Date())
  
  const refreshLiveTime = () => {
    setLiveTime(new Date())
  }
  
  useEffect(() => {
    const getData = async () => {
      const res = await getTimezone()
      setTimezone(res.time_zone.name)
    }
    getData()
    const timerId = setInterval(refreshLiveTime, 1000)
    return function cleanup() {
      clearInterval(timerId)
    }
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.weekday}>{weekday}</Text>
        {timezone && <Text style={styles.timezone}>{timezone}</Text>}
      </View>
      <Text style={styles.time}>{moment(liveTime, "HH:mm:ss").format("hh:mm:ss")} <Text style={styles.ampm}>{ampm}</Text></Text>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingTop: 10
  },
  time: {
    color: colors.orange,
    fontSize: 85,
    textAlign: "center",
    fontFamily: "marsdenBold",
    letterSpacing: 1
  },
  ampm: {
    color: colors.orange,
    fontSize: 22,
    fontFamily: "marsdenBold"
  },
  weekday: {
    color: colors.orange,
    fontWeight: "bold",
    fontSize: 16,
    fontFamily: "marsdenBold",
    letterSpacing: 1.5,
  },
  top: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  timezone: {
    color: colors.orange,
    fontSize: 15,
    letterSpacing: .5
  }
})

export default Time