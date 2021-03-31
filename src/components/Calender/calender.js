// import React from 'react'
// import { View } from 'react-native'
// import { CalendarList } from 'react-native-calendars';
// import { DEFAULT_THEME_COLOR } from '../../constants/colors'



// export const Calendar = ({
//     onDayPress = () => {},
//     onVisibleMonthsChange = () => {}
// }) => {

//     return(
//         <View>
//             <CalendarList
//                 theme={{
//                     textSectionTitleColor: DEFAULT_THEME_COLOR, 
                    // 'stylesheet.day.basic': {
                    //     today: {
                    //         backgroundColor: '#FFBE00',
                    //         borderRadius: 100
                    //     },
                    //     todayText: {
                    //       color: '#000',
                    //     }
                    //   },
//                       "stylesheet.calendar.header": {
                          
//                       }
//                 }}
//                 onDayPress={onDayPress}
//                 // Callback which gets executed when visible months change in scroll view. Default = undefined
//                 onVisibleMonthsChange={onVisibleMonthsChange}
//                 // Max amount of months allowed to scroll to the past. Default = 50
//                 pastScrollRange={50}
//                 // Max amount of months allowed to scroll to the future. Default = 50
//                 futureScrollRange={50}
//                 // Enable or disable scrolling of calendar list
//                 scrollEnabled={true}
//                 // Enable or disable vertical scroll indicator. Default = false
//                 showScrollIndicator={true}
//             />
//         </View>
//     )
// }

import React from 'react';
import {Text, View} from 'react-native';
import {CalendarList} from 'react-native-calendars';
import { fontStyles } from '../../constants/fontStyles'
import { DEFAULT_THEME_COLOR } from '../../constants/colors'

export const Calendar = ({
      onDayPress = (date) => {},
      onVisibleMonthsChange = (months) => {}
   }) => {
  return (
    <CalendarList
      onDayPress={onDayPress}
      onVisibleMonthsChange={onVisibleMonthsChange}
      pastScrollRange={24}
      futureScrollRange={24}
      hideExtraDays={false}
      renderHeader={date => {
        const header = date.toString('MMMM yyyy');
        const [month, year] = header.split(' ');
        const textStyle = {
          paddingTop: 10,
          paddingBottom: 10,
          color: '#000',
          paddingRight: 5,
          fontSize: 20
        };

        return (
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              marginTop: 10,
              marginBottom: 10
            }}
          >
            <Text style={[{marginLeft: 5, ...textStyle}, fontStyles.ProximaSemiBoldSmall]}>{`${month}`}</Text>
            {/* <Text style={{marginRight: 5, ...textStyle}}>{year}</Text> */}
          </View>
        );
      }}
      theme={{
        'stylesheet.calendar.header': {
          dayHeader: {
            fontWeight: '600',
            color: DEFAULT_THEME_COLOR
          }
        },
        'stylesheet.day.basic': {
          today: {
            borderColor: '#48BFE3',
            borderWidth: 0.8
          },
          todayText: {
            color: '#5390D9',
            fontWeight: '800'
          }
        },
        'stylesheet.day.basic': {
          today: {
              backgroundColor: '#FFBE00',
              borderRadius: 100
          },
          todayText: {
            color: '#000',
          }
        },
      }}
    />
  );
};

