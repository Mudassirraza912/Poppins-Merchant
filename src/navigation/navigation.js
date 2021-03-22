import React from 'react'
import Home from '../screens/Home/Home.screen'
import Profile from '../screens/Profile/Profile.screen'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons'

import LandingScreen from '../screens/LandingScreen/landingScreen'
import SignIn from '../screens/Signin/signin'
import ForgotPassword from '../screens/ForgotPassword/forgotPassword'
import VerificationOTP from '../screens/ForgotPassword/Verification'
import ChangePassword from '../screens/ForgotPassword/changePassword'
import SignUp from '../screens/SignUp/signup'

const Stack = createStackNavigator()

const MainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="LandingScreen" component={LandingScreen} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="VerificationOTP" component={VerificationOTP} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
