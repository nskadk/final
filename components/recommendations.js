import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from 'react-native'
import React from 'react'
import { recommendations } from '../constants'
import * as Icon from "react-native-feather";
import { useEffect, useState } from 'react/cjs/react.production.min';

export default function Recommendations() {
  // const [data, setData]=useState(null);
  // const [dataDirectory, setDataDirectory]=useState(null);
  // const url="http://localhost:8080/api/category";
  // useEffect(()=>{
  //   fetch(url).then(res=>res.json()).then(data=>{
  //     setData(data);
  //   });
  // },[]);
  // const category={
  //   images,categories
  // };
  // function handleGetDirectory(params){
  //   const getDirectory= url +"/"+params;
  //   useEffect(()=>{
  //     fetch(getDirectory).then(res=>res.json()).then(data=>{
  //       setDataDirectory(data);
  //     });
  //   },[]);
  // }
  return (
    <View style={{paddingTop: 20}}>
      {/* Updates */}
      <View style={{flexDirection: 'row', justifyContent: 'between', alignItems: 'center', paddingLeft: 6}}>
        <Text style={{fontWeight: 700, fontSize: 24, paddingLeft: 15, color:'#054009'}}>Materials</Text>
        <TouchableOpacity>
          <Text style={{color: 'grey', fontWeight:600, fontSize: 21, paddingLeft: 220}}>See All</Text>
        </TouchableOpacity>
        </View>
      <ScrollView horizontal>
          <View style={{flexDirection: 'row', justifyContent: 'between', alignItems: 'center', paddingLeft: 6}}>
            {recommendations.map((item,index)=> (
                <TouchableOpacity onPress= {()=>handleGetDirectory(item.name)} key= {index} style={{ alignItems: 'center', justifyContent: 'space-between',padding: 5, paddingTop: 20 }}>
                  <View style={{ borderRadius: 20, backgroundColor:'green', padding: 10, flexDirection: 'column', alignItems: 'center'}}>
                    <Image style={{ borderRadius:20, height: 250, width: 170 }} source={item.image}/>
                    <Text style={{fontWeight: 700, fontSize: 23, lineHeight: 28, padding: 10, color: 'white'}}>{item.name}</Text>
                  </View>
                </TouchableOpacity>
            ))}    
          </View>
      </ScrollView>
    </View>
  )
}