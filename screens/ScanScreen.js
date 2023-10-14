import { View, Text, SafeAreaView,TouchableWithoutFeedback, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import * as Icon from "react-native-feather";

export default function ScanScreen() {
  const homepage = useNavigation();
  const userpage = useNavigation();
  const scanpage = useNavigation();
  return (
    <SafeAreaView>
      <View>
        <Text>HI THERE</Text>
      </View>
    
                {/* EndBar */}
          <View style={{position: 'absolute', top: 830, width: '100%'}}>
            <View style={{backgroundColor: 'white', flexDirection:"row",justifyContent:"space-between", paddingTop: 15,paddingBottom: 17, paddingRight: 40, paddingLeft: 40}}>
                <TouchableWithoutFeedback onPress={()=> homepage.navigate('Home')}>
                  <Icon.Home strokeWidth={2} stroke={'#FF8C00'} height={30} width={30}/>
                </TouchableWithoutFeedback>
                <Icon.MapPin strokeWidth={2} stroke={'#FF8C00'} height={30} width={30}/>
                <TouchableWithoutFeedback onPress={()=> scanpage.navigate('Scan')}>
                    <View style={{borderRadius:50, padding: 20, backgroundColor:'green', bottom: 30 }}>
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
