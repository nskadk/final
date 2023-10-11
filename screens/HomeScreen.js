import { View, Text, TextInput, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import Categories from '../components/categories'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { featured } from '../constants'
import FeatureRow from '../components/featureRow'
export default function HomeScreen() {
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
        <StatusBar barStyle="dark-content" />

        {/* search bar */}
        <View style={{paddingTop: 30, paddingLeft: 20}}>
                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                    <Text style={{ fontSize: 30}}>&#9973;</Text> Design your <Text style={{color:'#FF8C00'}}>dream</Text> trip
                </Text>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, paddingTop:30}}>
            <View style={{backgroundColor: '#F8FCFB',flexDirection: 'row', flex: 1, alignItems: 'center', padding: 10, borderRadius: 10, borderWidth: 1, borderColor: '#F8FCFB' }}>
                <Icon.Search height= "25" width="25" stroke='gray' />
                <TextInput placeholder='Find your nesxt destination' placeholderTextColor='gray' style={{marginLeft: 10, fontSize: 16, flex: 1}} />
                <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 1, borderWidth: 0, borderLeftWidth: 2, paddingLeft: 2, borderColor: 'white'}} >
                    <TouchableOpacity>
                        <Icon.MapPin height="23" width="23" stroke="gray" />
                    </TouchableOpacity>
                    <Text style={{color: "gray", paddingRight:10, paddingLeft: 3}}>New York, NYC</Text>
                </View>
            </View>
        </View>

        {/* main */}
        <ScrollView showVerticalScrollIndicator={false}
        contentContainerStyle={{
            paddingBottom: 20,
            paddingTop: 10
        }}
        >
            {/* categories */}
            < Categories />

            {/* featured */}
            <View style={{marginTop: 10, padding: 10}}>
                {
                    [featured, featured, featured].map((item,index)=>{
                        return(
                            <FeatureRow 
                                key={index}
                                title={item.title}
                                restaurants={item.restaurants}
                                description={item.description}
                            />
                        )
                    })
                }
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}
