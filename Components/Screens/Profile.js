import { View, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, 
    TouchableOpacity, Text, Keyboard, ScrollView, Alert } 
from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../Context/AppContext";
import { useNavigation, StackActions } from "@react-navigation/native";
import { ScreenLoaderWithOpacity } from "../Loader/ScreenLoaderWithOpacity";
import { Divider } from "react-native-paper";
import { EditProfile } from "../Loader/EditProfile";

export function Profile({navigation}){
    const bgColor = "#493d8a";
    const [loadAnimation, setLoadAnimatoin] = useState(false);
    const {userToken, logout, user, userDetails, gender, setGender, bloodType, setBloodType, genotype, setGenoType} = useContext(AppContext);
    const [edit, setEdit] = useState(false);

    const checkUserToken = async () => {
        try {
            const token = await AsyncStorage.getItem('userToken');
            if (!token) {
                setLoadAnimatoin(!loadAnimation);
                setTimeout(() => {
                    setLoadAnimatoin(loadAnimation);
                    navigation.popToTop();
                }, 2000);
            } else {
                null;
            };
        } catch (error) {
            Alert.alert('Error','problem fetching authorization token @ home');
        };
    [userToken]};

    useEffect(() => {
        checkUserToken();
    },[userToken]);

    const EditRecords = async () => {
        setEdit(!edit);
    }

    return(
        userDetails !== null
        ?
        <KeyboardAvoidingView style={{flex: 1, width: "100%"}} behavior={Platform.OS=="ios" ? "padding" : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                
                <View style={{flex: 1, width: "100%"}}>
                    <ScreenLoaderWithOpacity controlState={loadAnimation}/>
                    <EditProfile controlState={edit}/>
                    {/*  */}
                    <View style={{backgroundColor: bgColor, width: "100%", paddingTop: 60, paddingHorizontal: 10, paddingBottom: 20}}>
                        <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                            <Text style={{marginTop: 10,color: "white",fontSize: 26,marginLeft: "35%",
                            fontWeight: "700", letterSpacing: 4}}>Profile</Text>
                            <View style={{marginTop: 10}}>
                                <TouchableOpacity onPress={logout}>
                                    <AntDesign name="logout" size={34} color="white" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>

                    {/* Body */}
                    <View style={{flex: 2, paddingHorizontal: 10, width: "100%", paddingTop: 20}}>
                        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                            <View style={{width: "100%", marginBottom: 30}}>
                                <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
                                    <Text style={{fontSize: 18, letterSpacing: 3, fontWeight: "bold"}}>Details</Text>
                                </View>
                                <Divider bold={true} style={{width: "100%", height: 2, alignSelf: "center", marginTop: 8}}/>
                                <View style={{marginTop: 10}}>
                                    <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 5, 
                                    backgroundColor: "#aeafb0", paddingVertical: 15, borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingHorizontal: 10}}>
                                        <View style={{flexDirection: "row"}}>
                                            <MaterialCommunityIcons name="account" size={24} color="black"/>
                                            <Text style={{marginLeft: 5, fontSize: 20}}>Name</Text>
                                        </View>
                                        <Text style={{fontSize: 20, color: bgColor}}>{userDetails.Lastname + ' ' + userDetails.Firstname}</Text>
                                    </View>
                                    <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 5, 
                                    backgroundColor: "#aeafb0", paddingVertical: 15,  paddingHorizontal: 10}}>
                                        <View style={{flexDirection: "row"}}>
                                            <MaterialIcons name="email" size={24} color="black"/>
                                            <Text style={{marginLeft: 5, fontSize: 20}}>Email</Text>
                                        </View>
                                        <Text style={{fontSize: 20, color: bgColor}}>{userDetails.Email}</Text>
                                    </View>
                                    <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 5, 
                                    backgroundColor: "#aeafb0", paddingVertical: 15,  paddingHorizontal: 10}}>
                                        <View style={{flexDirection: "row"}}>
                                            <Fontisto name="genderless" size={24} color="black" />
                                            <Text style={{marginLeft: 5, fontSize: 20}}>Gender</Text>
                                        </View>
                                        <Text style={{fontSize: 20, color: bgColor}}></Text>
                                    </View>
                                    <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 5, 
                                    backgroundColor: "#aeafb0", paddingVertical: 15, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, paddingHorizontal: 10}}>
                                        <View style={{flexDirection: "row"}}>
                                            <FontAwesome name="phone" size={24} color="black"/>
                                            <Text style={{marginLeft: 10, fontSize: 20}}>Phone</Text>
                                        </View>
                                        <Text style={{fontSize: 20, color: bgColor}}>{userDetails.PhoneNumber}</Text>
                                    </View>
                                </View>
                            </View>

                            {/*  */}
                            <View style={{width: "100%", marginBottom: 10}}>
                                <View style={{flexDirection: "row", width: "100%", justifyContent: "space-between"}}>
                                    <Text style={{fontSize: 18, letterSpacing: 3, fontWeight: "bold"}}>Records</Text>
                                    <Divider bold={true} style={{width: "55%", height: 2, alignSelf: "center"}}/>
                                    <TouchableOpacity onPress={EditRecords}>
                                        <View style={{flexDirection: "row"}}>
                                            <AntDesign name="edit" size={24} color={bgColor}/>
                                            <Text style={{fontWeight: "bold",fontSize: 18, letterSpacing: 3, color: bgColor}}>Edit</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{marginTop: 20}}>
                                    <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 5, 
                                    backgroundColor: "#aeafb0", paddingVertical: 15, borderTopRightRadius: 20, borderTopLeftRadius: 20, paddingHorizontal: 10}}>
                                        <View style={{flexDirection: "row"}}>
                                            <Fontisto name="blood-drop" size={24} color="black"/>
                                            <Text style={{marginLeft: 5, fontSize: 20}}>Blood Type</Text>
                                        </View>
                                        <Text style={{fontSize: 20, color: bgColor}}>{bloodType}</Text>
                                    </View>
                                    <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 5, 
                                    backgroundColor: "#aeafb0", paddingVertical: 15,  paddingHorizontal: 10}}>
                                        <View style={{flexDirection: "row"}}>
                                            <FontAwesome6 name="dna" size={24} color="black"/>
                                            <Text style={{marginLeft: 5, fontSize: 20}}>Genotype</Text>
                                            </View>
                                        <Text style={{fontSize: 20, color: bgColor}}>{genotype}</Text>
                                    </View>
                                    <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 5, 
                                    backgroundColor: "#aeafb0", paddingVertical: 15, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, paddingHorizontal: 10}}>
                                        <View style={{flexDirection: "row"}}>
                                            <MaterialIcons name="invert-colors" size={24} color="black" />
                                            <Text style={{marginLeft: 5, fontSize: 20}}>Skin Color</Text>
                                        </View>
                                        <Text style={{fontSize: 20, color: bgColor}}>{gender}</Text>
                                    </View>
                                </View>
                            </View>

                            <Divider bold={true} style={{width: "100%", height: 5, alignSelf: "center", marginBottom: 10}}/>
                            {/* Buttons To Donate or Find Donor */}
                            <View style={{width: "100%"}}>
                                <View style={{width: "100%", marginBottom: 20}}>
                                        <TouchableOpacity onPress={() => {
                                            setLoadAnimatoin(!loadAnimation);
                                            setTimeout(() => {
                                                setLoadAnimatoin(loadAnimation);
                                                navigation.navigate("ClientMatching")
                                            }, 1500);
                                        }}>
                                            <View style={{width: "100%", alignItems: "center", backgroundColor: bgColor, paddingVertical: 15, borderRadius: 20}}>
                                                <Text style={{fontSize: 20, color: "white"}}>Find a Donor</Text>
                                            </View>
                                        </TouchableOpacity>
                                </View>
                                <View style={{width: "100%"}}>
                                        <TouchableOpacity onPress={() => {
                                            setLoadAnimatoin(!loadAnimation);
                                            setTimeout(() => {
                                                setLoadAnimatoin(loadAnimation);
                                                navigation.navigate("Services")
                                            }, 1500);
                                        }}>
                                            <View style={{width: "100%", alignItems: "center", backgroundColor: bgColor, paddingVertical: 15, borderRadius: 20}}>
                                                <Text style={{fontSize: 20, color: "white"}}>Become A Donor</Text>
                                            </View>
                                        </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{alignItems: "center", marginTop: 20}}>
                                <Text style={{fontSize: 12, letterSpacing: 6}}>Tega</Text>
                            </View>
                            {/* End of Body */}
                        </ScrollView>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    :
    <ScreenLoaderWithOpacity controlState={true}/>
    );
};