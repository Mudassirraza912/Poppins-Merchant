import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Alert,
  ScrollView,
  StyleSheet,
  Image
} from 'react-native'
import homeStyles from '../Home/Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import Header from '../../components/Header'
import { useState } from 'react'
import { fontStyles } from '../../constants/fontStyles'
import { DEFAULT_THEME_COLOR } from '../../constants/colors'
import Input from '../../components/Input'
import Button from '../../components/Button'
import ImageCropPicker from 'react-native-image-crop-picker'
import OptionsMenu from "react-native-option-menu";
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux'
import { updateProfile } from '../../stores/actions/user.action'
import CustomModal from '../../components/Modal'
import { uploadFile_to_s3_bucket } from '../../helpers/image_upload_to_s3'


const Profile = ({ navigation, updateProfile, userDetails }) => {

  const [image, setImage] = useState("RD")
  const [fullName, setFullName] = useState(userDetails.payload.name)
  const [email, setemail] = useState(userDetails.payload.email)
  const [phoneNo, setphoneNo] = useState(userDetails.payload.phone)
  const [show, setshow] = useState(false)

  const openImageLibrary = async () => {
    try {
      let image = await ImageCropPicker.openPicker({
        multiple: false
      })
      console.log(image)
      const file = {
        name: image.filename,
        uri: image.path,
        type: image.mime
      }
      setImage(file)
      let result  = await uploadFile_to_s3_bucket(file)
    } catch (error) {

    }
  }

  const openCamera = async () => {
    try {
      let image = await ImageCropPicker.openCamera({
        // multiple: false
      })
      const file = {
        name: image.filename,
        uri: image.path,
        type: image.mime
      }
      setImage(file)
      let result  = await uploadFile_to_s3_bucket(file)
    } catch (error) {
      console.log(error)
    }
  }


  const onUpdate = async () => {
    var index = fullName.indexOf(" ")
    var obj = {
      name: fullName,
      email: email,
      phone: phoneNo
    }
    const { status } = await updateProfile(obj)
    if (status) {
      setshow(true)
    }
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <CustomModal
                modalVisibel={show} 
                successIcon 
                title = "Profile Updated"
                discription=""
                buttons={[
                {
                    title: "Close",
                    onPress: () => {
                        navigation.navigate('Home')
                        setshow(false)
                    },
                }
            ]} />
      <Header
        centerText="Profile"
        leftIconName="arrow-back"
        leftButtonPress={navigation.goBack}
      />
      <SafeAreaView style={homeStyles.SafeAreaView2}>
        <ScrollView>
          <View>
            <View style={styles.imageContainer}>
              {typeof image == "string" ? <View style={styles.avatarTitleContainer}>
                <Text style={[fontStyles.ProximaBoldH1, styles.avatarText]}>{image}</Text>
              </View> : <View style={{ width: 84, height: 84, borderRadius: 100, overflow: "hidden" }}>
                  <Image source={image} ro style={{ height: 84, width: 84 }} />
                </View>
              }

              {/* <TouchableOpacity onPress={() => {

              }} activeOpacity={0.7} style={{ marginTop: 10 }}>
                <Text style={[fontStyles.ProximaRegularP1, styles.imageChangText]}>Tap to change</Text>
              </TouchableOpacity> */}

              <OptionsMenu
                color={DEFAULT_THEME_COLOR}
                customButton={<Text style={[fontStyles.ProximaRegularP1, styles.imageChangText]}>Tap to change</Text>}
                options={["Choose from photos", "Open Camera", "Cancel"]}
                actions={[openImageLibrary, openCamera]} />
            </View>

            <View>
              <View style={styles.blockContainer}>
                <Input
                  label="Full Name"
                  keyboardType="default"
                  value={fullName}
                  onChangeText={(e) => setFullName(e)}
                />
              </View>
              <View style={styles.blockContainer}>
                <Input
                  label="Mobile Number"
                  keyboardType="default"
                  type="phoneInput"
                  value={phoneNo}
                  onChangeText={(e) => setphoneNo(e.dialCode + e.unmaskedPhoneNumber)}
                  // changeNumberButton
                  // changeNumberButtonPress={() => navigation.navigate("ChangeNumber")}
                />
              </View>
              <View style={styles.blockContainer}>
                <Input
                  label="Email Address"
                  keyboardType="default"
                  value={email}
                  onChangeText={(e) => setemail(e)}
                  rightComponent
                  renderRightComponent={() => (
                    <TouchableOpacity onPress={() => navigation.navigate("ChangeNumber")} style={{ right: 30, top: 5 }}>
                      <Text style={[fontStyles.ProximaSemiBoldSmall, { color: DEFAULT_THEME_COLOR }]}>CHANGE</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>

              {/* <View style={styles.blockContainer}>
                <Input
                  label="Address"
                  keyboardType="default"
                  value={"102  Trouser Leg Road, Springfie..."}
                />
              </View> */}
            </View>
          </View>
        </ScrollView>
        <View style={[styles.blockContainer, { position: 'absolute', bottom: 20, width: '100%' }]}>
          <Button
            onPress={() => onUpdate()}
            title="Save"
            titleStyle={fontStyles.ProximaSemiBoldSmall}
          />
        </View>
      </SafeAreaView>
    </>
  )
}

const mapStateToProps = (state) => ({
  userDetails : state.userReducer.user
})

const mapDispatchToProps = {
  updateProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    backgroundColor: "#F1F2FA",
    paddingVertical: 20,
    alignItems: 'center'
  },
  avatarTitleContainer: {
    backgroundColor: "#FFBE00",
    height: 84,
    width: 84,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center"
  },
  avatarText: {
    color: "#fff"
  },
  imageChangText: {
    color: DEFAULT_THEME_COLOR,
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 10
  },
  blockContainer: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginTop: 10
  }
})

