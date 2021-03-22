import React, { useState } from 'react'
import { View, Text, StyleSheet, Platform } from 'react-native'
import Button from '../../components/Button'
import Input from '../../components/Input'
import CustomModal from '../../components/Modal'
import { DEFAULT_THEME_COLOR } from '../../constants/colors'
import { fontStyles } from '../../constants/fontStyles'
import Header from '../../components/Header'
const ChangePassword = ({navigation, route}) => {
    const { from } = route.params
    const [modal, setmodal] = useState(false)
    return(
        <View style={styles.mainContainer}>
            <CustomModal 
                modalVisibel={modal}
                setModalVisible={(a) => setmodal(a)}
                title={from !== "forgot" ? "Password Updated" : "Password changed"}
                discription={from !== "forgot" ? 
                    "You may now continue using Prox with your new password"
                     : 
                    "You may now continue using POPPINS with your new password"}
                buttons={[
                    {
                        title: "Close",
                        containerStyle: {},
                        titleStyle: {},
                        lightTheme: false,
                        disabled: false,
                        backgroundColor: DEFAULT_THEME_COLOR,
                        onPress: () => { 
                            setmodal(!modal) 
                            {from !== "forgot" ? 
                            navigation.navigate("Home") 
                            : 
                            navigation.navigate("SignIn")}
                        },
                        textColor: "#fff"
                    }
                ]}
                />
           {from !== "forgot" && <Header leftIcon={false} centerText="Change Password"/>}

           {from !== "forgot" && 
            <View style={styles.blockContainer}>
                <Text style={[fontStyles.ProximaRegularP1, {color: '#6A7C92', textAlign: 'center', marginVertical: 10}]}>
                    We partner with Stripe to ensure that your credit card details are kept safe and secure. Prox will not have access to your credit card info
                </Text>
            </View>}
           {from == "forgot" &&
            <View style={[styles.blockContainer, {marginTop: Platform.OS == "android" ? 0 : 50}]}>
                <View style={styles.itemContainer}>
                    <Text style={fontStyles.ProximaBoldH1}>Choose a New Password</Text>
                </View>
            </View>}

            <View style={[styles.blockContainer, {marginTop: 30}]}>
                <Input label="New Password" isPassword/>
            </View>
            <View style={[styles.blockContainer]}>
                <Input label="Confirm Password" isPassword/>
            </View>

            <View style={[styles.blockContainer, { marginTop: 30}]}>
                <Button 
                onPress={() => {setmodal(!modal)}}
                title="Continue" titleStyle={fontStyles.ProximaSemiBold} />
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
export default ChangePassword;