import { View, Text, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import RestaurantCard from './restaurantCard'

export default function FeatureRow({title, description, users}) {
  return (
    <View>
        <View style={{flexDirection: 'row', justifyContent: 'between', alignItems: 'center', paddingLeft: 6}}>
            <View>
                <Text style={{fontWeight: 700, fontSize: 23, lineHeight: 28, color: '#e0bdcc'}}>{title}</Text>
                <Text style={{color: '#6b7280', fontSize: 12, lineHeight: 16}}>
                    {description}
                </Text>
            </View>
            <TouchableOpacity>
                <Text style={{color: themeColors.text, fontWeight:600, fontSize: 22, paddingLeft: 10}}>See All</Text>
            </TouchableOpacity>
        </View>
        <ScrollView 
            horizontal
            showHorizontalScrollIndicator={false}
            contentContainerStyle={{
                paddingHorizontal: 6,
            }}
            style={{flex: 1, paddingTop: 10, paddingBottom: 10}}>
                {
                    users.map((restaurant, index)=>{
                        return (
                            <RestaurantCard
                                item={restaurant}
                                key={index}
                            />
                        )
                    })
                }
            </ScrollView>
    </View>
  )
}