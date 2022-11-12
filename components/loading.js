import {View, StyleSheet, Text, ActivityIndicator} from "react-native"
import {colors} from "../constants/colors.js"

const Loading = ({title}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.orange} />
      <Text style={{color: colors.orange, textAlign: "center"}}>{title}</Text>
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: colors.main
  }
})

export default Loading