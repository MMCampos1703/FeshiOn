import React, {useState} from 'react'
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import api from '../../service/service'
import { storeUser } from '../../storage/async'

const Login = ({navigation}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const onEnter = () => {
        api.post('/login/user', {email, password}).then((res) => {
            storeUser(res.data)
            setEmail('')
            setPassword('')
            setError(null)
            navigation.navigate('Main')
        }).catch(error => {
            setError(error?.response?.data?.message)
        })
    }

    const handleRegisterPress = () => {
        navigation.navigate('Registrar')
    }

    return (
        <View style={styles.page}>
            <View style={{alignItems: 'center', marginBottom: 20}}>
                <Image source={require('../../assets/fashion-black.png')} style={{marginBottom: 30, marginTop: 10}}/>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>Olá!</Text>
                <Text style={{fontWeight: 'bold', fontSize: 15}}>Comece a experimentar agora mesmo!</Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={setEmail}
                value={email}
                placeholder='E-mail'
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                secureTextEntry={true}
                placeholder='Senha'
            />
            <Button onPress={onEnter} style={{backgroundColor: 'red'}} title='ENTRAR'/>
            <Text style={styles.textError}>{error}</Text>
            <TouchableOpacity onPress={handleRegisterPress}>
                <Text style={styles.link}>Cadastre-se aqui</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10,
        marginVertical: 8 
    },
    page: {
        padding: 30,
        marginTop: 10
    },
    textError: {
        color: 'red',
        marginVertical: 8
    },
    link: {
        color: '#4967FF',
        marginLeft: 2
    }
})

export default Login