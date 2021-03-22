import React from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { DEFAULT_THEME_COLOR } from '../../constants/colors'
import { fontStyles } from '../../constants/fontStyles'

const ForgotPassword = ({navigation}) => {


    return(
        <View style={styles.mainContainer}>
            <View style={[styles.blockContainer, {marginTop: Platform.OS == "android" ? 0 : 50}]}>
                <View style={styles.itemContainer}>
                    <Text style={fontStyles.ProximaBoldH1}>Forgot Password</Text>
                </View>
                <View style={[styles.itemContainer]}>
                    <Text style={[fontStyles.ProximaRegularP2, {color: "#6A7C92"}]}>
                    To reset your password, enter the mobile 
                    number use to sign in  to POPPINS
                    </Text>
                </View>
            </View>

            <View style={[styles.blockContainer, {marginTop: 30}]}>
                <Input label="Enter Email" />
            </View>

            <View style={[styles.blockContainer, { marginTop: 30}]}>
                <Button onPress={() => {
                    navigation.navigate("VerificationOTP", {from: 'forgot'})
                }} title="Submit" titleStyle={fontStyles.ProximaSemiBold} />
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer : {
        backgroundColor: '#fff',
        flex: 1,
    },
    blockContainer: {
        paddingVertical: 5,
        paddingHorizontal: 15
    },
    itemContainer: {
        paddingVertical: 5,
    },
    signUpText: { 
        flexDirection:'row', 
        alignSelf:'center', 
        paddingVertical: 25
    },
    bottomItems: {
        position:'absolute',
        bottom: 100,
        width:'100%'
    }

})
export default ForgotPassword;