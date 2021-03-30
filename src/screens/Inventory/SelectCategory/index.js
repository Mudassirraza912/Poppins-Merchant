import React from 'react'
import { useState } from 'react'
import { Dimensions, FlatList, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ImageCropPicker from 'react-native-image-crop-picker'
import Button from '../../../components/Button'
import Header from '../../../components/Header'
import Input from '../../../components/Input'
import List from '../../../components/List'
import { NotificationSettingList } from '../../../components/List/notificationSettingList'
import { fontStyles } from '../../../constants/fontStyles'


const SelectCategory = ({ navigation }) => {


    return (
        <View style={styles.container}>
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
