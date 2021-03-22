import React from "react"
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native'

export const OrderListItem = ({
    active = false,
    containerStyle = {}
}) => {

    return(
        <View style={[styles.defaultContainerStyle, {backgroundColor: active ? '#FFBE00' : 'transparent'}, containerStyle]}>

        </View>
    )
}

const styles = StyleSheet.create({
    defaultContainerStyle: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
})