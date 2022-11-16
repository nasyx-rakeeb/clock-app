import {View, StyleSheet, Text} from "react-native"
import {colors} from "../constants/colors.js"
import {Calendar as CalendarPicker} from 'react-native-calendars';
import {getLunarDate} from "../services/getLunarDate.js"
import {useEffect, useState} from "react"
import Loading from "./loading.js"
 
const Calendar = () => {
  const [lunarDate, setLunarDate] = useState(null)
  
  useEffect(() => {
    const getData = async () => {
      const res = await getLunarDate()
      setLunarDate({
        day: res.lunar_day,
        month: res.lunar_month,
        year: res.lunar_year 
      })
    }
    getData()
  }, [])
  
  if (lunarDate === null) {
    return <Loading title="Fetching data.." />
  }
  
  return (
    <View style={styles.container}>
      <Text style={styles.lunarDate}>Lunar Date: {`${lunarDate.day}/${lunarDate.month}/${lunarDate.year}`}</Text>
      <CalendarPicker 
        theme={{
          calendarBackground: "transparent",
          monthTextColor: colors.orange,
          dayTextColor: colors.cloud,
          todayTextColor: colors.cloud,
          selectedDayTextColor: colors.cloud,
          selectedDayBackgroundColor: colors.orange,
          arrowColor: colors.orange,
          'stylesheet.calendar.header': {
            dayTextAtIndex0: {
              color: colors.orange
            },
            dayTextAtIndex1: {
              color: colors.orange
            },
            dayTextAtIndex2: {
              color: colors.orange
            },
            dayTextAtIndex3: {
              color: colors.orange
            },
            dayTextAtIndex4: {
              color: colors.orange
            },
            dayTextAtIndex5: {
              color: colors.orange
            },
            dayTextAtIndex6: {
              color: colors.orange
            },
         }
        }}
      hideExtraDays={true}
      />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  lunarDate: {
    color: colors.orange,
    textAlign: "center",
    paddingVertical: 8,
    fontSize: 15,
    letterSpacing: 1
  }
})

export default Calendar