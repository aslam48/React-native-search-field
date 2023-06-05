import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';


const API_ENDPOINT = `https://randomuser.me/api/?results=30`;

export default function App() {
  const [searchQuery, setSearchQuery] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [data, setData,] = useState([])
  const [error, setError] = useState(null)
  const [fullData, setFullData] = useState([])


  useEffect (() => {
    setIsLoading(true);
    fetchData(API_ENDPOINT)
  },[])

  const fetchData = async (url) => {
    try {
    const response = await fetch(url)
    const json = await response.json()
    setData(json.results)
    console.log(json.results)
    setIsLoading(false)
  } catch(error) {
    setError(error)
    console.log(error)
    setIsLoading(false)
  }
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
  }


  if (isLoading) {
    return (
      <View style={{flex:1 ,justifyContent: "center", alignItems:"center"}}>
        <ActivityIndicator size={'large'} color='#5500dc'/>
      </View>

    )
  }
  

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 20, marginTop:20}}>
      <TextInput placeholder='Search' clearButtonMode='always'
      style={styles.searchBox}
      autoCapitalize='none'
      autoCorrect={false}
      value={searchQuery}
      onChangeText={(query) => handleSearch(query)}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBox: {
    paddingHorizontal:20,
     paddingVertical:10,
      borderColor:"#ccc",
       borderWidth:1, 
       borderRadius: 8
  },
});
