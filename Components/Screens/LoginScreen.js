import { StackActions, useNavigation } from "@react-navigation/native";
import { useState, useContext, useEffect } from "react";
import {KeyboardAvoidingView, 
    TouchableWithoutFeedback, View, Text, 
    Platform, Keyboard, 
    Image,
    ScrollView,
    TouchableOpacity,
    Alert} 
from "react-native";
import { ActivityIndicator, HelperText, TextInput } from "react-native-paper";
import { AppContext } from "../Context/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import {auth, db} from "../FirebaseConfig/Firebase.config.key"
import { generateAlphaNumChars } from "../Alpha-num-char/alpha-num-char";
import { ScreenLoaderWithOpacity } from "../Loader/ScreenLoaderWithOpacity";


export function LoginScreen(){
    const navigator = useNavigation()
    const {userToken,setUserToken,setUser} = useContext(AppContext);
    const [hasErrors, setHasErrors] = useState(false)

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hidepassword, setHidePasssword] = useState(true)
    const [loadAnimation, setLoadAnimation] = useState(false);

    const checkUserToken = async () => {
        try {
            const token = await AsyncStorage.getItem(`userToken`);
            token ? navigator.navigate("HomeScreen") : null;
        } catch (error) {
            Alert.alert('Error','problem fetching authorization token');
            console.error(error);
        }
    }

    useEffect(() => {
        checkUserToken();
    }, [userToken]);

    const LoginClient = async () => {
        if ((email.length, password.length) == 0) {
            await setLoadAnimation(!loadAnimation);
            await setTimeout(() => {
                setLoadAnimation(loadAnimation);
                Alert.alert("Error", "Complete all Fields")
            }, 2000);
        } else{
            // API CALL
            await signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                onAuthStateChanged(auth, (user) => {
                    let token_ = generateAlphaNumChars(36);
                    let dataForStorage = {
                        token: token_,
                        user_uid: user.uid,
                        user_email: user.email
                    }
                    setUser(user.uid);
                    setUserToken(token_);
                    AsyncStorage.setItem('userToken', JSON.stringify(token_));
                    AsyncStorage.setItem('user', JSON.stringify(dataForStorage))
                })  
            }).catch( e => {
                setLoadAnimation(!loadAnimation)
                setTimeout(() => {
                    setLoadAnimation(loadAnimation)
                    Alert.alert("Failed", "Invalid Username or Password", [{
                        text: "Retry"
                    }])
                }, 4000);
            })
        }
    };

    
    return(
        <KeyboardAvoidingView  style={{flex: 1,width: "100%", backgroundColor: "#493d8a"}} behavior={Platform.OS=="ios" ? "padding" : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <ScrollView bounces={false} showsVerticalScrollIndicator={false} style={{width: "1005"}}>
                <ScreenLoaderWithOpacity controlState={loadAnimation}/>
                <View style={{width: "100%",}}>
                    <View style={{ width: "100%", alignItems: "center", marginTop: "15%", marginBottom: 20}}>
                        <Image style={{width: 200, height: 200, borderRadius: 100}} source={require("../../assets/Images/medicine.png")}/>
                    </View>
                    <View style={{width: "100%", paddingHorizontal: 30,
                    borderWidth: 5, borderColor: "black", 
                    paddingTop: 50, paddingBottom: 100,backgroundColor: "white", borderRadius: 60}}>
                        <View style={{width: "100%", alignItems: "center", marginBottom: 30}}>
                            <Text style={{fontSize: 36, letterSpacing: 5, fontWeight: "bold"}}>Login</Text>
                        </View>
                        <View style={{width: "100%"}}>
                            <TextInput
                            style={{borderRadius: 40, borderTopLeftRadius: 40, borderTopRightRadius: 40}}
                            placeholder="Email"
                            value={email}
                            onChangeText={(text) => setEmail(text)}
                            />
                            <HelperText type="error" visible={hasErrors}>
                                Cannot be empty....
                            </HelperText>
                        </View>
                        <View style={{width: "100%"}}>
                            <TextInput
                            style={{borderRadius: 40, borderTopLeftRadius: 40, borderTopRightRadius: 40}}
                            placeholder="Password"
                            value={password}
                            onChangeText={(text) => setPassword(text)}
                            secureTextEntry={hidepassword}
                            />
                            <HelperText type="error" visible={hasErrors}>
                                Cannot be empty....
                            </HelperText>
                        </View>
                        <View style={{width: "100%"}}>
                            <TouchableOpacity onPress={LoginClient}>
                                <View style={{alignItems: "center",width: "100%", borderRadius: 50,
                                backgroundColor: "#493d8a", paddingVertical: 15}}>
                                    <Text style={{color: "white", fontSize: 20, fontWeight: "bold", letterSpacing: 4}}>
                                        Login
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{flexDirection: "row", marginTop: 30, alignSelf: "center"}}>
                                <Text style={{fontSize: 18}}>Don't have an account? </Text>
                                <TouchableOpacity onPress={() => navigator.navigate("Signup")}>
                                    <Text style={{fontSize: 18, color: "#493d8a"}}>Signup</Text>
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