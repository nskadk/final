import { View, Text, ImageBackground,TouchableOpacity,ScrollView, TouchableWithoutFeedback, Button, Alert } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native';
import * as Icon from "react-native-feather";

export default function UserScreen() {
    const {params} = useRoute();
    const userpage = useNavigation();
  return (
    <ScrollView>
        <View style={{position: 'relative'}}>
            <ImageBackground style={{width: '100%', height: 350}} imageStyle= {{opacity:0.45}} source={require('../assets/images/userbg.jpg')}>
                    <TouchableOpacity 
                        onPress={()=> userpage.goBack()}
                        style={{position: 'absolute', top: 70, left: 30, backgroundColor: '#f3f4f6', borderRadius: 50, padding: 7}}>
                            <Icon.User strokeWidth={3} stroke={'gray'} width={60} height={60}/>
                    </TouchableOpacity>
                    <Text style={{fontSize: 23, fontWeight: 700, position: 'absolute', top: 75, left: 120}}>Người dùng</Text>
                    <TouchableWithoutFeedback>
                        <Text style={{fontSize: 18, fontWeight:500, position: 'absolute', top: 110, left: 120, color:'#ff7300'}}>Thông tin của tôi</Text>
                    </TouchableWithoutFeedback>
                    <View style={{borderRadius: 10, width: '90%', backgroundColor: 'white', position: 'absolute', top: 180, right: 20, padding: 10}}>
                        <Text style={{fontSize: 18, fontWeight:500, color: '#ff9000'}}>Xem ưu đãi thành viên</Text>
                    </View>
                    <View style={{borderRadius: 10, width: '90%', backgroundColor: 'white', position: 'absolute', top: 250, right: 20, padding: 10, flexDirection: 'row', flex: 1}}>
                        <Text style={{fontSize: 18, fontWeight:500, color: '#ff9000', paddingRight: 10}}>Mã ưu đãi</Text>
                        <Text style={{fontSize: 18, fontWeight:500, color: '#ff9000', paddingRight: 10}}>Credit</Text>
                        <Text style={{fontSize: 18, fontWeight:500, color: '#ff9000'}}>Gift Card</Text>
                    </View>
            </ImageBackground>
            <View style={{borderRadius: 10, width: '90%', backgroundColor: 'white', padding: 10, marginLeft: 20, flex: 1}}>
                        <Text style={{fontSize: 18, fontWeight:500, color: 'black', paddingBottom: 20}}>Đơn hàng của tôi</Text>
                        <Text style={{fontSize: 18, fontWeight:500, color: 'black', paddingBottom: 20}}>Reward</Text>
                        <Text style={{fontSize: 18, fontWeight:500, color: 'black', paddingBottom: 20}}>Thông tin người dùng</Text>
                        <Text style={{fontSize: 18, fontWeight:500, color: 'black', paddingBottom: 20}}>Quản Lí cửa hàng của bạn</Text>
                        <Text style={{fontSize: 18, fontWeight:500, color: 'black', paddingBottom: 20}}>Đánh giá</Text>
                        <Text style={{fontSize: 18, fontWeight:500, color: 'black'}}>Thông báo</Text>
            </View>
            <View style={{borderRadius: 10, width: '90%', backgroundColor: 'white', padding: 10, marginLeft: 20,marginTop: 20, flex: 1}}>
                        <Text style={{fontSize: 18, fontWeight:500, color: 'black', paddingBottom: 20}}>Trợ giúp</Text>
                        <Text style={{fontSize: 18, fontWeight:500, color: 'black', paddingBottom: 20}}>Đánh giá ứng dụng</Text>
                        <Text style={{fontSize: 18, fontWeight:500, color: 'black'}}>Cài đặt</Text>
            </View>
            <View style={{borderRadius: 10, width: '90%', backgroundColor: 'white', padding: 10, marginLeft: 20,marginTop: 20, flex: 1}}>
                        <Text style={{fontSize: 18, fontWeight:500, color: 'black', paddingBottom: 20}}>Cảm nhận của bạn sau khi sử dụng ứng dụng</Text>
                        <Text style={{fontSize: 18, fontWeight:500, color: 'black', paddingBottom: 20}}>Hãy cho chúng tôi biết</Text>
                        <View style={{borderRadius: 10, width: '40%', backgroundColor: '#ff7300'}}>
                            <Button
                                onPress={() => Alert.alert("You've pressed")}
                                title="Làm Khảo Sát"
                                color= 'white'
                                accessibilityLabel="Learn more about this purple button" />
                        </View>
            </View>
        </View>
    </ScrollView>
  )
}