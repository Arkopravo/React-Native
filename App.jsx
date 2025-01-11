import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View>
      <Text>App Testing</Text>
      <Image 
        source={{uri:'https://cdn2.unrealengine.com/body-7-spotlight-mhp-pagani-1920x1080-397763522.jpg?resize=1&w=1920'}}
        style={{width: 450, height: 250}}
      />
      <Button title="Click Me" onPress={() => alert('Button Clicked')} />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})