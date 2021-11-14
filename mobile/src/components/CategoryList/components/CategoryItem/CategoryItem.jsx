import React from 'react'
import {View, Text} from 'react-native'

const CategoryItem = ({name, image, value}) => {

    return (
        <View style={{ backgroundColor: '#e3e1e1', height: 120, flex: 1, flexDirection: 'row', marginTop: 15 }}>
            <View style={{width: '50%', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontWeight: 'bold'}}>{name}</Text>
            </View>
            <View style={{width: '50%'}}>{image}</View>
        </View>
    )
}

export default CategoryItem