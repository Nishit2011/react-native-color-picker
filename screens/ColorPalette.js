import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, FlatList } from 'react-native'; 
import ColorBox from '../components/ColorBox';


const ColorPalette = ({route}) => {
const {colors, paletteName} = route.params
console.log(colors, paletteName)
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <Text style={styles.heading}>
        Here are some boxes of different colours
      </Text>
      <ColorBox hexCode="#2aa198" colorName="Cyan" />
      <ColorBox hexCode="#268bd2" colorName="Blue" />
      <ColorBox hexCode="#d33682" colorName="Magenta" />
      <ColorBox hexCode="#cb4b16" colorName="Orange" />
    </View>
    <FlatList
      style={styles.container}
      data={colors}
      keyExtractor={item => item.hexCode}
      renderItem={({ item }) => (
        <ColorBox hexCode={item.hexCode} colorName={item.colorName} />
      )}
      ListHeaderComponent={<Text style={styles.heading}>{paletteName}</Text>}
    />
  </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
      paddingHorizontal: 10,
      paddingBottom: 10,
    },
    heading: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    text: {
      fontWeight: 'bold',
      color: 'white',
    },
  });

export default ColorPalette