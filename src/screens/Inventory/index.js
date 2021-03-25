import React from 'react'
import { useState } from 'react'
import { View, Text, Image, StyleSheet, Platform, ScrollView, FlatList } from 'react-native'
import Button from '../../components/Button'
import List from '../../components/List'
import { OrderListItem } from '../../components/Lists/OrderListItem'
import { DEFAULT_THEME_COLOR } from '../../constants/colors'
import { fontStyles } from '../../constants/fontStyles'
import CustomModal from '../../components/Modal'
import InStockModal from '../../components/Modal/inStockModal'

const chickenImage = require("../../assets/images/chicken.png")

const Inventory = ({
    navigation,
}) => {
    const [reactiveModal, setReactiveModal] = useState(false)
    const [inStockModal, setInStockModal] = useState(false)

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }}>
            <CustomModal
                modalVisibel={reactiveModal}
                setModalVisible={setReactiveModal}
                btnHorizontal
                successIcon={false}
                title="1 pc Chicken Mcdo w/ Rice"
                discription={"Do you want to reactivate the item?"}
                buttons={[
                    {
                        title: "No",
                        backgroundColor: "transparent",
                        textColor: "#000",
                        containerStyle: {
                            width: "40%"
                        },
                        titleStyle: {
                            ...fontStyles.ProximaSemiBold,
                            color: "#6A7C92"
                        }
                    },
                    {
                        title: "Yes",
                        containerStyle: {
                            width: "40%"
                        },
                        titleStyle: {
                            ...fontStyles.ProximaSemiBold
                        }
                    }
                ]}
                stockText={"Out of Stock"}
                stockTextStyle={{ ...fontStyles.ProximaRegularP2, color: "#E00000" }}
            />
            <InStockModal
                modalVisibel={inStockModal}
                setModalVisible={setInStockModal}
                buttons={[
                    {
                        title: "Confirm",
                        titleStyle: {
                            ...fontStyles.ProximaSemiBold,
                        },
                        onPress: () => setInStockModal(false)
                    }
                ]}
            />
            <View style={styles.headerContainer}>
                <Text style={[fontStyles.ProximaSemiBold, { fontSize: 24 }]}>Inventory</Text>
                <Button
                    title="Add Item"
                    backgroundColor={"#FFBE00"}
                    textColor={"#000"}
                    containerStyle={styles.button}
                    onPress={() => navigation.navigate("AddNewItem")}
                />
            </View>

            <ScrollView>
                <View style={styles.main}>
                    <View style={styles.blockHeadingContainer}>
                        <Text style={[fontStyles.ProximaRegularP2, { color: DEFAULT_THEME_COLOR }]}>Out of Stock</Text>
                    </View>
                    <List
                        avatar
                        avatarImage={chickenImage}
                        rightIconName="pencil"
                        rightIconColor={"#FFBE00"}
                        title={"6 pc Chicken McShare Box"}
                        titleStyle={[fontStyles.ProximaSemiBoldSmall, { color: "#000" }]}
                        subtitle={"Until Tomorrow"}
                        onPress={() => setReactiveModal(true)}
                    />
                    <View style={styles.blockHeadingContainer}>
                        <Text style={[fontStyles.ProximaRegularP2, { color: "#222533" }]}>Available</Text>
                    </View>

                    <FlatList
                        datgita={[1, 2, 3, 4, 5, 60]}
                        renderItem={({ item }) => {
                            return <List
                                avatar
                                avatarImage={chickenImage}
                                rightIconName="pencil"
                                rightIconColor={"#FFBE00"}
                                title={"6 pc Chicken McShare Box"}
                                titleStyle={[fontStyles.ProximaSemiBoldSmall, { color: "#000" }]}
                                subtitle={"Until Tomorrow"}
                                onPress={() => setInStockModal(true)}
                            />
                        }}

                    />
                </View>
            </ScrollView>
        </View>
    )

}

export default Inventory

const styles = StyleSheet.create({
    main: {
        flex: 1,
    },
    imgStyle: {
        height: 200, width: 200
    },
    headerContainer: {
        padding: 20,
        marginTop: Platform.OS == "android" ? 10 : 40,
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center'
    },
    button: {
        width: undefined,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 50,
        height: undefined
    },
    blockHeadingContainer: {
        backgroundColor: "#F1F2FA",
        paddingVertical: 15,
        paddingStart: 15,
        width: "100%"
    }
})