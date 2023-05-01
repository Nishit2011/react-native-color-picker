import React from 'react'
import {FlatList, View, Text, TouchableOpacity, StyleSheet} from 'react-native'

const PalettePreview = ({handlePress, colorPalette}) => {
    return (
        <TouchableOpacity 
        onPress={handlePress} >
        <Text style={styles.text}>{colorPalette.paletteName}!</Text>
        <FlatList 
            horizontal={true}
            style={styles.list}
            data={colorPalette.colors.slice(0, 5)}
            keyExtractor={item => item.colorName}
            renderItem={({item})=><View style={[styles.box, {backgroundColor: item.hexCode}]} />}
        />
       </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    text:{
        fontWeight: 'bold',
        fontSize: 18, marginBottom:5
    },
    box:{
        height: 30,
        width: 30, marginRight:10, marginTop: 5,
        shadowColor: '#000',
        shadowOffset: {width:0, height:1},
        shadowOpacity: 0.3,
        shadowRadius: 1
    },
    list:{
        marginBottom: 20, flexDirection: 'row'
    }
})

export default PalettePreview