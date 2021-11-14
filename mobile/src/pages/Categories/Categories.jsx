import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import CategoryList from '../../components/CategoryList/CategoryList'


const Categories = ({navigation}) => {

    return (
        <View style={styles.page}>
            <CategoryList/>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        padding: 30,
    }
})

export default Categories