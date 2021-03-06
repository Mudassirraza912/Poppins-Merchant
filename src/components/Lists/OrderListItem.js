import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native'
import { fontStyles } from "../../constants/fontStyles"

const people = require('../../assets/images/people.png')
export const OrderListItem = ({
    active = false,
    containerStyle = {},
    name = "John Doe",
    numOfItem = "2",
    remainTime = "7 mint",
    price = "17.00",
    orderStatus = "Pickup in",
    onPress = () => {}
}) => {

    return(
        <TouchableOpacity onPress={onPress} activeOpacity={.7} style={[styles.defaultContainerStyle, {backgroundColor: active ? '#FFBE00' : 'transparent', borderBottomWidth: 1, borderBottomColor: active ? "#fff" : '#F1F2FA'}, containerStyle]}>
            <View style={[{flexDirection: 'row', marginHorizontal: 5}]}>
                <Image source={people} style={styles.imageStyle} />
                <View style={[styles.blockContainer]}>
                    <Text style={[styles.itemContainer, fontStyles.ProximaSemiBoldSmall]}>
                        {name}
                    </Text>
                    <Text style={[styles.itemContainer, fontStyles.ProximaRegularP2, {color: '#6A7C92'}]}>
                        {numOfItem} Items
                    </Text>
                </View>
            </View>
            <View style={[styles.blockContainer]}>
                <Text style={[styles.itemContainer, fontStyles.ProximaSemiBoldSmall]}>
                    {remainTime}
                </Text>
                <Text style={[styles.itemContainer, fontStyles.ProximaRegularP2, {color: '#6A7C92'}]}>
                    {orderStatus}
                </Text>
            </View>
            <View style={[styles.blockContainer]}>
                <Text style={[styles.itemContainer, fontStyles.ProximaSemiBoldSmall]}>
                    ${price}
                </Text>
                <Text style={[styles.itemContainer, fontStyles.ProximaRegularP2, {color: '#6A7C92'}]}>
                    Total
                </Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    defaultContainerStyle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    imageStyle: {
        height: 60,
        width: 60,
        borderRadius: 100
    },
    blockContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15,
    },
    itemContainer: {
        paddingVertical: 5,
    },
})