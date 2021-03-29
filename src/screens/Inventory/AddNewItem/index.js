import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Header from '../../../components/Header'

const AddNewItem = () => {
    return (
        <View style={styles.container}>
            <Header
                centerText="Add New Item"
                leftIconName="arrow-back"
                renderRightComponent={() => (
                    <TouchableOpacity>
                        <Text>Save</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default AddNewItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    }
})
