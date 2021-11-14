import React, { useEffect } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Perfil from '../pages/Profile/Profile'
import Login from '../pages/Login/Login'
import Categories from '../pages/Categories/Categories'
import Favorites from '../pages/Favorites/Favorites'
import Register from '../pages/Register/Register'
import { View, Text } from 'react-native'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

const CustomDrawerContent = ({ navigation }) => {
    
    useEffect(()=> {
        setTimeout(()=> {
            navigation.navigate('Login')
        }, 1000)
    }, [])

    return (
        <View>
            <Text>Obrigado</Text>
            <Text>Volte novamente</Text>
        </View>
    )
}

const ContentDrawer = () => (
    <Drawer.Navigator initialRouteName='Categorias'>
        <Drawer.Screen name='Perfil' component={Perfil} />
        <Drawer.Screen name='Categorias' component={Categories} />
        <Drawer.Screen name='Favoritos' component={Favorites} />
        <Drawer.Screen name='Sair' component={CustomDrawerContent} />
    </Drawer.Navigator>
)

const MainStackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: {backgroundColor: '#9AC4F8'},
                headerTintColor: 'white',
                headerBackTitle: 'Back'
            }}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Registrar' component={Register} />
            <Stack.Screen name='Main' component={ContentDrawer} options={{ headerShown: false }}/>
        </Stack.Navigator>
    )
}


const Routes = () => (
    <NavigationContainer >
        <MainStackNavigator/>
    </NavigationContainer>
)

export default Routes