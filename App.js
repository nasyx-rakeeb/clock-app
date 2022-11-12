import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "./screens/Home.js"
import Matches from "./screens/Matches.js"
import News from "./screens/News.js"
import Ionicons from 'react-native-vector-icons/Ionicons'

const Tab = createBottomTabNavigator()
const navTheme = DefaultTheme
navTheme.colors.background = "#fff"

const App = () => {
  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar style="auto" />
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'Home') {
              iconName = focused ? 'ios-information-circle' : 'ios-information-circle-outline'
            } else if (route.name === 'Matches') {
              iconName = focused ? 'ios-list' : 'ios-list-outline'
            } else if (route.name === "News") {
              iconName = focused ? "ios-information-circle" : "ios-list-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Matches" component={Matches} />
        <Tab.Screen name="News" component={News} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App