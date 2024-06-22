import { useNavigation } from "@react-navigation/native";
import { useContext, useEffect, useState } from "react";
import { KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, View, Text, TouchableOpacity, Alert, ScrollView  } from "react-native"
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { StatusBar } from "expo-status-bar";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../FirebaseConfig/Firebase.config.key";
import { ScreenLoaderWithOpacity } from "../Loader/ScreenLoaderWithOpacity";
import { Switch, } from "react-native-paper";
import { AppContext } from "../Context/AppContext";


export function ServiceAppointment({route}) {
    const bgColor = "#493d8a";
    const navigator = useNavigation();
    const {Name, Description} = route.params;
    const {user} = useContext(AppContext)


    const [loadAnimation, setLoadAnimation] = useState(false);
    const [isSwitchOn, setIsSwitchOn] = useState(true);
    const [mapRegion, setMapregion] = useState({
    });

    // 
    const ToggleButton = async () => {
        setIsSwitchOn(!isSwitchOn);
    };

    const userLocation = async () => {
        let {status} = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
            setErrorMsg("Permisson to access Location was denied")
        }
        let location = await Location.getCurrentPositionAsync({enableHighAccuracy: true});
        let address = Location.reverseGeocodeAsync(location.coords);
        setMapregion({
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        })
    }

    useEffect(() => {
        userLocation();
    }, [])


    const BookService = async () => {
        try {
            setLoadAnimation(!loadAnimation)
            await setTimeout(() => {
                setLoadAnimation(loadAnimation)
                const Booking =  setDoc(doc(db, "Bookings", JSON.parse(user).user_uid), {
                    ServiceType: Name
                });
                Alert.alert("Success", "Service Booked", [{
                    text: "Continue",
                    onPress: () => {
                        setLoadAnimation(!loadAnimation)
                        setTimeout(() => {
                            setLoadAnimation(loadAnimation);
                            navigator.navigate("HomeScreen")
                        }, 2000);
                    }
                }])
            }, 2000);
        }catch{
            Alert.alert("Error", "Failed to Book Service")
        }
    }
    return(
        <KeyboardAvoidingView  style={{flex: 1, width: "100%",}} behavior={Platform.OS=="ios" ? "padding" : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flex: 1, width: "100%"}}>
                    <StatusBar style="dark"/>
                    <ScreenLoaderWithOpacity controlState={loadAnimation}/>
                    {/*  */}
                    <View style={{flex: 1, width: "100%", borderBottomWidth: 4}}>
                        <MapView style={{width: "100%", height: "100%", borderColor: bgColor}}
                        regionegion={mapRegion} 
                        >
                            <Marker coordinate={mapRegion} title="Marker"/>
                        </MapView>
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} bounces={false} style={{flex: 1}}>
                        <View style={{paddingHorizontal: 10}}>
                            {/* Inside will show address and information of hospital including resevation time */}
                            <View style={{width: "100%", marginTop: 20}}></View>


                            {/* This section will get who want to donate unanonimously */}
                            <View style={{width: "100%", flexDirection: "row", marginHorizontal: 10 }}>
                                <Switch value={isSwitchOn} onValueChange={ToggleButton}/>
                                <Text style={{fontSize: 16, fontWeight: "400", marginLeft: 10, marginTop: 5}}>Allow Donation Public</Text>
                            </View>
                            {/* The Below view will hold the reservation button */}
                            <View style={{width: "100%", marginTop: 15, paddingHorizontal: 10}}>
                                <View style={{width: "100%", backgroundColor: bgColor, paddingVertical: 15, borderRadius: 50}}>
                                    <TouchableOpacity onPress={BookService}>
                                        <View style={{width: "100%", alignItems: "center"}}>
                                            <Text style={{color: "white",fontSize: 20, letterSpacing: 3, fontWeight: "bold"}}>Book Appointment</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </ScrollView>

                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}