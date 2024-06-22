import { FlatList, View, TouchableOpacity, useWindowDimensions, Text, Alert } from "react-native";
import Slide from "./Slide";
import { OnBoardingItem } from "./OnBoardingItem";
import { StackActions, useNavigation } from "@react-navigation/native";
import { useContext, useEffect } from "react";
import { AppContext } from "../Context/AppContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function OnBoarding(){
    const {width} = useWindowDimensions();
    const navigator = useNavigation();
    const {userToken} = useContext(AppContext);

    const checkUserToken = async () => {
        try {
            const token = await AsyncStorage.getItem(`userToken`);
            token ? navigator.navigate("HomeScreen"): null;
        } catch (error) {
            Alert.alert('Error','problem fetching authorization token');
            console.error(error);
        }
    }

    useEffect(() => {
        checkUserToken();
    }, [userToken]);
    
    return(
        <View style={{flex: 1, justifyContent: "center", alignItems: 'center', backgroundColor: "white"}}>
            <View style={{flex: 3}}>
                <FlatList
                data={Slide}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({item}) => <OnBoardingItem item={item}/>}
                pagingEnabled
                bounces={false}
                keyExtractor={(item) => item.id}
                />
            </View>
            {/* <Paginator data={Slide} scrollX={scrollX}/> */}
            <View style={{width, backgroundColor: "white", marginBottom: 80}}>
                <TouchableOpacity onPress={() => navigator.dispatch(StackActions.replace("Signup"))}>
                    <View style={{alignItems: "center", backgroundColor: "#493d8a", marginHorizontal: 20, 
                    borderRadius: 50, paddingVertical: 15}}>
                        <Text style={{fontSize: 20, color: "white", letterSpacing: 2}}>Get started</Text>
                    </View>
                </TouchableOpacity>
            </View>
            <Text style={{alignSelf: "center", marginBottom: 20, letterSpacing: 4}}>Version: 1.0.0</Text>
        </View>
    )
}