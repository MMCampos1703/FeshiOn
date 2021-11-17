import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

const CategoryItem = ({name, image, value}) => {

    return (
        <View 
            style={{ backgroundColor: '#e3e1e1', height: 150, flex: 1, flexDirection: 'row', marginTop: 15, alignItems: 'center'}}
        >
            <View style={{width: '70%', flexDirection: 'column'}}>
                <View>
                    <Text 
                        style={{fontWeight: 'bold'}}>
                        {name}
                    </Text>
                </View>
                <View >{image}</View>
            </View>
            <View style={{marginLeft: 35}}>
                <TouchableOpacity><Text>Favoritar</Text></TouchableOpacity>
            </View>
        </View>
    )
}

export default CategoryItem