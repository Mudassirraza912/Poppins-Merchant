import React, { useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { NotificationSettingList } from '../../components/List/notificationSettingList'
import CustomModal from '../../components/Modal/index'
import Header from '../../components/Header'
import { fontStyles } from '../../constants/fontStyles'
import moment from 'moment'
import { InputTime } from '../../components/InputTime/inputTime'
import Button from '../../components/Button'

const DayManagement = ({
    route,
    navigation, 
}) => {
    const [visible, setVisible] = useState(false)
    const [isOn, setIsOn] = useState(true)

    const {date} = route.params
    var month = moment(date.dateString).format("MMMM")
    var dateCustomize = `${month} ${date.day}, ${date.year}`
    return(
        <View style={{flex: 1, backgroundColor: '#fff'}}>
             <CustomModal
                successIcon={false}
                title={"Are you sure you want to close the store at this day?"}
                discription="The store will not operate at the chosen date"
                modalVisibel={visible}
                btnHorizontal
                buttons={[
                    {
                        title: "Yes",
                        titleStyle:{ color: '#000'},
                        onPress: () => {
                            setVisible(false)
                            navigation.navigate("Home", {activeTab : 1})
                        },
                        backgroundColor:"transparent",
                        containerStyle: {width: '45%', marginHorizontal: 10},
                    },
                    {
                        title: "No",
                        onPress: () => {
                            setIsOn(!isOn)
                            setVisible(false)
                        },
                        containerStyle: {width: '45%', marginHorizontal: 10},
                    }
                ]}
            />
            <Header leftIconName="arrow-back" leftButtonPress={() => navigation.goBack()} />
            <View style={styles.blockContainer}>
                <NotificationSettingList isOn={isOn} onToggle={(bool) => {
                    if(!bool) {
                        setVisible(true)
                        setIsOn(bool)
                    }else {
                        setIsOn(bool)
                    }
                }} titleStyle={fontStyles.ProximaBoldH2} title={dateCustomize}  />
            </View>

            <View style={styles.blockContainer}>
                <InputTime label="Opening Time" placeHolderText="HH:mm" style={{ padding: 15,  }} onTimeChange={() => {}} />
            </View>
            <View style={styles.blockContainer}>
                <InputTime label="Closing Time" placeHolderText="HH:mm" style={{ padding: 15,  }} onTimeChange={() => {}} />
            </View>

            <View style={styles.submitBtn}>
                <Button title="Save" onPress={() => {navigation.navigate('Home')}}  />
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
    submitBtn: {
        bottom: 40,
        position: 'absolute',
        width: '100%'
    }
})

export default DayManagement