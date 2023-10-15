import { View, Text, TextInput, ScrollView, FlatList, TouchableOpacity, TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Categories from '../components/categories'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { featured } from '../constants'
import FeatureRow from '../components/featureRow'
import Recommendations from '../components/recommendations'
import Communities from '../components/communities'
import CartIcon from '../components/cartIcon'
import { useNavigation } from '@react-navigation/native';



export default function HomeScreen({item}) {
    const homepage = useNavigation();
    const userpage = useNavigation();
    const scanpage = useNavigation();
    const mappage =  useNavigation();
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
        <StatusBar barStyle="dark-content" />

        {/* search bar */}
        <View style={{paddingTop: 30, paddingLeft: 20, paddingBottom: 50}}>
            <Image style={{borderRadius: 50, height: 70, width: 70, position:'absolute', left: 15, top: 25}} source={require('../assets/images/MustardCoffee.jpg')}/>
                <Text style={{ fontSize: 24, fontWeight: 700, color: '#054009', paddingLeft: 90 }}>Hi Fen</Text>
                <Text style={{color:'#054009', fontWeight: 500, fontSize: 20, padding:5, paddingLeft: 90}}>Helsinki, Finland</Text>
        </View>

        {/* main */}
        <ScrollView 
        contentContainerStyle={{
            paddingBottom: 20,
            paddingTop: 10,
            backgroundColor: 'white',
            borderRadius: 20
        }}
        >
            {/* Hot Right Now */}
            < Recommendations />

            {/* featured */}
            < Communities />
        </ScrollView>

                    {/* EndBar */}
        <View style={{position: 'absolute', top: 830, width: '100%'}}>
            <View style={{backgroundColor: 'white', flexDirection:"row",justifyContent:"space-between", paddingTop: 15,paddingBottom: 17, paddingRight: 40, paddingLeft: 40}}>
                <TouchableWithoutFeedback onPress={()=> homepage.navigate('Home')}>
                    <Icon.Home strokeWidth={2} stroke={'#FF8C00'} height={30} width={30}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=> mappage.navigate('Map')}>
                    <Icon.MapPin strokeWidth={2} stroke={'#FF8C00'} height={30} width={30}/>
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback onPress={()=> scanpage.navigate('Scan')}>
                    <View style={{borderRadius:50, padding: 20, backgroundColor:'#FF8C00', bottom: 30 }}>
                        <Image style={{width: 30, height: 30}} source={require('../assets/images/scanning.png')}/>
                    </View>
                </TouchableWithoutFeedback>
                <Icon.Award strokeWidth={2} stroke={'#FF8C00'} height={30} width={30}/>
                <TouchableWithoutFeedback onPress={()=> userpage.navigate('User')}>    
                    <Icon.User strokeWidth={2} stroke={'#FF8C00'} height={30} width={30}/>
                </TouchableWithoutFeedback>
            </View>
        </View>
    </SafeAreaView>
  )
}
