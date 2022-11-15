import {View, Text, StyleSheet, ScrollView} from "react-native"
import Time from "../components/Time.js"
import Weather from "../components/Weather.js"
import Calendar from "../components/Calendar.js"
import {colors} from "../constants/colors.js"

const Home = () => {
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
    <View style={styles.top}>
      <Time />
    </View>
    <View style={styles.middle}>
      <Weather />
    </View>
    <View style={styles.bottom}>
      <Calendar />
    </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    margin: 15
  },
  top: {
    backgroundColor: colors.mainLight,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    flex: 1
  },
  middle: {
    backgroundColor: colors.mainLight,
    borderRadius: 15,
    flex: 1,
    marginVertical: 15
  },
  bottom: {
    flex: 1,
    backgroundColor: colors.mainLight,
    borderRadius: 15
  }
})

export default Home