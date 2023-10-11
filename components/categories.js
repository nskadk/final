import { View, Text, FlatList, Image, TouchableOpacity} from 'react-native'
import React from 'react'
import { categories } from '../constants'



export default function Categories() {

  return (
    <View style={{ marginHorizontal: 0 }}>
      <FlatList
        data={categories}
        numColumns={3} // Số cột
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'space-between', paddingTop: 20 }}>
            <TouchableOpacity>
              <Image style={{ width: 70, height: 70 }} source={item.image} />
            </TouchableOpacity>
            <Text style={{paddingTop: 10}}>{item.name}</Text>
          </View>
        )}
      />
    </View>
  )
}
