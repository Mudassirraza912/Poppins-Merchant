import { StyleSheet, Dimensions, Text, View, ScrollView } from 'react-native';
import React, { Component, useState } from 'react';
// import { Constants, Svg } from 'expo';
const { width } = Dimensions.get('window')
import Svg, {
    Polygon,
} from 'react-native-svg';
import Header from '../Header';
import { fontStyles } from '../../constants/fontStyles';
import Ionicons from 'react-native-vector-icons/Ionicons'
import Button from '../Button';
import CustomModal from '../Modal';

const Invoice = ({ navigation }) => {
    const renderZigZagView = () => {
        let nodes = []
        for (var i = 0; i < 40; i++) {
            const point = `${20 * i},0 ${20 * i + 10},10 ${20 * (i + 1)},0`
            nodes.push(
                <Polygon
                    points={point}
                    fill="#fff"
                    stroke="#fff"
                    strokeWidth="1"
                />
            )
        }
        return nodes
    }

    const [visible, setVisible] = useState(false)
    return (
        <View style={styles.container}>
            <CustomModal
                title={"Are you sure you want to reject the order?"}
                modalVisibel={visible}
                btnHorizontal
                buttons={[
                    {
                        title: "No",
                        titleStyle: { color: '#000' },
                        onPress: () => {
                            setVisible(false)
                        },
                        backgroundColor: "transparent",
                        containerStyle: { width: '45%', marginHorizontal: 10 },
                    },
                    {
                        title: "Yes",
                        onPress: () => {
                            setVisible(false)
                            navigation.navigate("Home", { activeTab: 1 })
                        },
                        containerStyle: { width: '45%', marginHorizontal: 10 },
                    }
                ]}
            />
            <Header
                centerText="Invoice"
                leftIconName="arrow-back"
                leftButtonPress={navigation.goBack}
            />
            {/* <View style={{ width, height: 100, backgroundColor: 'cyan' }} /> */}
            <ScrollView contentContainerStyle={{ paddingVertical: "10%" }}>
                <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                    <View style={styles.invoiceContainer} >
                        <View style={{ padding: 10 }}>
                            <Text style={[fontStyles.ProximaRegularP1, styles.itemContainer]}>Orders: ABCDE1234</Text>
                            <Text style={[fontStyles.ProximaRegularP2, styles.itemContainer, styles.lightColor]}>Date: 1 March 2021</Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <Text style={[fontStyles.ProximaRegularP2, styles.itemContainer]}>Invoice To:</Text>
                            <Text style={[fontStyles.ProximaRegularP2, styles.itemContainer, styles.lightColor]}>David White</Text>
                        </View>
                        <View style={{ padding: 10 }}>
                            <Text style={[fontStyles.ProximaRegularP2, styles.itemContainer]}>Invoice From:</Text>
                            <Text style={[fontStyles.ProximaRegularP2, styles.itemContainer, styles.lightColor]}>McDonald's</Text>
                            <Text style={[fontStyles.ProximaRegularP2, styles.itemContainer, styles.lightColor]}>102  Trouser Leg Road, Springfield</Text>
                        </View>
                        <View style={[styles.divider, { marginTop: 10 }]} />
                        <View style={styles.cartDetails}>
                            <View>
                                <Text style={[fontStyles.ProximaSemiBoldSmall]}>1{"  "}1 pc Chicken Mcdo w/ Rice</Text>
                                <Text style={[fontStyles.ProximaRegularP2, styles.itemContainer, styles.lightColor]}>{"    "}Chicken and Rice</Text>
                            </View>
                            <View>
                                <Text style={fontStyles.ProximaRegularP2}>$5.00</Text>
                                <Ionicons name="chevron-down" size={20} color={"#6905DB"} style={[styles.itemContainer, { alignSelf: "flex-end" }]} />
                            </View>
                        </View>
                        <View style={[styles.divider, { marginTop: 10 }]} />
                        <View style={styles.cartDetails}>
                            <View>
                                <Text style={[fontStyles.ProximaSemiBoldSmall]}>1{"  "}1 pc Chicken Mcdo w/ Rice</Text>
                                <Text style={[fontStyles.ProximaRegularP2, styles.itemContainer, styles.lightColor]}>{"    "}Chicken and Rice</Text>
                            </View>
                            <View>
                                <Text style={fontStyles.ProximaRegularP2}>$5.00</Text>
                                <Ionicons name="chevron-down" size={20} color={"#6905DB"} style={[styles.itemContainer, { alignSelf: "flex-end" }]} />
                            </View>
                        </View>
                        <View style={[styles.divider, { marginTop: 10 }]} />

                        <View style={styles.orderDetails}>
                            <View style={styles.orderDetailsSubContainer}>
                                <Text style={fontStyles.ProximaRegularP2}>Payment</Text>
                                <Text style={fontStyles.ProximaRegularP2}>Credit Card</Text>
                            </View>
                            <View style={styles.orderDetailsSubContainer}>
                                <Text style={fontStyles.ProximaRegularP2}>Subtotal</Text>
                                <Text style={fontStyles.ProximaRegularP2}>$5.00</Text>
                            </View>
                            <View style={styles.orderDetailsSubContainer}>
                                <Text style={fontStyles.ProximaRegularP2}>Fees & Taxes</Text>
                                <Text style={fontStyles.ProximaRegularP2}>$1.00</Text>
                            </View>
                            <View style={styles.orderDetailsSubContainer}>
                                <Text style={fontStyles.ProximaSemiBold}>Total</Text>
                                <Text style={fontStyles.ProximaSemiBold}>$6.00</Text>
                            </View>

                            <Button
                                title="Confirm pick up"
                                containerStyle={{ marginTop: 20 }}
                                onPress={() => setVisible(true)}
                            />

                        </View>

                        <Svg height={10} width={width - 50} style={{ top: 10 }}>
                            {renderZigZagView()}
                        </Svg>
                    </View>

                </View>
            </ScrollView>
        </View>
    );



}

export default Invoice

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFBE00',
    },
    invoiceContainer: { width: width - 50, backgroundColor: "#fff", borderTopRightRadius: 10, borderTopLeftRadius: 10 },
    itemContainer: {
        marginTop: 5
    },
    lightColor: {
        color: "#6A7C92"
    },
    divider: {
        backgroundColor: '#E6F0FC',
        height: 1,
        width: '100%'
    },
    cartDetails: {
        backgroundColor: "#fff",
        paddingVertical: 15,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    orderDetails: {
        backgroundColor: "#fff",
        marginTop: 5,
        paddingVertical: 15,
        paddingBottom: 30
    },
    orderDetailsSubContainer: {
        flexDirection: 'row',
        alignSelf: 'center',
        width: "90%",
        justifyContent: "space-between",
        paddingVertical: 15
    }
});