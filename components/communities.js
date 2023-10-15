import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native"
import React from "react"
import { communities } from "../constants"
import { useEffect, useState } from "react/cjs/react.production.min"
import MapView, { LatLng, Marker, PROVIDER_GOOGLE } from "react-native-maps"

export default function Communities() {
	return (
		<View style={{ paddingTop: 20 }}>
			{/* Updates */}
			<View
				style={{
					flexDirection: "row",
					justifyContent: "between",
					alignItems: "center",
					paddingLeft: 6,
				}}>
				<Text style={{ fontWeight: 700, fontSize: 24, paddingLeft: 15, color: "#e0bdcc" }}>
					Nearby bin Plastic
				</Text>
				<TouchableOpacity>
					<Text
						style={{
							color: "#e4bb86",
							fontWeight: 600,
							fontSize: 21,
							paddingLeft: 130,
						}}>
						See All
					</Text>
				</TouchableOpacity>
			</View>
			<ScrollView>
				<View
					style={{
						flexDirection: "column",
						justifyContent: "between",
						alignItems: "center",
						paddingLeft: 6,
					}}>
					{communities.map((item, index) => (
						<TouchableOpacity
							key={index}
							style={{
								alignItems: "center",
								justifyContent: "space-between",
								padding: 5,
								paddingTop: 20,
							}}>
							<View
								style={{
									borderRadius: 20,
									backgroundColor: "white",
									flexDirection: "row",
									alignItems: "center",
									padding: 10,
                                    shadowColor: "black",
                                    shadowOpacity: 0.5,
                                    shadowOffset: {width: 0, height: 2},
								}}>
								<View style={{ borderRadius: 50 }}>
									<MapView
										style={{ height: 100, width: 100 }}
										initialRegion={{
											latitude: 60.1699,
											longitude: 24.9384,
											latitudeDelta: 0.0922,
											longitudeDelta: 0.0421,
										}}
									/>
									<Marker
										coordinate={{ latitude: 60.1699, longitude: 24.9384 }}
									/>
								</View>
								<View style={{ flexDirection: "colum", paddingLeft: 10 }}>
									<Text>150m | 3 min</Text>
                                    <Text style={{fontWeight: 700, fontSize: 23}}>Điểm tập kết 1</Text>
                                    <View style={{ flexDirection: "row", paddingTop: 20}}>
                                        <Text>Plastic</Text>
                                        <Text style={{paddingLeft: 10}}>Paper</Text>
                                    </View>
								</View>

								<View
									style={{
										flex: 1,
										flexDirection: "column",
										borderRadius: 20,
										padding: 5,
									}}>
									<Text
										style={{
											fontWeight: 700,
											fontSize: 23,
											lineHeight: 28,
											color: "black",
										}}>
										{/* {item.categories} */}
									</Text>
									{/* <Text style={{ fontSize: 20, lineHeight: 28, color: "black" }}>
										{item.categories}
									</Text>
									<Text style={{ fontSize: 20, lineHeight: 28, color: "black" }}>
										{item.categories}
									</Text> */}
								</View>
							</View>
						</TouchableOpacity>
					))}
				</View>
			</ScrollView>
		</View>
	)
}
