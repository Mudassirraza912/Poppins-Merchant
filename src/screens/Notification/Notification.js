import React from 'react'
import { useState } from 'react'
import { View, Text, Image, StyleSheet, Platform } from 'react-native'
import { NotificationCard } from '../../components/Cards/NotificationCard'
import Header from '../../components/Header'
import { fontStyles } from '../../constants/fontStyles'
import { NotificationEmpty } from './EmptyNotification'

export const Notification = ({
    navigation,
}) => {
    const [notifications, setNotifications] = useState([1, 2])

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            {/* <Header centerText={"Notification"} leftButtonPress={() => navigation.goBack()} /> */}
            <View style={styles.headerContainer}>
                <Text style={fontStyles.ProximaBoldH1}>Notification</Text>
            </View>
            {notifications.length > 0 ? [1, 2, 3, 4, 5].map((val, ind) => {
                return (
                    <NotificationCard
                        key={ind}
                        title="David White"
                    />
                )
            }) : <View style={styles.main}>
                    <NotificationEmpty

                    />
                </View>}
            {/* <View style={styles.main}>
                <NotificationEmpty />
            </View> */}
        </View>
    )

}

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgStyle: {
        height: 200, width: 200
    },
    headerContainer: {
        padding: 20,
        marginTop: Platform.OS == "android" ? 10 : 40
    }
})