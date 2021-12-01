import React from 'react'
import { ScrollView, Image, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import CategoryItem from './components/CategoryItem/CategoryItem'

const categoryObjectList = [
    {
        name: 'NOVO',
        image: <Image source={require('../../assets/woman.png')} style={{width: '100%', height: 120}}/>,
        value: 'new'
    },
    {
        name: 'ROUPAS',
        image: <Image source={require('../../assets/women.png')} style={{width: '100%', height: 120}}/>,
        value: 'clothes'
    },
    {
        name: 'SAPATOS',
        image: <Image source={require('../../assets/shoes.png')} style={{width: '100%', height: 120}}/>,
        value: 'shoes'
    },
    {
        name: 'ACESSÓRIOS',
        image: <Image source={require('../../assets/purse.png')} style={{width: '100%', height: 120}}/>,
        value: 'accessories'
    }
]

const CategoryList = () => {
    const navigation = useNavigation()

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.navigate('Feed', { category: 'hot' })}
                style={{alignItems: 'center', backgroundColor: '#2D9CDB', height: 100, justifyContent: 'center'}}
            >
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>VEJA O QUE ESTÁ EM ALTA</Text>
                <Text style={{color: 'white'}}>Mais relevantes</Text>
            </TouchableOpacity>
            <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
                {categoryObjectList.map(item => 
                    <CategoryItem key={item.value} name={item.name} image={item.image} value={item.value}/>
                )}
            </ScrollView>
        </View>
    )
}

export default CategoryList

