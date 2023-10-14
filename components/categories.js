import { View, Text, ScrollView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { categories } from '../constants'



export default function Categories() {

  return (
    <View>
      <Text style={{fontWeight: 700, fontSize: 24, paddingLeft: 15, paddingTop:20, color:'#e0bdcc'}}>Ultilities</Text>
      <ScrollView horizontal style={{ marginHorizontal: 20 }}>
        <View style={{ flexDirection: 'row'}}>
          {categories.map((item, index) => (
            <View key={index} style={{ alignItems: 'center', justifyContent: 'space-between', paddingTop: 20 , paddingRight: 20}}>
              <TouchableOpacity>
                <Image style={{ width: 70, height:  70}} source={item.image} />
              </TouchableOpacity>
              <Text style={{ paddingTop: 20, fontSize:20, color: 'white' }}>{item.name}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  )
}
