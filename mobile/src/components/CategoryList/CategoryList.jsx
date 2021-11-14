import React from 'react'
import { ScrollView, Image, View, Text } from 'react-native'
import CategoryItem from './components/CategoryItem/CategoryItem'

const categoryObjectList = [
    {
        name: 'NOVO',
        image: <Image source={require('../../assets/woman.png')} style={{width: '100%', height: 120}}/>,
        value: 'novo'
    },
    {
        name: 'ROUPAS',
        image: <Image source={require('../../assets/women.png')} style={{width: '100%', height: 120}}/>,
        value: 'roupas'
    },
    {
        name: 'SAPATOS',
        image: <Image source={require('../../assets/shoes.png')} style={{width: '100%', height: 120}}/>,
        value: 'sapatos'
    },
    {
        name: 'ACESSÓRIOS',
        image: <Image source={require('../../assets/purse.png')} style={{width: '100%', height: 120}}/>,
        value: 'acessorios'
    }
]

const CategoryList = () => {

    return (
        <View>
            <View style={{alignItems: 'center', backgroundColor: '#2D9CDB', height: 100, justifyContent: 'center'}}>
                <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>VEJA O QUE ESTÁ EM ALTA</Text>
                <Text style={{color: 'white'}}>Mais acessados</Text>
            </View>
            <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
                {categoryObjectList.map(item => <CategoryItem key={item.value} name={item.name} image={item.image} value={item.value}/>)}
            </ScrollView>
        </View>
    )
}

export default CategoryList

