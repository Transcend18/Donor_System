import { StackActions, useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createUserWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useState } from "react";
import {KeyboardAvoidingView, 
    TouchableWithoutFeedback, View, Text, 
    Platform, Keyboard, 
    Image,
    ScrollView,
    TouchableOpacity,
    Alert} from "react-native";
import { useWindowDimensions } from "react-native";
import { ActivityIndicator, TextInput } from "react-native-paper";
import { db, auth } from "../FirebaseConfig/Firebase.config.key";
import { doc, setDoc } from "firebase/firestore";

export function SignupScreen(){
    const navigator = useNavigation()
    const {width} = useWindowDimensions();

    const [hidePassword, setHidePassword] = useState(true);
    const [selectedGender, setSelectedGender] = useState("")

    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("")
    const [address, setAddress] = useState("")
    const [gender, SetGender] = useState(["Male", "Femail"])
    
    const [loadAnimation, setLoadAnimation] = useState(false);


    const CreateCLient = async () => {
        // API CALL TO REGISTER USER
        if ((firstname.length, lastname.length, email.length, password.length, address.length) == 0) {
            await setLoadAnimation(!loadAnimation);
            await setTimeout(() => {
                setLoadAnimation(loadAnimation);
                Alert.alert("Failed", "Complete all Fields")
            }, 4000);
        } else {
            await setLoadAnimation(!loadAnimation);
            await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                setTimeout(() => {
                    setLoadAnimation(loadAnimation);
                    onAuthStateChanged(auth, (user) => {
                        const uid = user.uid;
                        setDoc(doc(db, "Users", uid), {
                            Firstname: firstname,
                            Lastname: lastname,
                            Email: email,
                            PhoneNumber: phoneNumber,
                            Address: address,
                        })
                    })
                }, 4000);
                Alert.alert("Success", "Account created Successfully", [{
                    text: "Proceed",
                    onPress: () => {
                        navigator.dispatch(
                            StackActions.replace("Login")
                        )
                    }
                }]);
            })
            .catch((e) => {
                setLoadAnimation(!loadAnimation);
                Alert.alert("Failed", e.message)
                setLoadAnimation(loadAnimation)
            })
        }
    }
    return(
        <KeyboardAvoidingView style={{backgroundColor: "#493d8a"}} behavior={Platform.OS=="ios" ? "padding" : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            
                {/* Main View */}
                <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                    <StatusBar style="light"/>
                    <View style={{width: "100%"}}>
                        <View style={{width, marginTop: "15%", alignItems: "center"}}>
                            <Image style={{width: 200, height: 200, borderRadius: 100,}} source={require("../../assets/Images/medicine.png")}/>
                        </View>
                        <View style={{}}>
                        
                            <View style={{backgroundColor: "white", borderTopRightRadius: 60, borderWidth: 5,
                            borderTopLeftRadius: 60, marginTop: 40, paddingHorizontal: 30, paddingTop: 50}}>
                                <View style={{width: "100%", alignItems: "center", marginBottom: 30}}>
                                    <Text style={{fontSize: 32, fontWeight: "bold", letterSpacing: 5}}>SignUp</Text>
                                </View>
                                <View style={{marginBottom: 30}}>
                                    <TextInput
                                    placeholder="Firstname"
                                    style={{borderRadius: 30, borderTopRightRadius: 30, borderTopLeftRadius: 30}}
                                    value={firstname}
                                    onChangeText={(text) => setFirstname(text)}
                                    />
                                </View>
                                <View style={{marginBottom: 30}}>
                                    <TextInput
                                    placeholder="Lastname"
                                    style={{borderRadius: 30, borderTopRightRadius: 30, borderTopLeftRadius: 30}}
                                    value={lastname}
                                    onChangeText={(text) => setLastname(text)}
                                    />
                                </View>
                                <View style={{marginBottom: 30}}>
                                    <TextInput
                                    placeholder="Email"
                                    style={{borderRadius: 30, borderTopRightRadius: 30, borderTopLeftRadius: 30}}
                                    value={email}
                                    onChangeText={(text) => setEmail(text)}
                                    />
                                </View>
                                <View style={{marginBottom: 30}}>
                                    <TextInput
                                    placeholder="Password"
                                    style={{borderRadius: 30, borderTopRightRadius: 30, borderTopLeftRadius: 30}}
                                    value={password}
                                    secureTextEntry={hidePassword}
                                    
                                    onChangeText={(text) => setPassword(text)}
                                    />
                                </View>
                                <View style={{marginBottom: 30}}>
                                    <TextInput
                                    placeholder="Phone"
                                    style={{borderRadius: 30, borderTopRightRadius: 30, borderTopLeftRadius: 30}}
                                    value={phoneNumber}
                                    onChangeText={(text) => setPhoneNumber(text)}
                                    />
                                </View>
                                <View style={{marginBottom: 30}}>
                                    <TextInput
                                    placeholder="Address"
                                    style={{borderRadius: 30, borderTopRightRadius: 30, borderTopLeftRadius: 30}}
                                    value={address}
                                    onChangeText={(text) => setAddress(text)}
                                    />
                                </View>
                                {/* <View style={{marginBottom: 30}}>
                                    <Dropdown
                                    placeholder="---Select Gender---"
                                    data={gender}
                                    value={selectedGender}
                                    onChangeText={(text) => setSelectedGender(text)}
                                    />
                                </View> */}
                                <View style={{width: "100%", paddingHorizontal: 20, marginBottom: 20}}>
                                    <TouchableOpacity onPress={CreateCLient}>
                                        <View style={{width: "100%", borderRadius: 50, backgroundColor: "#493d8a", paddingVertical: 15, flexDirection: "row", alignItems: "center"}}>
                                            <ActivityIndicator
                                            animating={loadAnimation}
                                            color="white"
                                            size={30}
                                            style={{marginLeft: "45%", position: "absolute", marginTop: 8}}
                                            />
                                            <Text style={{color: "white",letterSpacing: 3, fontSize: 18, fontWeight: "bold", marginLeft: "38%"}}>SignUp</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                <View style={{alignItems: "center", width: "100%", marginBottom: 50, flexDirection: "row", paddingLeft: 50}}>
                                    <Text style={{fontSize: 18}}>Already have an account? </Text>
                                    <TouchableOpacity onPress={() => {navigator.dispatch(StackActions.replace("Login"))}}>
                                        <Text style={{fontSize: 18, color: "#493d8a"}}>Login</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        
                        </View>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>   
    )
}