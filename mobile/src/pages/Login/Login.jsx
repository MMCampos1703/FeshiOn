import React, {useState} from 'react'
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Login = ({navigation}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [fieldErrors, setFieldErrors] = useState([])

    const onEnter = () => {
        const realUsername = 'malaco'
        const realPassword = '123'

        let errors = []
         if(username !== realUsername) {
            errors.push({field: 'username', message: 'Nome de usuário inválido.'})
        } 
        if(password !== realPassword) {
            errors.push({field: 'password', message: 'Senha inválida.'})
        }

        if(errors.length > 0) {
            setFieldErrors(errors)
        } else {
            if(fieldErrors.length > 0) {
                setFieldErrors(errors)
            }
            setUsername('')
            setPassword('')
            navigation.navigate('Main')
        }
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
                onChangeText={setUsername}
                value={username}
                placeholder='E-mail'
            />
            <Text style={styles.textError}>{fieldErrors.find(error => error.field === 'username')?.message}</Text>
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder='Senha'
            />
            <Text style={styles.textError}>{fieldErrors.find(error => error.field === 'password')?.message}</Text>
            <Button onPress={onEnter} title='ENTRAR'/>
            <TouchableOpacity style={{marginTop: 30}} onPress={handleRegisterPress}>
                <Text>Cadastre-se aqui</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        borderWidth: 1,
        padding: 10
    },
    page: {
        padding: 30,
        marginTop: 10
    },
    textError: {
        color: 'red',
        marginVertical: 8
    }
})

export default Login