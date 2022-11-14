import {View, Text, StyleSheet, FlatList, Image, Pressable} from "react-native"
import {colors} from "../constants/colors.js"
import {useEffect, useState} from "react"
import Loading from "../components/loading.js"
import {getNews} from "../services/getNews.js"
import * as Linking from "expo-linking"

const News = () => {
  const [data, setData] = useState(null)
  
  useEffect(() => {
    const getData = async () => {
      const res = await getNews()
      setData(res)
    }
    getData()
  }, [])
  
  if (!data || data === null) {
    return (
      <Loading title="Fetch articles please wait..." />
      )
  }
  
  const renderData = ({item}) => {
    return (
      <Pressable onPress={() => Linking.openURL(item.url)} style={styles.newsItem}>
        <Image resizeMode="cover" style={styles.img} source={{uri : item.urlToImage}} />
        <View style={styles.info}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.desc}>{item.description}</Text>
          <View style={styles.btn}>
              <Text style={styles.btnTxt}>Read more...</Text>
          </View>
        </View>
      </Pressable>
      )
  }
  
  return (
    <View style={styles.container}>
      <FlatList showsVerticalScrollIndicator={false} data={data} keyExtractor={item => item.title} renderItem={renderData} />
    </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15
  },
  newsItem: {
    backgroundColor: colors.mainLight,
    width: "100%",
    marginVertical: 10,
    borderRadius: 16,
    flexDirection: "row",
    flexShrink: 1
  },
  img: {
    width: "30%",
    height: 60,
    aspectRatio: 1,
    borderTopLeftRadius: 16,
    borderBottomLeftRadius: 16
  },
  title: {
    fontSize: 10,
    color: "#fff",
    letterSpacing: 1,
    fontWeight: "bold",
    paddingHorizontal: 8,
    paddingVertical: 5
  },
  info: {
   flexShrink: 1
  },
  desc: {
    color: "#fff",
    fontSize: 9,
    paddingBottom: 4,
    paddingHorizontal: 8,
  },
  btnTxt: {
    color: colors.blue,
    fontSize: 8,
    textAlign: "right"
  },
  btn: {
    paddingHorizontal: 8
  }
})

export default News