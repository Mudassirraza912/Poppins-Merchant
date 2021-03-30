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
import BottomTabs from './bottomNavigation'
import ChangeNumber from '../screens/ChangeNumber'
import PrivacyPolicy from '../screens/PrivacyPolicy'
import TermsAndConditions from '../screens/TermAndConditions'
import { ContactUs } from '../screens/ContactUs/contactUs'
import { NotificationSetting } from '../screens/Notification/NotificationSetting'
import StoreFeedback from "../screens/StoreFeedback"
import OrderHistory from '../screens/OrderHistory'
import { NewOrder } from '../screens/OrderScreen/newOrder'
import { AcceptedOrder } from '../screens/OrderScreen/acceptedOrder'
import Invoice from '../components/Invoice'
import AddNewItem from '../screens/Inventory/AddNewItem'
import SelectCategory from '../screens/Inventory/SelectCategory'

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
        <Stack.Screen name="Home" component={BottomTabs} />
        <Stack.Screen name="Orders" component={Home} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ContactUs" component={ContactUs} />
        <Stack.Screen name="NotificationSetting" component={NotificationSetting} />
        <Stack.Screen name="ChangeNumber" component={ChangeNumber} />
        <Stack.Screen name="StoreFeedback" component={StoreFeedback} />
        <Stack.Screen name="OrderHistory" component={OrderHistory} />
        <Stack.Screen name="NewOrder" component={NewOrder} />
        <Stack.Screen name="AcceptedOrder" component={AcceptedOrder} />
        <Stack.Screen name="Invoice" component={Invoice} />
        <Stack.Screen name="AddNewItem" component={AddNewItem} />
        <Stack.Screen name="SelectCategory" component={SelectCategory} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigation
