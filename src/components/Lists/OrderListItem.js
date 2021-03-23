import React from "react"
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'

const people = require('../../assets/images/people.png')
export const OrderListItem = ({
    active = false,
    containerStyle = {},
    name = "John Doe",
    numOfItem = "2",
    remainTime = "7 mint",
    price = "17.00"
}) => {

    return(
        <TouchableOpacity activeOpacity={.7} style={[styles.defaultContainerStyle, {backgroundColor: active ? '#FFBE00' : 'transparent'}, containerStyle]}>
            <View style={[{flexDirection: 'row', marginHorizontal: 5}]}>
                <Image source={people} style={styles.imageStyle} />
                <View style={[styles.blockContainer]}>
                    <Text style={[styles.itemContainer]}>
                        {name}
                    </Text>
                    <Text style={[styles.itemContainer]}>
                        {numOfItem} Items
                    </Text>
                </View>
            </View>
            <View style={[styles.blockContainer]}>
                <Text style={[styles.itemContainer]}>
                   {remainTime}
                </Text>
                <Text style={[styles.itemContainer]}>
                    Pickup in
                </Text>
            </View>
            <View style={[styles.blockContainer]}>
                <Text style={[styles.itemContainer]}>
                   ${price}
                </Text>
                <Text style={[styles.itemContainer]}>
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