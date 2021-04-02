import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity, FlatList
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { connect, useDispatch } from 'react-redux'
import Header from '../../components/Header'
import { OrderListItem } from '../../components/Lists/OrderListItem'
import { Body,  List, ListItem as Item, ScrollableTab, Tab, TabHeading, Tabs, Title } from "native-base";
import { DEFAULT_THEME_COLOR } from '../../constants/colors'
const Home = ({ navigation, user, route }) => {
  // const { activeTab } = route.params
  const [initialTab, setInitialTab] = useState(0)
  console.log("route", route)


  // useEffect(() => {
  //   if(activeTab){
  //     setInitialTab(activeTab)
  //   }
  // }, [activeTab])
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <Header centerText="Orders" leftIcon={false} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <View style={styles.outerWrapper}>
        <Tabs
          initialPage={initialTab}
          tabBarActiveTextColor="#000"
          tabBarUnderlineStyle={{backgroundColor: DEFAULT_THEME_COLOR}}
          prerenderingSiblingsNumber={0}
          tabBarBackgroundColor="#F1F2FA">
             <Tab heading="New Orders" tabStyle={{ backgroundColor: "#F1F2FA" }} activeTabStyle={{ backgroundColor: "#F1F2FA" }} >
              <FlatList 
                data={[1,2,3,4]}
                renderItem={({item, index}) => {
                  return <OrderListItem onPress={() =>  navigation.navigate('NewOrder')} />
                }}
              />
            </Tab>
            <Tab heading="Accepted" tabStyle={{ backgroundColor: "#F1F2FA" }} activeTabStyle={{ backgroundColor: "#F1F2FA" }}>
              <FlatList 
                data={[1,2,3,4]}
                renderItem={({item, index}) => {
                  return <OrderListItem onPress={() =>  navigation.navigate('AcceptedOrder', {
                    from: 'accepted'
                  })} />
                }}
              />
            </Tab>
            <Tab heading="In Kitchen" tabStyle={{ backgroundColor: "#F1F2FA" }} activeTabStyle={{ backgroundColor: "#F1F2FA" }}>
              <FlatList 
                data={[1,2,3,4]}
                renderItem={({item, index}) => {
                  return <OrderListItem onPress={() =>  navigation.navigate('AcceptedOrder', {
                    from: 'inKitchen'
                  })} />
                }}
              />
            </Tab>
            <Tab heading="Ready" tabStyle={{ backgroundColor: "#F1F2FA" }} activeTabStyle={{ backgroundColor: "#F1F2FA" }}>
              <FlatList 
                data={[1,2,3,4]}
                renderItem={({item, index}) => {
                  return <OrderListItem onPress={() => navigation.navigate('Invoice')} />
                }}
              />
            </Tab>
        </Tabs>
          
        </View>
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = state => {
  return {
    user: state.userReducer.users
  }
}

export default connect(mapStateToProps, null)(Home)
