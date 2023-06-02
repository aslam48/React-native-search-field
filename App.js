import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';


const API_ENDPOINT = `https://randomuser.me/api/?results=30`

export default function App() {
  const [searchQuery, setSearchQuery] = useState("")




  const handleSearch = () => {
    setSearchQuery(query)
  }

  return (
    <SafeAreaView style={{flex: 1, marginHorizontal: 20}}>
      <TextInput placeholder='Search' clearButtonMode='always'
      style={styles.searchBox}
      autoCapitalize='none'
      autoCorrect={false}
      value={setSearchQuery}
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
