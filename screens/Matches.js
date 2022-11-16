import {View, Text, StyleSheet, Pressable, FlatList, Image} from "react-native"
import {colors} from "../constants/colors.js"
import {getMatches} from "../services/getMatches.js"
import Loading from "../components/loading.js"
import {useEffect, useState, useRef} from "react"
import {timeConvert} from "../utils/DateTime.js"
import Toast from 'react-native-root-toast'
import { Ionicons } from '@expo/vector-icons';
import * as Notifications from "expo-notifications"
import dayjs from "dayjs"
import moment from "moment"

const Matches = ({navigation}) => {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    const getData = async () => {
      const res = await getMatches()
      setData(res.data)
    }
    getData()
  }, [])
  
  if (!data || data === null || data === undefined) {
    return <Loading title="Fetching matches please wait..." />
  }
  
  const triggerNotification = async (date, title, body) => {
    const matchDateTime = dayjs(moment(date).format("YYYY/MM/DD HH"))
    const todayDateTime = dayjs(moment(new Date()).format("YYYY/MM/DD HH"))
    const matchTime = matchDateTime.diff(todayDateTime) / 1000
    Toast.show('You will be notified before 10 minutes when the match starts', {duration: Toast.durations.SHORT})
    await Notifications.scheduleNotificationAsync({
      content: {
        title: title,
        body: body,
        data: {
          data: "goes here"
        },
      },
      trigger: {
        seconds: matchTime
      },
    })
  }
  
  const renderData = ({item}) => {
    return (
      <View style={styles.matchItem}>
        <View style={{alignItems: "center", justifyContent: "center"}}>
          <Image source={{uri: item.away_flag}} style={styles.away_flag} resizeMode="cover" />
          <Text style={{color: colors.khakhi, marginTop: 5}}>{item.away_team_en}</Text>
        </View>
        <View style={styles.dateTimeContainer}>
          <Pressable style={styles.notIcon} onPress={() => triggerNotification(item.local_date, "Match is starting soon, get ready!", `${item.away_team_en} vs ${item.home_team_en} starts at ${timeConvert(item.local_date.slice(-5))}`)}>
            <Ionicons name="notifications" size={20} color={colors.khakhi} />
          </Pressable>
          <Text style={styles.time}>
            <Text>------</Text>
            {timeConvert(item.local_date.slice(-5))}
            <Text>------</Text>
          </Text>
          <Text style={styles.date}>{item.local_date.substr(0, 10).replace("/", "-").replace("/", "-")}</Text>
        </View>
        <View style={{alignItems: "center", justifyContent: "center"}}>
          <Image source={{uri: item.home_flag}} style={styles.home_flag} resizeMode="cover" />
          <Text style={{color: colors.khakhi, marginTop: 5}}>{item.home_team_en}</Text>
        </View>
      </View>
      )
  }
  
  return (
    <View style={styles.container}>
      <FlatList showsVerticalScrollIndicator={false} data={data} keyExtractor={item => item._id} renderItem={renderData} />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  matchItem: {
    backgroundColor: "#363636",
    width: "100%",
    marginVertical: 10,
    padding: 12,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly"
  },
  home_flag: {
    height: 70,
    width: 70,
    aspectRatio: 1,
    borderRadius: 50
  },
  away_flag: {
    height: 70,
    width: 70,
    aspectRatio: 1,
    borderRadius: 50
  },
  dateTimeContainer: {
    alignItems: "center",
  },
  time: {
    color: colors.khakhi,
    fontFamily: "marsdenBold",
    letterSpacing: 1,
    fontSize: 24.5
  },
  date: {
    color: colors.khakhi,
  },
  notIcon: {
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "flex-start"
  }
})

export default Matches