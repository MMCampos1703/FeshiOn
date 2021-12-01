import React, { useState, useEffect } from 'react'
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native'
import api from '../../service/service'
import { getUser } from '../../storage/async'

const Favorites = () => {
    const [items, setItems] = useState(null)

    useEffect(() => {
        load()
    }, [])

    const load = async () => {
        const user = await getUser()
        if(user?.id) {
            let items = await api.get(`/item/favorite/get-all/${user?.id}`)
            setItems(items.data)
        }
    }
    
    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 200 }}>
            
            {items ? 
                items?.map(item => 
                    <View>
                        <View style={{flexDirection: 'row', alignItems: 'center', padding: 15}}>
                            <Image 
                                source={{uri: `data:image/jpeg;base64,${item.image64}`}} 
                                style={styles.image} key={item.id}
                            />
                            <Text>{item.name}</Text>
                        </View>
                        <View style={styles.divider}/>
                    </View>
                )
                :
                <ActivityIndicator size='large' color='#235fba' style={{marginTop: 50}}/>
            }
        </ScrollView>
    )
}

const styles = {
    image: {
        width: 50,
        height: 50,
        borderRadius: 10,
        resizeMode: 'contain'
    },
    divider: {
        borderWidth: 1,
        marginTop: 2,
        borderColor: '#b3a7a6'
    }
}


export default Favorites