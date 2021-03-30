import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NotificationSettingList } from '../../components/List/notificationSettingList'
import CustomModal from '../../components/Modal/index'
import Header from '../../components/Header'
import { fontStyles } from '../../constants/fontStyles'

const DayManagement = ({
    route,
    navigation, 
}) => {
    const {date} = route.params
    console.log(date.dateString.toString('MMMM yyyy'))
    return(
        <View>
            <Header leftIconName="arrow-back" leftButtonPress={() => navigation.goBack()} />
            <NotificationSettingList titleStyle={fontStyles.ProximaBoldH2} title={date.dateString}  />
        </View>
    )
}

export default DayManagement