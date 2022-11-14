import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "./screens/Home.js"
import Matches from "./screens/Matches.js"
import News from "./screens/News.js"
import Ionicons from 'react-native-vector-icons/Ionicons'
import {colors} from "./constants/colors.js"
import { useFonts } from 'expo-font'

const Tab = createBottomTabNavigator()
const navTheme = DefaultTheme
navTheme.colors.background = colors.main

const App = () => {
  const [fontsLoaded] = useFonts({
    'marsdenBold': require('./assets/fonts/Marsden-Ct-Bold.ttf')
  })
  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer theme={navTheme}>
      <StatusBar style="light" />
      <Tab.Navigator screenOptions={({ route }) => ({
          headerTintColor: "#fff",
          headerTitleAlign: "center",
          headerStyle: {backgroundColor: colors.main, elevation: 0},
          headerContainerStyle: {alignItems: 'center', flex: 1},
          tabBarStyle: { height: 60, paddingTop: 10, paddingBottom: 10, backgroundColor: "#363636", borderTopWidth: 0 },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'Home') {
              iconName = focused ? 'md-home' : 'md-home-outline'
            } else if (route.name === 'Matches') {
              iconName = focused ? 'md-football' : 'md-football-outline'
            } else if (route.name === "News") {
              iconName = focused ? "md-newspaper" : "md-newspaper-outline"
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: colors.orange,
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