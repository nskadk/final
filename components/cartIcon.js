import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'

export default function CartIcon() {
  return (
    <View style={{position: 'absolute', bottom: 20, width:'100%',paddingLeft: 20, paddingRight: 20, zIndex: 50}}>
      <TouchableOpacity style={{backgroundColor: themeColors.bgColor(1), flexDirection: 'row', justifyContent: 'between', alignItems: 'center', marginLeft: 5, marginRight: 5, borderRadius: 50, padding: 3,shadowRadius: 4, shadowOffset: {width: 0, height: 2}, shadowColor: 'black', shadowOpacity: 0.3 }}>
        <View style={{padding: 4, borderRadius: 50, backgroundColor: 'rgba(255,255,255,0.3)', margin: 10}}>
            <Text style={{fontWeight: 800, color: 'white', fontSize: 20, lineHeight: 28, paddingLeft: 8, paddingRight: 8}}>
                3
            </Text>
        </View>
        <Text style={{flex: 1,textAlign: 'center',paddingLeft: 70, fontWeight: 800, color: 'white', fontSize: 20, lineHeight: 28}}>
            View Cart
        </Text>
        <Text style={{flex: 1,textAlign: 'right', paddingRight: 20, fontWeight: 800, color: 'white', fontSize: 20, lineHeight: 28}}>
            ${23}
        </Text>
      </TouchableOpacity>
    </View>
  )
}