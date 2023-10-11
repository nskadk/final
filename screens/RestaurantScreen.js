import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { useNavigation, useRoute } from '@react-navigation/native';
import { themeColors } from '../theme';
import DishRow from '../components/dishRow';
import CartIcon from '../components/cartIcon';

export default function RestaurantScreen() {
    const {params} = useRoute();
    const navigation = useNavigation();
    let item = params;
    // console.log('restaurant: ', item);
  return (
    <View>
        <CartIcon />
        <View style={{position: 'relative'}}>
          <Image style={{width: '100%', height: 300}} source={item.image} />
          <TouchableOpacity 
              onPress={()=> navigation.goBack()}
              style={{position: 'absolute', top: 60, left: 30, backgroundColor: '#f3f4f6', borderRadius: 50, padding: 7}}>
                <Icon.ArrowLeft strokeWidth={3} stroke={themeColors.bgColor(1)}/>
          </TouchableOpacity>
        </View>

        <View style={{borderTopLeftRadius: 40, borderTopRightRadius: 40, backgroundColor:'#F0F0F0', marginTop: -35, paddingTop: 20, paddingLeft: 20}}>
          <View style={{paddingRight: 5, paddingLeft: 5}}>

            <Text style={{fontSize: 28, fontWeight: 700 }}>
              {item.name}
            </Text>

              <View style={{display: 'flex',flexDirection: 'row', flexWrap: 'wrap', marginTop: 2, marginBottom: 2, paddingTop: 10, paddingBottom: 20}}>
                <View style={{flexDirection: 'row', alignItems: 'center', paddingRight: 5, paddingBottom: 7}}>
                    <Image source={require('../assets/images/fullStar.png')} style={{height: 16, width: 16}} />
                    <Text style={{fontSize: 15, lineHeight: 16, paddingLeft: 6}}>
                        <Text style={{color: '#007f3d'}}>{item.stars}</Text>
                        <Text style={{color:'gray'}}>
                            ({item.reviews} review) · <Text style={{fontWeight:600}}>{item.category}</Text>
                        </Text>
                    </Text>
                </View>
                <View style={{flexDirection: 'row',alignItems: 'center', marginRight: 7}}>
                  <Icon.MapPin color= 'gray' width='17' height='17' />
                  <Text style={{color:'gray', fontSize: 15, lineHeight: 16, fontWeight: 600, paddingLeft: 6}}>Nearby· {item.address}</Text>
                </View>
              </View>

              <Text style={{color: 'gray', paddingBottom: 20, fontSize: 15}}>{item.description}</Text>
          </View>
          <View style={{ backgroundColor: '#F0F0F0'}}>
            <Text style={{paddingBottom: 30, fontSize: 24, fontWeight: 700}}>Menu</Text>
            {/* dishes */}
            <ScrollView>
              {
                item.dishes.map((dish, index)=> <DishRow item={{...dish}} key={index} />)
              }
            </ScrollView>
          </View>
        </View>
    </View>
  )
}