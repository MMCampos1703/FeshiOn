import React, { useEffect, useState } from 'react'
import FeedItem from './components/FeedItem/FeedItem'
import { ScrollView, ActivityIndicator, Text, View } from 'react-native'
import api from '../../service/service'

const Feed = ({ route }) => {
    const { category } = route.params
    const [feed, setFeed] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        load()
    }, [])

    const load = async () => {
        let items = await api.get(`/item/get-by-category/${category}`)
        setFeed(items.data)
        setLoading(false)
    }

    return (
        <ScrollView contentContainerStyle={{ paddingBottom: 200, marginTop: 20}}>
            {loading ? 
                <ActivityIndicator size='large' color='#235fba' style={{marginTop: 50}}/> :
                feed.length > 0 ?
                    feed.map(item => 
                        <FeedItem key={item.id} name={item.name} image={item.image64} 
                            value={item.id} favorites={item.favorites}
                            createdDate={item.created_at}
                            reload={load}
                        />
                    )
                :   <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}><Text>Nenhum dado para esta categoria.</Text></View>
                
            }
        </ScrollView>
    )
}

export default Feed