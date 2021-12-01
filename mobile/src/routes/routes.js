import React from 'react'
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../pages/Login/Login'
import Categories from '../pages/Categories/Categories'
import Favorites from '../pages/Favorites/Favorites'
import RegisterItem from '../pages/RegisterItem/RegisterItem'
import MyItems from '../pages/MyItems/MyItems'
import Register from '../pages/Register/Register'
import Feed from '../pages/Feed/Feed'
import { removeUser, getUser } from '../storage/async'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

let isLogged = null

const logout = (navigation) => {
    removeUser()
    navigation.navigate('Login')
    navigation.closeDrawer()
}

function CustomDrawerContent(props) {
    return (
        <DrawerContentScrollView {...props}>
            <DrawerItemList {...props} />
            <DrawerItem label='Sair' onPress={() => logout(props.navigation)} />
        </DrawerContentScrollView>
    )
}

const ContentDrawer = () => (
    <Drawer.Navigator initialRouteName='Categorias'
        drawerContent={props => <CustomDrawerContent {...props} />}
        screenOptions={{unmountOnBlur: true}}
    >
        <Drawer.Screen name='Categorias' component={Categories} />
        <Drawer.Screen name='Favoritos' component={Favorites} />
        <Drawer.Screen name='Registrar item' component={RegisterItem} />
        <Drawer.Screen name='Meus itens' component={MyItems} />
    </Drawer.Navigator>
)

const MainStackNavigator = () => {
    (async ()=> {
        try {
            isLogged = await getUser()
        } catch(e) {
            console.error(e)
        }
    })()

    return (
        <Stack.Navigator initialRouteName={isLogged ? 'Main' : 'Login'}
            screenOptions={{
                headerStyle: {backgroundColor: '#9AC4F8'},
                headerTintColor: 'white',
                headerBackTitle: 'Back',
                unmountOnBlur: true
            }}
        >
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Registrar' component={Register} />
            <Stack.Screen name='Feed' component={Feed} />
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