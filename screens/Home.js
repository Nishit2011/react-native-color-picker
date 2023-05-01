import React, {useState, useCallback, useEffect} from 'react';

import {FlatList, StyleSheet, RefreshControl, TouchableOpacity, Text} from 'react-native'

import PalettePreview from '../components/PalettePreview';


const Home = ({navigation}) => {

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


return (

    <FlatList 
        data={colorPalettes}
        style={style.list}
        keyExtractor={item=> item.paletteName}
        renderItem={({item}) => (     
            <PalettePreview 
            handlePress = {()=> navigation.navigate('ColorPalette', item)} 
                palette={item}
                colorPalette={item}
            />   
        )}
      refreshing={loading}
      onRefresh={handleRefresh}
       ListHeaderComponent={
       <TouchableOpacity onPress={()=> navigation.navigate('ColorPaletteModal')}>
        <Text>Launch Modal</Text>
       </TouchableOpacity>
       }
    />
  
      
    
)

}

const style = StyleSheet.create({
    list:{
        padding: 10,
        backgroundColor: 'white'
    }
})

export default Home