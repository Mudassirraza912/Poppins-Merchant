import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NotificationSettingList } from '../../components/List/notificationSettingList'
import CustomModal from '../../components/Modal/index'
import Header from '../../components/Header'
import { fontStyles } from '../../constants/fontStyles'
import moment from 'moment'
import { InputTime } from '../../components/InputTime/inputTime'
const DayManagement = ({
    route,
    navigation, 
}) => {
    const {date} = route.params
    var month = moment(date.dateString).format("MMMM")
    var dateCustomize = `${month} ${date.day}, ${date.year}`
    return(
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Header leftIconName="arrow-back" leftButtonPress={() => navigation.goBack()} />
            <View style={styles.blockContainer}>
                <NotificationSettingList titleStyle={fontStyles.ProximaBoldH2} title={dateCustomize}  />
            </View>

            <View style={styles.blockContainer}>
                <InputTime label="Opening Time" placeHolderText="HH:mm" onTimeChange={() => {}} />
            </View>
            <View style={styles.blockContainer}>
                <InputTime label="Closing Time" placeHolderText="HH:mm" onTimeChange={() => {}} />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    blockContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    itemContainer: {
        paddingVertical: 5,
    },
})

export default DayManagement