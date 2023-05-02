import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native'; 
import ColorBox from '../components/ColorBox';


const ColorPalette = ({route}) => {
  console.log(route)
const {colors} = route?.params

  return (
    <SafeAreaView>
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={item => item.hexCode}
      renderItem={({ item }) => (
        <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
      )}
     
    />
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      padding: 10,
      backgroundColor: 'white',
    },
  });

export default ColorPalette