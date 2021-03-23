import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'
import { DEFAULT_THEME_COLOR } from '../../constants/colors'
import { fontStyles } from '../../constants/fontStyles'

const mcDonald = require('../../assets/images/mcDonald.png')
export const NotificationCard = ({
    title = "McDonalds",
    description = "You are 1 mile out. Your order is in the proximity lane.",
    img = mcDonald,
    time = "8:00 am",
    containerStyle = {},
    descriptionStyle = {},
    divider = true
}) => {

    return(
        <>
        <View style={[styles.rowSpacBtw, containerStyle]}>
            <View style={[styles.row, {width: '90%', paddingHorizontal: 10}]}>
                <Image source={img} style={styles.imgStyle} />
                <View>
                    <Text style={[fontStyles.ProximaSemiBold]}>
                        {title}
                    </Text>
                    <Text style={[fontStyles.ProximaRegularP2, {color: '#6A7C92', width: '95%'}, descriptionStyle]}>
                        {description}
                    </Text>
                </View>
            </View>
            <View>
                <Text style={[fontStyles.ProximaRegularP2, {color: DEFAULT_THEME_COLOR, right: 10}]}>
                    {time}
                </Text>
            </View>
         </View>
         {divider && <View style={styles.divider} />}
         </>
    )
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
    },
    rowSpacBtw: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: 10,
        paddingVertical: 15
    },
    imgStyle: {
        height: 50,
        width: 50,
        borderRadius: 100,
        justifyContent:'center',
        alignSelf: 'center',
        right: 10,
        marginHorizontal: 5
    },
    divider: {
        backgroundColor: '#F1F2FA',
        height: 1,
        width: '100%'
    }
})