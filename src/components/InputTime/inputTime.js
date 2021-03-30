
// import * as React from 'react'
// import { ViewStyle, TouchableOpacity, TextStyle, Image } from 'react-native'
// import { Text } from '..'
// import { palette } from '../../theme/palette'
// import { spacing } from '../../theme'
// import assets from '../../../assets/index'
// import DateTimePickerModal from 'react-native-modal-datetime-picker'
// import moment from 'moment'

// export interface InputTimerops {
//   value?: Date
//   onTimeChange: (date) => void
//   placeHolderText?: string
//   style?: ViewStyle
//   textStyle?: TextStyle
// }

// const localTextStyle = {
//   fontSize: 14,
//   fontFamily: 'Poppins-SemiBold',
//   color: palette.black,
// } as TextStyle
// const BASE_VIEW: ViewStyle = {
//   borderRadius: 12,
//   justifyContent: 'space-between',
//   alignItems: 'center',
//   alignSelf: 'stretch',
//   flexDirection: 'row',
//   minHeight: 48,
//   backgroundColor: palette.white,
//   borderWidth: 1,
//   paddingVertical: 14,
//   paddingHorizontal: spacing[5],
//   marginVertical: spacing[3],
//   borderColor: palette.borderColor,
//   shadowColor: 'rgba(0, 0, 0, 0.15)',
//   shadowOffset: {
//     width: 1,
//     height: 4,
//   },
//   shadowOpacity: 0.2,
//   elevation: 4,
// }

// /**
//  * Stateless functional component for your needs
//  *
//  * Component description here for TypeScript tips.
//  */
// export function InputTime(props: InputTimerops) {
//   // grab the props
//   const { placeHolderText, style, value = '', textStyle, ...rest } = props

//   const [selectedValue, setSelectedValue] = React.useState(value ? moment(value).format('HH:mm') : '')
//   const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false)

//   const showTimePicker = () => {
//     setTimePickerVisibility(true)
//   }

//   const hideTimePicker = () => {
//     setTimePickerVisibility(false)
//   }
//   const content = (
//     <Text text={selectedValue.toString() || placeHolderText} style={[localTextStyle, textStyle]} />
//   )
//   // main Render
//   return (
//     <>
//       <TouchableOpacity style={[BASE_VIEW, style]} {...rest} onPress={() => showTimePicker()}>
//         {content}
//         <Image source={assets.clock} />
//       </TouchableOpacity>
//       {/* Modal on select input click */}
//       <DateTimePickerModal
//         isVisible={isTimePickerVisible}
//         mode="time"
//         onConfirm={time => {
//           setSelectedValue(moment(time).format('HH:mm'))
//           props.onTimeChange(time)
//           hideTimePicker()
//         }}
//         onCancel={hideTimePicker}
//       />
//     </>
//   )
// }
