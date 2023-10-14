import { View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { categories } from '../constants'



export default function Categories() {

  return (
    <SafeAreaView style={{ marginHorizontal: 0 }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {categories.map((item, index) => (
          <View key={index} style={{ width: '33%', alignItems: 'center', justifyContent: 'space-between', paddingTop: 20 }}>
            <TouchableOpacity>
              <Image style={{ width: 70, height: 70 }} source={item.image} />
            </TouchableOpacity>
            <Text style={{ paddingTop: 10 }}>{item.name}</Text>
          </View>
        ))}
      </View>
    </SafeAreaView>
  )
}
