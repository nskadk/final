import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { StyleSheet, View, Dimensions, Text, TouchableOpacity, Image, SafeAreaView, TouchableWithoutFeedback } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { GOOGLE_API_KEY } from "@env"
import Constants from "expo-constants"
import { location } from "../data/location"
import { useNavigation } from "@react-navigation/native"
import * as Icon from "react-native-feather";

// https://docs.expo.dev/versions/latest/sdk/map-view/
// https://www.npmjs.com/package/react-native-google-places-autocomplete
// https://www.npmjs.com/package/react-native-maps-directions

const { width, height } = Dimensions.get("window")

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.02
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
const INITIAL_POSITION = {
	latitude: 10.76487736929764,
	longitude: 106.6555937375142,
	latitudeDelta: LATITUDE_DELTA,
	longitudeDelta: LONGITUDE_DELTA,
}

export default function Map() {  
	const homepage = useNavigation();
	const userpage = useNavigation();
	const scanpage = useNavigation();
	const mappage = useNavigation();
	return (
		<SafeAreaView style={styles.container}>
			<MapView
				style={styles.map}
				provider={PROVIDER_GOOGLE}
				initialRegion={INITIAL_POSITION}>
				<Marker coordinate={INITIAL_POSITION} />
				{location.map((item) => (
					<Marker
						key={item.id}
						coordinate={{
							latitude: item.latitude,
							longitude: item.longitude,
						}}
						title={item.name}
						description={item.address}>
						<Image
							source={require("../assets/images/manufacturer.png")}
							style={{ height: 35, width: 35 }}
						/>
					</Marker>
				))}
			</MapView>
			<GooglePlacesAutocomplete query={{ key: { GOOGLE_API_KEY }, language: "vi" }} />

			<View style={{position: 'absolute', top: 830, width: '100%'}}>
				<View style={{backgroundColor: 'white', flexDirection:"row",justifyContent:"space-between", paddingTop: 15,paddingBottom: 17, paddingRight: 40, paddingLeft: 40}}>
					<TouchableWithoutFeedback onPress={()=> homepage.navigate('Home')}>
						<Icon.Home strokeWidth={2} stroke={'#FF8C00'} height={30} width={30}/>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback onPress={()=> mappage.navigate('Map')}>
						<Icon.MapPin strokeWidth={2} stroke={'#FF8C00'} height={30} width={30}/>
					</TouchableWithoutFeedback>
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
	map: {
		width: Dimensions.get("window").width,
		height: Dimensions.get("window").height,
	},
})
