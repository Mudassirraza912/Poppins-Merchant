import React from 'react'
import { View, Text, StyleSheet, Dimensions, Platform } from 'react-native'
import MapView, { PROVIDER_GOOGLE, } from 'react-native-maps';
import Button from '../Button';

export const Map = ({
    containerStyle = {},
    mapStyle = {},
    coords = null
}) => {
    return (
        <View style={[styles.container, containerStyle]}>

            <MapView
                provider={PROVIDER_GOOGLE} // remove if not using Google Maps
                style={[styles.map, mapStyle]}
                region={coords
                    ?
                    coords :
                    {
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.015,
                        longitudeDelta: 0.0121,
                    }}
            >

            </MapView>
        </View>
    )
}

const { height } = Dimensions.get("screen")

const styles = StyleSheet.create({
    container: {
        height: Platform.OS == "ios" ? height - 90: height-70,
        width: "100%",
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    map: {
        height: "100%",
        width: '100%',
    },
});