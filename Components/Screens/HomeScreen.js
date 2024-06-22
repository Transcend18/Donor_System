import { useContext, useState, useEffect } from "react";
import { Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, View, Platform, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { Badge, Searchbar } from "react-native-paper";
import { Ionicons } from '@expo/vector-icons';
import { doc, getDoc } from "firebase/firestore";
import { AppContext } from "../Context/AppContext";
import { Alert } from "react-native";
import { db } from "../FirebaseConfig/Firebase.config.key";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { ScreenLoaderWithOpacity } from "../Loader/ScreenLoaderWithOpacity";


export function HomeScreen(){
    const bgColor = "#493d8a";
    const navigator = useNavigation();
    const [searchQuery, setSearchQuery] = useState("");
    const {user, setUserDetails, userDetails} = useContext(AppContext);

    const getUser = async () => {
        try {
            const onSnap = await getDoc(doc(db, "Users", JSON.parse(user).user_uid))
            if (onSnap.exists()) {
                setUserDetails(onSnap.data());
            } else {
                navigator.navigate("Login");
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (user) {
            getUser()   
        }
    }, [user]);

    const gotoProfile = async () => {
        navigator.navigate("Profile")
    }
    
    return(
        user !== null 
        ?
        <KeyboardAvoidingView behavior={Platform.OS=="ios" ? "padding" : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{width: "100%"}}>
                    <StatusBar style="light"/>
                    {/* Head */}
                    <View style={{backgroundColor: bgColor, width: "100%", paddingTop: 60, paddingHorizontal: 10}}>
                        <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                            <TouchableOpacity onPress={gotoProfile}>
                                <View>
                                    <Image style={{width: 50, height: 50, borderRadius: 50}} source={require("../../assets/Images/user1.jpg")}/>
                                </View>
                            </TouchableOpacity>
                            <Text style={{marginTop: 10,color: "white",fontSize: 26,
                            fontWeight: "700", letterSpacing: 4}}>Home</Text>
                            <View style={{flexDirection: "row"}}>
                                <TouchableOpacity onPress={() => navigator.navigate("Notification")}>
                                    <Badge size={20} children={"+99"} style={{marginTop: -5, fontSize: 14, fontWeight: "bold"}}>
                                        
                                    </Badge>
                                    <Ionicons style={{marginTop: -5, marginRight: 5}} name="notifications" size={34} color="white"></Ionicons>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{marginHorizontal: 10}}>
                            <Searchbar
                            placeholder="Search..."
                            style={{marginTop: 20, marginBottom: 25, height: 50}}
                            value={searchQuery}
                            onChangeText={(text) => setSearchQuery(text)}
                            />
                        </View>
                    </View>


                    {/* Body */}
                    <View>
                        {/* <FlatList
                        
                        /> */}
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    :
    <ScreenLoaderWithOpacity controlState={true}/>
    )
}