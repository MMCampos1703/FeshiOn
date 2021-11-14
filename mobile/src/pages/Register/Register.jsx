import React, { useState } from 'react'
import { View, TextInput, Button, StyleSheet, Text  } from 'react-native'
import api from '../../service/service'

const validateEmail = (username) => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(String(username).toLowerCase())
}

const Register = ({navigation}) => {
    const [nickname, setNickname] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [fieldErrors, setFieldErrors] = useState([])

    const onRegister = () => {
        let errors = []
        if(nickname === '') {
            errors.push({field: 'nickname', message: 'Campo não pode ser vazio.'})
        }
        if(username === '') {
            errors.push({field: 'username', message: 'Campo não pode ser vazio.'})
        } else if(!validateEmail(username)) {
            errors.push({field: 'username', message: 'Não é um email válido.'})
        }

        if(password === '' || confirmPassword === '') {
            if(password === '') {
                errors.push({field: 'password', message: 'Campo não pode ser vazio.'})
            }
            if(confirmPassword === '') {
                errors.push({field: 'confirmPassword', message: 'Campo não pode ser vazio.'})
            }
        } else if (password !== confirmPassword) {
            errors.push({field: 'password', message: 'Senhas não correspondem.'})
            errors.push({field: 'confirmPassword', message: 'Senhas não correspondem.'})
        }

        if(errors.length > 0) {
            setFieldErrors(errors)
        } else {
            if(fieldErrors.length > 0) {
                setFieldErrors(errors)
            }

            api.post('/register/user', {nickname, username, password}).then(() => {
                navigation.navigate('Login')
                // setUsername('')
                // setPassword('')
                // setConfirmPassword('')
                // setNickname('')
            })
            
        }
    }

    return (
        <View style={styles.page}>
            <View style={{alignItems: 'center', marginBottom: 70}}>
                <Text style={{fontWeight: 'bold', fontSize: 30}}>Registrar</Text>
            </View>
            <TextInput
                style={styles.input}
                onChangeText={setNickname}
                value={nickname}
                placeholder='Apelido'
            />
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
                secureTextEntry={true}
            />
            <Text style={styles.textError}>{fieldErrors.find(error => error.field === 'password')?.message}</Text>
            <TextInput
                style={styles.input}
                onChangeText={setConfirmPassword}
                value={confirmPassword}
                placeholder='Confirmação de senha'
                secureTextEntry={true}
            />
            <Text style={styles.textError}>{fieldErrors.find(error => error.field === 'confirmPassword')?.message}</Text>
           
           <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 50}}>
                <View style={styles.buttonContainer}>
                    <Button onPress={onRegister} title='Registrar' />
                </View>
                <View style={styles.buttonContainer}>
                    <Button onPress={() => navigation.navigate('Login')} title='Voltar'/>
                </View>
           </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: '30%'
    },
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

export default Register