import React, {useState, useCallback, useEffect} from 'react';

import {FlatList, StyleSheet, RefreshControl, TouchableOpacity, Text} from 'react-native'

import PalettePreview from '../components/PalettePreview';


const Home = ({navigation, route}) => {

const newColorPalette = route?.params?.newColorPalette
const [colorPalettes, setColorPalettes] = useState([])
const [loading, setLoading] = useState(false)


const fetchColorPalettes = useCallback(async()=>{
    const result = await fetch('https://color-palette-api.kadikraman.vercel.app/palettes')
    if(result.ok){
        const palettes = await result.json()
        setColorPalettes(palettes)
    }
},[])

useEffect(()=>{
    fetchColorPalettes()
},[])

const handleRefresh = useCallback(async()=>{
    setLoading(true)
    await fetchColorPalettes()
    setTimeout(()=>{
        setLoading(false)
    }, 1000)
  
},[])

useEffect(()=>{
    if(newColorPalette){
        setColorPalettes(palettes => [newColorPalette, ...palettes])
    }
},[newColorPalette])


return (
<>
    <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('ColorPaletteModal')}
      >
        <Text style={styles.buttonText}>Add a color scheme</Text>
      </TouchableOpacity>

    <FlatList 
        data={colorPalettes}
        style={styles.list}
        keyExtractor={item=> item.paletteName}
        renderItem={({item}) => (     
            <PalettePreview 
            handlePress = {()=> navigation.navigate('ColorPalette', item)} 
                palette={item}
                colorPalette={item}
            />   
        )}
        refreshControl={
          <RefreshControl refreshing={loading} onRefresh={handleRefresh} />
        }
   
     
    />
    </>
  
      
    
)

}

const styles = StyleSheet.create({
    list: {
      flex: 1,
      padding: 10,
      backgroundColor: 'white',
    },
    button: {
      height: 50,
      backgroundColor: 'white',
      padding: 10,
    },
    buttonText: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'teal',
    },
  });

export default Home