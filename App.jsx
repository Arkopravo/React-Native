import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  Pressable,
  SafeAreaView,
} from 'react-native';
import React from 'react';

const App = () => {
  return (
    <>
      <View>
        <Text>App Testing</Text>

        <Image
          source={{
            uri: 'https://cdn2.unrealengine.com/body-7-spotlight-mhp-pagani-1920x1080-397763522.jpg?resize=1&w=1920',
          }}
          style={{width: 450, height: 250}}
        />

        <Button title="Normal Button" onPress={() => alert('Button Clicked')} />

        <TouchableHighlight
          onLongPress={() => alert('Touchable highlight Button Clicked')}
          style={{padding: 10, backgroundColor: 'green', marginTop: 10}}>
          <Text>Touchable Highlight Button</Text>
        </TouchableHighlight>

        <TouchableOpacity
          onPress={() => alert('Touchable Opacity Button Clicked')}
          style={{padding: 10, backgroundColor: 'red', marginTop: 10}}>
          <Text>Touchable opacity Button</Text>
        </TouchableOpacity>

        <Pressable
          style={{padding: 10, backgroundColor: 'yellow', marginTop: 10}}
          onPress={() => alert('Pressable Button Clicked')}>
          <Text>Pressable Button</Text>
        </Pressable>
      </View>

      <SafeAreaView>
        <Text>Safe Area View = for automatically adjust according the notch of the phone.</Text>
      </SafeAreaView>
    </>
  );
};

export default App;

const styles = StyleSheet.create({});
