import { KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, View, Text, FlatList, TouchableOpacity, Image  } from "react-native"
import { AntDesign } from '@expo/vector-icons';
import ServicesItem from "../Slides/ServicesItem";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScreenLoaderWithOpacity } from "../Loader/ScreenLoaderWithOpacity";
import { collection, getDocs, orderBy, query, where } from "firebase/firestore";
import { db } from "../FirebaseConfig/Firebase.config.key";
export function Services() {
    const bgColor = "#493d8a";
    const navigator = useNavigation();
    const [loadAnimation, setLoadAnimation] = useState(false);
    const [serviceList, setServiceList] = useState([])

    const getServiceList = async () => {
        // This function will get list of services from firebase
        
        const q = query(collection(db, "Services"), where("Title", "==", "list"));
        const querySnapshot = await getDocs(q);
        let temp = [];
        let tempId = []
        querySnapshot.forEach((doc) => {
            temp.push(doc.data());
        })
        setServiceList(temp)
    };
    useEffect(() => {
        getServiceList();
    }, [])


    return(
        <KeyboardAvoidingView  style={{flex: 1, width: "100%",}} behavior={Platform.OS=="ios" ? "padding" : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{flex: 1, width: "100%"}}>

                    {/*  */}
                    <ScreenLoaderWithOpacity controlState={loadAnimation}/>
                    <View style={{backgroundColor: bgColor, width: "100%", paddingTop: 60, paddingHorizontal: 10, paddingBottom: 20}}>
                        <View style={{width: "100%", }}>
                            <Text style={{marginTop: 10,color: "white",fontSize: 26,marginLeft: "35%",
                            fontWeight: "700", letterSpacing: 4}}>Donate</Text>
                        </View>
                    </View>

                    {/* Body */}
                    
                    <View style={{flex: 2, width: "100%", paddingHorizontal: 10}}>
                        <FlatList
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        data={serviceList}
                        renderItem={({item}) => {
                            return (
                                <TouchableOpacity onPress={() => {
                                    setLoadAnimation(!loadAnimation);
                                    setTimeout(() => {
                                        navigator.navigate("ServiceAppointment", {
                                            Name: item.Name,
                                            Description: item.Description
                                        });
                                        setLoadAnimation(false);
                                    }, 2000);
                                }}>
                                    <View style={{borderRadius: 20, paddingHorizontal: 10, borderWidth: 3,
                                        width: "100%", flexDirection: "row", paddingVertical: 20, marginTop: 20, backgroundColor: "#aeafb0", justifyContent: "space-between"}}>
                                        {/* Hold Image, name and description */}
                                        <View style={{flexDirection: "row"}}>
                                            <Image style={{width: 50, height: 60, marginRight: 10, borderWidth: 1}} source={item.image}/>
                                            {/* Hold name and desciption */}
                                            <View>
                                                <Text style={{fontSize: 24, letterSpacing: 2}}>{item.Name}</Text>
                                                <Text style={{fontSize: 16, maxWidth: 300}}>{item.Description}</Text>
                                            </View>
                                        </View>

                                        {/* Hold arrow pointer right */}
                                        <View style={{height: "100%", paddingTop: 18}}>
                                            <AntDesign name="right" size={30} color="black" />
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={(item) => {
                            for (item = 0; item > serviceList.length; item++) {
                                return item
                            }
                        }}
                        />
                        <View style={{marginTop: 20}}></View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}