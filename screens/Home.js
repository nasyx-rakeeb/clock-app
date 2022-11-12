import {View, Text, StyleSheet} from "react-native"
import Time from "../components/Time.js"
import Weather from "../components/Weather.js"
const Home = () => {
  return (
    <View style={styles.container}>
      <Time />
      <Weather />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default Home