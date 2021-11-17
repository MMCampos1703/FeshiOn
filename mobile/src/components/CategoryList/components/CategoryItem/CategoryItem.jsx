import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const CategoryItem = ({name, image, value}) => {
    const navigation = useNavigation()

    return (
        <TouchableOpacity onPress={() => navigation.navigate('Feed', { category: value })}
            style={{ backgroundColor: '#e3e1e1', height: 120, flex: 1, flexDirection: 'row', marginTop: 15 }}
        >
            <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>{name}</Text>
            </View>
            <View style={{width: '50%'}}>{image}</View>
        </TouchableOpacity>
    )
}

export default CategoryItem