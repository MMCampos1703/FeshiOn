import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import moment from 'moment-timezone'
import api from '../../../../service/service'
import { getUser } from '../../../../storage/async'

const FeedItem = ({name, image, value, favorites, createdDate, reload}) => {
    const [loading, setLoading] = useState(false)

    const onFavorite = async () => {
        try {
            setLoading(true)
            let user = await getUser()
            await api.put(`/item/favorite/${value}/${user.id}`)
            await reload()
        } catch (e) {
            Alert.alert(e.response.data.message)
        } finally {
            setLoading(false)
        }
        
    }

    return (
        <View 
            style={{ backgroundColor: '#e3e1e1', height: 230, flex: 1, 
                flexDirection: 'row', marginTop: 15, alignItems: 'center', padding: 20
            }}
        >
            <View style={{width: '60%', flexDirection: 'column'}}>
                <View>
                    <Text style={{fontWeight: 'bold'}}>
                        {name}
                    </Text>
                </View>
                <View>
                    <Image source={{uri: `data:image/jpeg;base64,${image}`}} 
                        style={{width: '100%', height: 180}}
                        resizeMode='contain'
                    />
                </View>
                <Text style={{fontWeight: 'bold', color: 'grey', marginTop: 10}}>
                    {moment(createdDate).tz('America/Sao_Paulo').format('DD/MM/YYYY HH:mm')}
                </Text>
            </View>
            <View style={{marginLeft: 35, flexDirection: 'column', alignItems: 'center', flex:1, height: 155, marginTop: 20}}>
                <TouchableOpacity style={styles.favorite} onPress={onFavorite}>
                    <View style={{height: 30}}>
                        {loading? <ActivityIndicator color='#fff' />
                            : <Icon name='heart' size={25} color='#fff' />
                        }
                    </View>
                    
                    <Text style={styles.favoriteText}> Favoritar </Text>
                </TouchableOpacity>

                <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 80}}>
                    <Icon name='heart' size={25} color='#cc4345' />
                    <Text> {favorites} </Text>
                </View>
                
            </View>
        </View>
    )
}

const styles = {
    favorite: {
        padding: 10,
        backgroundColor: '#cc4345',
        borderRadius: 5,
        alignItems: 'center',
    },
    favoriteText: {
        color: '#fff'
    }
}

export default FeedItem