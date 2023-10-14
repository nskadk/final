import { View, Text,Image,TouchableOpacity,ScrollView  } from 'react-native'
import React from 'react'
import { communities } from '../constants'
import { useEffect, useState } from 'react/cjs/react.production.min';

export default function Communities() {
  return (
        <View style={{paddingTop: 20}}>
            {/* Updates */}
            <View style={{flexDirection: 'row', justifyContent: 'between', alignItems: 'center', paddingLeft: 6}}>
              <Text style={{fontWeight: 700, fontSize: 24, paddingLeft: 15, color:'#e0bdcc'}}>Nearby bin Plastic</Text> 
              <TouchableOpacity>
                <Text style={{color: '#e4bb86', fontWeight:600, fontSize: 21, paddingLeft: 130}}>See All</Text>
              </TouchableOpacity>
              </View>
            <ScrollView>
                <View style={{flexDirection: 'column', justifyContent: 'between', alignItems: 'center', paddingLeft: 6}}>
                  {communities.map((item,index)=> (
                      <TouchableOpacity key= {index} style={{ alignItems: 'center', justifyContent: 'space-between',padding: 5, paddingTop: 20 }}>
                        <View style={{ borderRadius: 20, backgroundColor: '#c7eef2', flexDirection: 'row', alignItems: 'center', padding: 10}}>
                          <Image style={{borderRadius: 20, height: 150, width: 150}} source={item.images}/>
                          <View style={{flex: 1,flexDirection: 'column', borderRadius: 20, padding: 5}}>
                            <Text style={{fontWeight: 700, fontSize: 23, lineHeight: 28, color: 'black'}}>{item.categories}</Text>
                            <Text style={{fontSize: 20, lineHeight: 28, color: 'black'}}>{item.categories}</Text>
                            <Text style={{fontSize: 20, lineHeight: 28, color: 'black'}}>{item.categories}</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                  ))}    
                </View>
            </ScrollView>
        </View>
  )
}