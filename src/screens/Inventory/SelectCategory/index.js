import React from 'react'
import { useState } from 'react'
import { Dimensions, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ImageCropPicker from 'react-native-image-crop-picker'
import Button from '../../../components/Button'
import Header from '../../../components/Header'
import Input from '../../../components/Input'
import List from '../../../components/List'
import { NotificationSettingList } from '../../../components/List/notificationSettingList'
import CustomModal from '../../../components/Modal'
import { fontStyles } from '../../../constants/fontStyles'

const SelectCategory = ({ navigation }) => {
    
    const [show, setShow] = useState(false)
    const [show1, setShow1] = useState(false)

    return (
        <View style={styles.container}>
            <CustomModal
                modalVisibel={show} 
                successIcon={false}
                title = "Add New Category"
                discription = ""
                component={
                    <Input label="Name"  />
                }
                buttons={[
                {
                    title: "Save",
                    onPress: () => {
                        setShow(false)
                        setShow1(true)

                    }
                }
            ]} />
            <CustomModal
                modalVisibel={show1} 
                successIcon 
                title = "New Item Added"
                discription = "This new item has been added and posted in the inventory" buttons={[
                {
                    title: "Close",
                    onPress: () => {
                        navigation.navigate('Home', {activeTab : 0})
                        setShow1(false)
                    }
                }
            ]} />
            <Header
                centerText="Select Category"
                leftIconName="arrow-back"
                leftButtonPress={navigation.goBack}
            />
            <ScrollView contentContainerStyle={{ paddingBottom: '20%' }}>
                <View style={[styles.container]}>

                    <FlatList
                        data={["Chicken", "Burger", "Fries", "Drinks"]}
                        renderItem={({ item }) => {
                            return <List
                                title={item}
                                titleStyle={{ color: "#000", ...fontStyles.ProximaRegularP1 }}
                                rightIcon={false}
                                onPress={navigation.goBack}
                                containerStyle={{ backgroundColor: "#fff", paddingStart: 10, paddingVertical: 20, borderBottomWidth: 1, borderBottomColor: "#F1F2FA" }}
                            />
                        }}
                    />

                </View>
            </ScrollView>

            <Button 
                onPress={() => setShow(true)}
                title="Add New Category"
                containerStyle={{ bottom: "10%" }}
            />
        </View>
    )
}

export default SelectCategory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#F1F2FA"
    }
})
