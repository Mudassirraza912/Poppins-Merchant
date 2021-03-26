import React, { useState } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native'
import { fontStyles } from '../../constants/fontStyles'


const arrowDown = require('../../assets/images/down.png')

export const ItemList = ({
    name = "1 pc Chicken Mcdo w/ Rice",
    price = "5.00",
    falavor = "Chicken and Rice",
    additioalComment = "No chees",
    extra = "2 Extra gravy",
    isDropDown = false
}) => {
  
    const [show, setShow] = useState(false)
    return(
        <TouchableOpacity activeOpacity={.6} onPress={() => {setShow(!show)}}>
        <View style={styles.blockContainer}>
            <View style={styles.rowSpaceBtw}>
                <Text style={fontStyles.ProximaSemiBoldSmall}>{name}</Text>
                <Text style={fontStyles.ProximaSemiBoldSmall}>${price}</Text>
            </View>
            <View style={[styles.rowSpaceBtw, styles.itemContainer]}>
                <Text style={[fontStyles.ProximaRegularP2, {color: '#6A7C92'}]}>{falavor}</Text>
            {isDropDown &&
                <>
                    <Image source={arrowDown} style={{marginVertical: 10}} />
                </>}
            </View>
        </View>

       {isDropDown ? 
        <>
        {show && <View>
            {additioalComment ? <View style={styles.blockContainer}>
                    <View style={styles.itemContainer}>
                        <Text style={fontStyles.ProximaSemiBoldSmall}>Additional Comment</Text>
                    </View>
                    <View style={[styles.itemContainer]}>
                        <Text style={[fontStyles.ProximaRegularP2, {color: '#6A7C92'}]}>{additioalComment}</Text>
                    </View>
                </View> : null}

            {extra ? <View style={styles.blockContainer}>
                <View style={styles.itemContainer}>
                    <Text style={fontStyles.ProximaSemiBoldSmall}>Extra</Text>
                </View>
                <View style={[styles.itemContainer]}>
                    <Text style={[fontStyles.ProximaRegularP2, {color: '#6A7C92'}]}>{extra}</Text>
                </View>
            </View> : null}
        </View>}
        </>
        
        :    
        
        <>
        {additioalComment ? <View style={styles.blockContainer}>
                <View style={styles.itemContainer}>
                    <Text style={fontStyles.ProximaSemiBoldSmall}>Additional Comment</Text>
                </View>
                <View style={[styles.itemContainer]}>
                    <Text style={[fontStyles.ProximaRegularP2, {color: '#6A7C92'}]}>{additioalComment}</Text>
                </View>
            </View> : null}

        {extra ? <View style={styles.blockContainer}>
            <View style={styles.itemContainer}>
                <Text style={fontStyles.ProximaSemiBoldSmall}>Extra</Text>
            </View>
            <View style={[styles.itemContainer]}>
                <Text style={[fontStyles.ProximaRegularP2, {color: '#6A7C92'}]}>{extra}</Text>
            </View>
        </View> : null}
        </>}

        <View style={styles.divider} />
        </TouchableOpacity>
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
    rowSpaceBtw: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    row: {
        flexDirection: 'row'
    },
    divider: {
        backgroundColor: '#F1F2FA',
        height: 1,
        width: '90%',
        alignSelf: 'center'
    }
})