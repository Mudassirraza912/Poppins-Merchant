import React from 'react'
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { DEFAULT_THEME_COLOR, DISABLE_BUTTON_COLOR, LIGHT_BUTTON_COLOR, DISABLE_BUTTON_TEXT_COLOR, FACEBOOK_BUTTON_COLOR } from '../../constants/colors'

import FontAwsome from 'react-native-vector-icons/FontAwesome'
import Modal from 'react-native-modal'
import { fontStyles } from '../../constants/fontStyles'
import Button from '../Button'
import { useState } from 'react'

const InStockModal = ({
    title = "1 pc Chicken Mcdo w/ Rice",
    discription = "How long will the item be deactivated?",
    modalVisibel = false,
    setModalVisible = () => { },
    containerStyle = {},
    titleStyle = {},
    descriptionStyle = {},
    onPress = () => { },
    btnHorizontal = false,
    buttons = [
        {
            title: "Close",
            containerStyle: {},
            titleStyle: {},
            lightTheme: false,
            disabled: false,
            backgroundColor: DEFAULT_THEME_COLOR,
            onPress: () => { },
            textColor: "#fff"
        },
        {
            title: "Close",
            containerStyle: {},
            titleStyle: {},
            lightTheme: true,
            disabled: false,
            backgroundColor: DEFAULT_THEME_COLOR,
            onPress: () => { },
            textColor: "#fff"
        },
    ],
    stockText = "In Stock",
    stockTextStyle = {},
    onChangeItem = (selectedItem) => { }
}) => {

    const [boxes] = useState([
        {
            title: "30",
            subTitle: "min",
            id: 1
        },
        {
            title: "60",
            subTitle: "min",
            id: 2
        },
        {
            title: "90",
            subTitle: "min",
            id: 3
        },
        {
            title: "120",
            subTitle: "min",
            id: 4
        },
        {
            title: "",
            subTitle: "Tomorrow",
            id: 5
        },
        {
            title: "",
            subTitle: "Until turn it back on",
            id: 6
        },
    ])

    const [selected, setSelected] = useState(null)

    const handleChange = (item) => {

        setSelected(item.id)
        onChangeItem(item)
    }

    return (
        <Modal
            isVisible={modalVisibel}
            animationIn="zoomInUp"
            animationOut="zoomOutDown"
            backdropOpacity={0.4}
            coverScreen
            animationInTiming={1000}
            animationOutTiming={1000}
            onBackButtonPress={() => setModalVisible(false)}
            onBackdropPress={() => setModalVisible(false)}>
            <View style={[{ backgroundColor: "#fff", borderRadius: 20, paddingVertical: 20, alignItems: "center" }, containerStyle]}>



                <Text style={[styles.titleStyle, { ...fontStyles.ProximaBoldH2, width: "95%", textAlign: "center" }, titleStyle]}>{title}</Text>

                {stockText !== '' && <Text style={[{ textAlign: "center", marginTop: 10, color: "#05C21C" }, stockTextStyle]}>{stockText}</Text>}

                <Text style={[styles.titleStyle, { ...fontStyles.ProximaRegularP2, textAlign: "center", width: "85%" }, descriptionStyle]}>{discription}</Text>

                <View style={{ width: "100%", marginTop: 20, }}>
                    <FlatList
                        numColumns={3}
                        data={boxes}
                        columnWrapperStyle={{ width: '90%', justifyContent: 'space-evenly', alignSelf: "center" }}
                        renderItem={({ item, index }) => {
                            return (
                                <TouchableOpacity onPress={() => handleChange(item)} activeOpacity={0.7} style={[styles.boxContainer, { backgroundColor: (selected && selected == item.id) ? "#FFBE00" : "#F1F2FA" }]}>
                                    {item.title !== "" && <Text style={[fontStyles.ProximaBoldH2]}>{item.title}</Text>}
                                    {item.subTitle !== "" && <Text style={[fontStyles.ProximaRegularP2, { textAlign: "center" }]}>{item.subTitle}</Text>}
                                </TouchableOpacity>
                            )
                        }}
                    />
                </View>

                <View style={{ width: "100%", marginTop: 20, }}>
                    <FlatList
                        numColumns={btnHorizontal ? 2 : 0}
                        data={buttons}
                        columnWrapperStyle={buttons.length > 1 ? { width: '100%', justifyContent: 'center' } : undefined}
                        renderItem={({ item, index }) => <Button {...item} />}
                    />
                </View>
            </View>
        </Modal>
    )
}

export default InStockModal

const styles = StyleSheet.create({
    titleStyle: {
        marginTop: 20
    },
    boxContainer: {
        backgroundColor: "#F1F2FA",
        width: "30%",
        margin: 5,
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        padding: 10
    }
})
