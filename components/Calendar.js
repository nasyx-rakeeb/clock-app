import {View, StyleSheet, Text} from "react-native"
import {colors} from "../constants/colors.js"
import {Calendar as CalendarPicker} from 'react-native-calendars';
 
const Calendar = () => {
  return (
    <View style={styles.container}>
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
  }
})

export default Calendar