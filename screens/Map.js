import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from "react-native-maps"
import { StyleSheet, View, Dimensions, Text, TouchableOpacity } from "react-native"
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete"
import { GOOGLE_API_KEY } from "@env"
import Constants from "expo-constants"

// https://docs.expo.dev/versions/latest/sdk/map-view/
// https://www.npmjs.com/package/react-native-google-places-autocomplete
// https://www.npmjs.com/package/react-native-maps-directions

const { width, height } = Dimensions.get("window")

const ASPECT_RATIO = width / height
const LATITUDE_DELTA = 0.02
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO
const INITIAL_POSITION = {
	latitude: 10.7808,
	longitude: 106.7569,
	latitudeDelta: LATITUDE_DELTA,
	longitudeDelta: LONGITUDE_DELTA,
}

// type InputAutocompleteProps = {
//   label: string;
//   placeholder?: string;
//   onPlaceSelected: (details: GooglePlaceDetail | null) => void;
// };

export default function App() {
	return (
		<View style={styles.container}>
			<MapView
				style={styles.map}
				provider={PROVIDER_GOOGLE}
				initialRegion={INITIAL_POSITION}>
				<Marker coordinate={INITIAL_POSITION} />
			</MapView>
			<GooglePlacesAutocomplete
				placeholder="search"
				onPress={(data, details = null) => {
					console.log(data, details)
				}}
				query={{ key: { GOOGLE_API_KEY }, language: "vi" }}
			/>
		</View>
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
	searchContainer: {
		position: "absolute",
		width: "90%",
		backgroundColor: "white",
		shadowColor: "black",
		shadowOffset: { width: 2, height: 2 },
		shadowOpacity: 0.5,
		shadowRadius: 4,
		elevation: 4,
		padding: 8,
		borderRadius: 8,
		top: Constants.statusBarHeight,
	},
	input: {
		borderColor: "#888",
		borderWidth: 1,
	},
	button: {
		backgroundColor: "#bbb",
		paddingVertical: 12,
		marginTop: 16,
		borderRadius: 4,
	},
	buttonText: {
		textAlign: "center",
	},
})
