import React from 'react'
import { useState } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet } from 'react-native'
import Button from '../../components/Button'
import Invoice from '../../components/Invoice'
import { fontStyles } from '../../constants/fontStyles'
const Splash = require('../../assets/images/Splash.png')
const LandingScreen = ({ navigation }) => {



    return (
        <View style={{ flex: 1 }}>
            {/* <ImageBackground source={Splash} style={styles.backgroundImage}>
                <View style={styles.mainContainer}>
                    <Text style={[fontStyles.ProximaBoldH1, { color: "#fff", fontSize: 35 }]}>
                        Poppins
                    </Text>
                    <Text style={[fontStyles.ProximaRegularP1, { color: "#fff", letterSpacing: 2, lineHeight: 30 }]}>
                        MERCHANT
                    </Text>

                </View>
                <View style={styles.bottomItems}>
                    <Button
                        onPress={() => navigation.navigate("SignIn")}
                        title={"Log in Account"}
                        titleStyle={[fontStyles.ProximaSemiBold, { color: "#000" }]}
                        backgroundColor={"#F6BD3E"}
                    />
                    <Button
                        onPress={() => navigation.navigate("SignUp")}
                        title={"Don't have an account? Sign up"}
                        titleStyle={[fontStyles.ProximaSemiBold]}
                    />
                </View>
            </ImageBackground> */}
            <Invoice />
        </View>
    )
}


const styles = StyleSheet.create({
    backgroundImage: {
        height: '100%',
        width: '100%'
    },
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '75%'
    },
    bottomItems: {
        // position: 'absolute',
        // bottom: 50,
        height: '25%',
        width: '100%'
    }
})

export default LandingScreen;