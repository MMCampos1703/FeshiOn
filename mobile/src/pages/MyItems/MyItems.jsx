import React, { useEffect, useState } from 'react'
import { View, ScrollView, ActivityIndicator, Text, Image } from 'react-native'
import api from '../../service/service'
import { getUser } from '../../storage/async'


const MyItems = () => {
    const [items, setItems] = useState(null)

    useEffect(() => {
        load()
    }, [])

    const load = async () => {
        const user = await getUser()
        if(user?.id) {
            let items = await api.get(`/item/get-all/${user?.id}`)
            setItems(items.data)
        }
    }

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
            {items ? 
                items.length > 0 ?
                    items.map((item)=>
                        <View style={{marginBottom: 20 }} key={item.id}>
                            <Text>{item.name}</Text>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image 
                                    source={{uri: `data:image/jpeg;base64,${item.image64}`}} 
                                    style={styles.image}
                                />
                                <Text style={{marginLeft: 70 }}>Favoritos: {item.favorites}</Text>
                            </View>
                            <View style={styles.divider}/>
                        </View>
                    ) 
                    : <Text>Nenhum item criado.</Text> 
                : <ActivityIndicator size='large' color='#235fba' style={{marginTop: 50}}/>
            }
        </ScrollView>
    )
}

const styles = {
    image: {
        width: 100,
        height: 100,
        borderRadius: 10,
        resizeMode: "contain"
    },
    divider: {
        borderWidth: 1,
        marginTop: 2,
        borderColor: '#b3a7a6'
    }
}

export default MyItems