import React from 'react'
import { useState } from 'react'
import { Dimensions, Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import ImageCropPicker from 'react-native-image-crop-picker'
import Button from '../../../components/Button'
import Header from '../../../components/Header'
import Input from '../../../components/Input'
import { NotificationSettingList } from '../../../components/List/notificationSettingList'
import { fontStyles } from '../../../constants/fontStyles'

const imageContainer = require("../../../assets/images/Rectangle.png")
const defaultImage = require('../../../assets/images/select_default.png')

const { width } = Dimensions.get("screen")

const imageHeight = (width / 2) + 10

const AddNewItem = ({ navigation }) => {

    const [image, setImage] = useState(null)

    const pickImage = async () => {
        try {
            let image = await ImageCropPicker.openPicker({
                multiple: false,
                // height: 512,
                // width: 512
            })
            console.log(image)

            setImage({
                name: image.filename,
                uri: image.path,
                type: image.mime
            })
        } catch ({ message }) {
            console.log("Error", message)
        }
    }

    return (
        <View style={styles.container}>
            <Header
                centerText="Add New Item"
                leftIconName="arrow-back"
                leftButtonPress={navigation.goBack}
                renderRightComponent={() => (
                    <TouchableOpacity>
                        <Text>Save</Text>
                    </TouchableOpacity>
                )}
            />
            <ScrollView contentContainerStyle={{ paddingBottom: '20%' }}>
                <View style={[styles.container, { width: "90%", alignSelf: "center" }]}>
                    <Input
                        label="Name"
                    />
                    <Input
                        label="Category"
                        placeholder={"Select Category"}
                        containerStyle={{ width: '100%' }}
                        editable={false}
                        InputContainerComponent={TouchableOpacity}
                        onInputContainerPress={() => navigation.navigate("SelectCategory")}
                    />

                    <View>
                        <Text style={[styles.defaulLableStyle, fontStyles.ProximaRegularP2, {}]}>
                            {"Upload Photo"}
                        </Text>

                        <ImageBackground source={imageContainer} style={{ height: imageHeight, width: width - 45 }}>
                            <TouchableOpacity onPress={pickImage} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5 }}>
                                {image ? <Image source={image} style={{ height: '100%', width: '100%' }} /> : <>
                                    <Image source={defaultImage} style={{ height: 46, width: 51 }} />
                                    <Text style={[fontStyles.ProximaRegularP2, { color: '#6A7C92', paddingVertical: 10 }]}>Upload photo of your product</Text>
                                    <Text style={[fontStyles.ProximaRegularP2, { color: '#6A7C92', paddingVertical: 10 }]}>500 px X 500 px</Text>
                                </>}
                            </TouchableOpacity>
                        </ImageBackground>
                    </View>

                    <Input
                        label="Write Description"
                        containerStyle={{ height: 140 }}
                    />
                    <Input
                        label="Price"
                        leftComponent
                        renderLeftComponent={() => (
                            <View>
                                <Text style={fontStyles.ProximaRegularP1} >$</Text>
                            </View>
                        )}
                        inputStyle={{ marginLeft: 10 }}
                    />
                    <Input
                        label="Preparation Time"
                        leftComponent
                        renderLeftComponent={() => (
                            <View>
                                <Text style={fontStyles.ProximaRegularP1} >min</Text>
                            </View>
                        )}
                        inputStyle={{ marginLeft: 10 }}
                    />
                    <NotificationSettingList
                        title={"Available in stock"}
                    />
                    <Input
                        label="Subcategories"
                        optional
                    />
                    <Input
                        label="Subcategories Price"
                        leftComponent
                        renderLeftComponent={() => (
                            <View>
                                <Text style={fontStyles.ProximaRegularP1} >$</Text>
                            </View>
                        )}
                        inputStyle={{ marginLeft: 10 }}
                    />

                    <Button
                        title={"Add More Subcategory"}
                        containerStyle={{ width: '100%', marginTop: 10 }}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default AddNewItem

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff"
    },
    defaulLableStyle: {
        paddingVertical: 5,
        maxWidth: '100%',
        alignSelf: 'flex-start'
    }
})
