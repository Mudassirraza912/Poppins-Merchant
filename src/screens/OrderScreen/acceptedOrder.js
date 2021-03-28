import React from 'react'
import { View, Text, StyleSheet, Image, FlatList, SafeAreaView, ScrollView} from 'react-native'
import Header from '../../components/Header'
import { ItemList } from '../../components/List/itemList'
import { fontStyles } from '../../constants/fontStyles'
import Button from '../../components/Button/index'
import { Map } from '../../components/Map/map'

const car = require('../../assets/images/car.png')

export const AcceptedOrder = ({navigation, route}) => {
    const { from } = route.params
    return(
        <View style={{flex: 1, backgroundColor: '#fff'}}>
        <ScrollView>
            <Header centerText={from == "accepted" ? "Accepted Orders" : "In Kitchen"} leftIcon={true} leftIconName="arrow-back" leftButtonPress={() => navigation.goBack()}  />
                <View style={{backgroundColor: '#F1F2FA', padding: 10}}>
                    <View style={[styles.rowSpaceBtw, styles.blockContainer, {marginTop: 10}]}>
                        <View>
                            <Text style={fontStyles.ProximaSemiBold}>
                                David W.
                            </Text>
                        </View>

                        <View style={[styles.row, {marginHorizontal: 3}]}>
                            <Image source={car} />   
                            <Text style={[fontStyles.ProximaRegularP2 ,{marginHorizontal: 3, color: '#6A7C92'}]}>Pickup in:</Text> 
                            <Text style={{marginHorizontal: 3}}>10 mins</Text>                 
                        </View>
                    </View>

                    <View style={styles.blockContainer}>
                        <Text style={[fontStyles.ProximaRegularP2, {color: '#6A7C92'}]}>
                            Order #45
                        </Text>
                    </View>
                </View>
            <View style={[styles.blockContainer, styles.rowSpaceBtw, {paddingVertical: 15}]}>
                <Text style={fontStyles.ProximaSemiBoldSmall}>Orders (2 items)</Text>
                <Text style={fontStyles.ProximaSemiBoldSmall}>$17.00</Text>
            </View>
            <View style={styles.divider} /> 

            <View style={[styles.blockContainer, {paddingVertical: 15}]}>
                <FlatList
                    data={[1,2]}
                    renderItem={({item, index}) => {
                        return <ItemList isDropDown  />
                    }}
                />
            </View>

            <View style={styles.blockContainer}>
                <Map
                    mapStyle={[styles.mapStyle, { overflow: 'hidden'}]} 
                    containerStyle={[styles.mapStyle, styles.mapContainer]} 
                />
            </View>

        </ScrollView>

        <View style={[styles.btnContainer]}>
            <Button 
                title={from == "accepted" ? "Prepare Order" : "Ready for pickup"}
                onPress={() => {}}
             />
          
        </View>
    </View>

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
    },
    btnContainer: {
        alignSelf: 'center',
        position: 'absolute',
        bottom: 30,
        width: '100%'
    },
    mapStyle: {
        height: 300,
        width: "99%",
    },
    mapContainer: { 
        justifyContent: 'flex-start', 
        // borderTopLeftRadius: 20,
        // borderTopRightRadius: 20,
        borderRadius: 20,
        overflow:'hidden',
    },
})