
import * as React from 'react'
import { ViewStyle, TouchableOpacity, TextStyle, Image, Text, Platform } from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker'
import moment from 'moment'
import { fontStyles } from '../../constants/fontStyles'


const defaulLableStyle = {
    paddingVertical: 5,
    maxWidth: '100%',
    alignSelf: 'flex-start'
}
const BASE_VIEW = {
//   borderRadius: 12,
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   alignSelf: 'stretch',
//   flexDirection: 'row',
//   minHeight: 48,
//   backgroundColor: "#fff",
//   borderWidth: 1,
//   paddingVertical: 14,
//   paddingHorizontal: 15,
//   marginVertical: 10,
//   shadowColor: 'rgba(0, 0, 0, 0.15)',
//   shadowOffset: {
//     width: 1,
//     height: 4,
//   },
//   shadowOpacity: 0.2,
//   elevation: 4,
    backgroundColor: "#F1F2FA",
    padding: Platform.OS == "ios" ? 20 : 5,
    alignSelf: 'center',
    width: '100%',
    borderRadius: 10,
}

/**
 * Stateless functional component for your needs
 *
 * Component description here for TypeScript tips.
 */
export function InputTime({ 
    placeHolderText, 
    style, 
    value = '', 
    textStyle, 
    onTimeChange = () => {},
    label = "Label",
    ...rest }) {
  // grab the props
  

  const [selectedValue, setSelectedValue] = React.useState(value ? moment(value).format('HH:mm') : '')
  const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false)

  const showTimePicker = () => {
    setTimePickerVisibility(true)
  }

  const hideTimePicker = () => {
    setTimePickerVisibility(false)
  }
  const content = (
    <Text style={[fontStyles.ProximaSemiBoldSmall, textStyle]}>{selectedValue.toString() || placeHolderText}</Text>
  )
  // main Render
  return (
    <>
         <Text style={[defaulLableStyle,  fontStyles.ProximaRegularP2]}>{label}</Text>
      <TouchableOpacity style={[BASE_VIEW, style]} {...rest} onPress={() => showTimePicker()}>
        {content}
      </TouchableOpacity>
      {/* Modal on select input click */}
      <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={time => {
          setSelectedValue(moment(time).format('HH:mm'))
          onTimeChange(time)
          hideTimePicker()
        }}
        onCancel={hideTimePicker}
      />
    </>
  )
}
