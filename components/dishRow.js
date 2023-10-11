import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";

export default function DishRow({item}) {
  return (
    <View style={{direction: 'flex',flexDirection: 'row', flexWrap: 'wrap', alignItems: 'center', backgroundColor: 'white', borderRadius: 30, shadowRadius: 20, marginBottom: 15, marginRight: 25}}>
      <Image style={{borderRadius: 30, height: 100, width: 100, margin: 15}}
            source={item.image} />
        <View style={{flex: 1}}>
            <View style={{paddingBottom: 15}}>
                <Text style={{fontSize: 18, paddingBottom: 5}}>{item.name}</Text>
                <Text style={{color: 'gray', fontWeight: 600}}>{item.description}</Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'between', paddingLeft: 3, alignItems: 'center'}}>
                <Text style={{color:'#585858', fontSize: 20, fontWeight: 700}}>
                    ${item.price}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingLeft: 120}}>
                    <TouchableOpacity style={{padding: 1, borderRadius: 50, backgroundColor: 'orange'}}>
                        <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                    </TouchableOpacity>

                    <Text style={{paddingLeft: 7, paddingRight: 7, fontSize: 18}}>
                        {2}
                    </Text>
                    
                    <TouchableOpacity style={{padding: 1, borderRadius: 50, backgroundColor: 'orange'}}>
                        <Icon.Plus strokeWidth={2} height={20} width={20} stroke={'white'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    </View>
  )
}