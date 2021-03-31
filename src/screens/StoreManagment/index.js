import React from 'react'
import { View, Text, ScrollView, StyleSheet, Alert} from 'react-native'
import { Calendar } from '../../components/Calender/calender'
import Header from '../../components/Header'

const StoreManagement = ({
    navigation,
}) => {

    return(
        <View>
            <Header leftIcon={false} centerText="Store Management" />
            <Calendar onDayPress={(date) => navigation.navigate("DayManagement", {date: date}) } />
        </View>
    )
}

export default StoreManagement;