import {getTime} from "../utils/DateTime.js"
import {View, Text, StyleSheet} from "react-native"
import {colors} from "../constants/colors.js"

const [hours, minutes, ampm, weekday] = getTime(new Date)

const Time = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.weekday}>{weekday}</Text>
      <Text style={styles.time}>{`${hours}:${minutes}`}<Text style={styles.ampm}>{ampm}</Text></Text>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    position: "relative"
  },
  time: {
    color: colors.orange,
    fontSize: 150,
    textAlign: "center",
    fontFamily: "marsdSenemiBold",
    marginTop: 10,
  },
  ampm: {
    color: colors.orange,
    fontSize: 35,
    fontWeight: "bold",
    fontFamily: "marsdSenemiBold"
  },
  weekday: {
    color: colors.orange,
    fontWeight: "bold",
    fontSize: 16,
    position: "absolute",
    left: "13.5%",
    fontFamily: "marsdSenemiBold",
  }
})

export default Time