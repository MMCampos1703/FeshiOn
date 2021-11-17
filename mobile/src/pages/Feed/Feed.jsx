import React from 'react'
import FeedItem from './components/FeedItem/FeedItem'
import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native'

const categoryObjectList = [
    {
        id: 1,
        name: 'Sobretudo de onça',
        image: <Image source={require('../../assets/woman.png')} style={{width: '100%', height: 120}}/>
    },
    {
        id: 2,
        name: 'Casaco Chanel',
        image: <Image source={require('../../assets/women.png')} style={{width: '100%', height: 120}}/>
    },
    {
        id: 3,
        name: 'Casaco Gucci',
        image: <Image source={require('../../assets/women.png')} style={{width: '100%', height: 120}}/>
    },
    {
        id: 4,
        name: 'Sobretudo de macaco',
        image: <Image source={require('../../assets/woman.png')} style={{width: '100%', height: 120}}/>
    }
]

const Feed = ({ route }) => {
    const { category } = route.params

    return (
        <View>
            <Text>{category}</Text>
            <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
                {categoryObjectList.map(item => 
                    <FeedItem key={item.id} name={item.name} image={item.image} value={item.id}/>
                )}
            </ScrollView>
        </View>
    )
}

export default Feed