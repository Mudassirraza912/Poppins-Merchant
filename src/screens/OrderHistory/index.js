import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import Header from '../../components/Header'
import { OrderListItem } from '../../components/Lists/OrderListItem'

const OrderHistory = ({ navigation }) => {
    return (
        <View styles={styles.container}>
            <Header
                centerText="Order History"
                leftIconName="arrow-back"
                leftButtonPress={navigation.goBack}
            />
            <View style={{ backgroundColor: "#fff", height: "100%" }}>
                <FlatList
                    data={[1, 2, 3, 4]}
                    renderItem={({ item, index }) => {
                        return <OrderListItem
                            orderStatus={"Completed"}
                        />
                    }}
                />

            </View>
        </View>
    )
}

export default OrderHistory

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})
