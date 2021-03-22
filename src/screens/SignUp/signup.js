import React from 'react'
import { View, Text, StyleSheet, Platform, ScrollView, TouchableOpacity } from 'react-native'
import Button from '../../components/Button'
import Input from '../../components/Input'
import { DEFAULT_THEME_COLOR } from '../../constants/colors'
import { fontStyles } from '../../constants/fontStyles'

const SignUp = ({navigation}) => {


    return (
        <View style={styles.mainContainer}>
            <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
                <View style={{ flex: 1 }}>
                    <View style={[styles.blockContainer, {marginTop: Platform.OS == "android" ? 0 : 50}]}>
                        <View style={styles.itemContainer}>
                            <Text style={fontStyles.ProximaBoldH1}>Create an account</Text>
                        </View>
                        <View style={styles.itemContainer}>
                            <Text style={[fontStyles.ProximaRegularP2, { color: "#6A7C92" }]}>Please enter details below below</Text>
                        </View>
                    </View>

                    <View style={styles.blockContainer}>
                        <Input label="Full Name" keyboardType="default" />
                    </View>
                    <View style={styles.blockContainer}>
                        <Input label="Enter Email" keyboardType="default"/>
                    </View>
                    <View style={styles.blockContainer}>
                        <Input label="Password" isPassword keyboardType="default" />
                    </View>

            <View style={styles.blockContainer}>
                <Button onPress={() => navigation.navigate("ForgotPassword")} title="Forgot Password?" titleStyle={[fontStyles.ProximaRegularP2, {color:'#000'}]} backgroundColor="transparent" />
            </View>

                    <View style={styles.blockContainer}>
                        <Button title="Sign up" titleStyle={fontStyles.ProximaSemiBold} />
                    </View>

                    <View style={styles.signUpText}>
                        <Text style={fontStyles.ProximaRegularP1}>Have an account?</Text>
                        <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
                            <Text style={[fontStyles.ProximaRegularP1, { color: DEFAULT_THEME_COLOR}]}> Sign in</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.blockContainer}>
                        <Button
                            onPress={() => { }}
                            title={"Connect with Facebook"}
                            titleStyle={[fontStyles.ProximaSemiBold, {  }]}  
                            type="facebook"
                        />
                    </View>
                    <View style={styles.blockContainer}>
                        <Button
                            onPress={() => {}}
                            title={"Connect with Google"}
                            titleStyle={[fontStyles.ProximaSemiBold]}
                            type={"google"}
                        />
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
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
        flexDirection: 'row',
        alignSelf: 'center',
        paddingVertical: 25
    },
    bottomItems: {
        position: 'absolute',
        bottom: 100,
        width: '100%'
    }

})
export default SignUp;