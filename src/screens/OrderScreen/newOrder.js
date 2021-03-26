import React, { useState } from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import Header from '../../components/Header'
import { ItemList } from '../../components/List/itemList'
import { fontStyles } from '../../constants/fontStyles'
import Button from '../../components/Button/index'
const car = require('../../assets/images/car.png')
import CustomModal from '../../components/Modal/index'

export const NewOrder = ({navigation}) => {
    const [visible, setVisible] = useState(false)
    return(
        <View style={{flex: 1, backgroundColor: '#fff'}}>
            <CustomModal
                title={"Are you sure you want to reject the order?"}
                modalVisibel={visible}
                btnHorizontal
                
                buttons={[
                    {
                        title: "Yes",
                        titleStyle:{ color: '#000'},
                        onPress: () => {
                            setVisible(false)
                            navigation.navigate("Home", {activeTab : 1})
                        },
                        backgroundColor:"transparent",
                        containerStyle: {width: '45%', marginHorizontal: 10},
                    },
                    {
                        title: "No",
                        onPress: () => {
                            setVisible(false)
                        },
                        containerStyle: {width: '45%', marginHorizontal: 10},
                    }
                ]}
            />
             <Header centerText="New Orders" leftIcon={true} leftIconName="arrow-back" leftButtonPress={() => navigation.goBack()} />
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
                        return <ItemList />
                    }}
                />
            </View>


            <View style={[styles.rowSpaceBtw, styles.btnContainer]}>
                <Button 
                    title="Reject" 
                    lightTheme 
                    onPress={() => {setVisible(true)}}
                    containerStyle={{width: '45%'}}
                 />
                <Button 
                    title="Accept" 
                    onPress={() => {}} 
                    containerStyle={{width: '45%'}}
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
        bottom: 30
    }
})