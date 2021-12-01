import React, { useState } from 'react'
import { View, TouchableOpacity, Text, TextInput, Image, ActivityIndicator } from 'react-native'
import { Picker } from '@react-native-picker/picker'
import * as ImagePicker from "expo-image-picker"
import { getUser } from '../../storage/async'
import api from '../../service/service'

const defaultForm = {image: null, category: 'accessories', name: null}

const options = {
    base64: true
}

const RegisterItem = () => {
    const [form, setForm] = useState(defaultForm)
    const [loading, setLoading] = useState(false)

    const openImagePickerAsync = async () => {
        const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync()
    
        if (permissionResult.granted === false) {
            Alert.alert("Erro", "Erro ao executar operação!")
            return
        }
    
        const pickerResult = await ImagePicker.launchImageLibraryAsync(options)
        if (pickerResult.cancelled === true) {
            return
        }

        setForm({...form, image: pickerResult})
    }

    const onSave = async () => {
        setLoading(true)
        const user = await getUser()
        api.post('/item/new', {...form, userId: user?.id}).then(() => {
            setForm(defaultForm)
        }).catch(error => {
            setError(error?.response?.data?.message)
        }).finally(() => setLoading(false))
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={openImagePickerAsync}>
                <View style={styles.imageContainer}>
                    {
                       form.image ? <Image source={{ uri: form.image.uri }} style={styles.image}/>
                        : <Text style={styles.text}>ADICIONAR IMAGEM</Text>
                    }
                </View>
            </TouchableOpacity>

            <TextInput
                style={styles.input}
                onChangeText={(value) => setForm({...form, name: value})}
                value={form.name}
                placeholder="Nome"
            />

            <View style={styles.select}>
                <Text style={styles.text}>Categoria</Text>
                <Picker 
                selectedValue={form.category} 
                onValueChange={itemValue => setForm({...form, category: itemValue})}>
                    <Picker.Item label="Acessórios" value="accessories" />
                    <Picker.Item label="Roupas" value="clothes" />
                    <Picker.Item label="Sapatos" value="shoes" />
                </Picker>
            </View>
            

            <TouchableOpacity onPress={onSave} style={styles.save} disabled={loading}>
                {loading ? <ActivityIndicator color="#fff"/> :
                <Text style={styles.saveText}>Salvar</Text>}
            </TouchableOpacity>
        </View>
    )
}

const styles = {
    imageContainer: {
        width: 300,
        height: 80,
        borderRadius: 20,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        borderStyle: "dotted",
        borderColor: "blue",
        borderWidth: 3
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 20,
        resizeMode: "contain"
    },
    container: {
        padding: 45
    },
    input: {
        marginTop: 30,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    select: {
        marginTop: 30,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10
    },
    text: {
        color: 'grey'
    },
    save: {
        marginTop: 80,
        padding: 10,
        backgroundColor: '#3b32db',
        width: '35%',
        justifyContent: "center",
        alignItems: 'center',
        borderRadius: 10
    },
    saveText: {
        color: 'white', fontSize: 15
    }
}

export default RegisterItem