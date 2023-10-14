import { View, Text, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({item}) {
    const navigation = useNavigation();
  return (
    <TouchableWithoutFeedback 
        onPress={()=> navigation.navigate('Scan',{...item})}
    >
      <View style={{marginRight: 10, backgroundColor: "white", borderRadius: 10, shadowColor: 'orange',shadowOffset: { width: 0, height: 2 },shadowOpacity: 0.2, shadowRadius: 4}}>
        <Image style={{height: 120, width: 260, borderTopLeftRadius: 10, borderTopRightRadius: 10}} source={item.image} />
        <View style={{paddingLeft: 3, paddingRight: 3, paddingBottom: 4, marginBottom: 8}}>
            <Text style={{fontSize: 18, lineHeight: 28, fontWeight: 700, paddingTop: 2}}>{item.name}</Text>
            <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 7, padding: 3}}>
                <Image source={require('../assets/images/fullStar.png')} style={{height: 15, width: 15}} />
                <Text style={{fontSize: 12, lineHeight: 16, padding: 1.2}}>
                    <Text style={{color: '#007f3d'}}>{item.stars}</Text>
                    <Text style={{color:'gray'}}>
                        ({item.reviews} review) · <Text style={{fontWeight:600}}>{item.category}</Text>
                    </Text>
                </Text>
            </View>
            <View style={{flexDirection: 'row',alignItems: 'center', marginRight: 7}}>
                <Icon.MapPin color= 'gray' width='15' height='15' />
                <Text style={{color:'gray', fontSize: 12, lineHeight: 16}}>Nearby· {item.address}</Text>
            </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  )
}