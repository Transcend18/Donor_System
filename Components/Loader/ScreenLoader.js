import { SafeAreaView, View, ActivityIndicator } from "react-native";

export function ScreenLoader(){
    return(
        <SafeAreaView style={{flex: 1, backgroundColor: "#493d8a"}}>
            <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
                <ActivityIndicator size="large" color="#0000ff"/>
            </View>
        </SafeAreaView>
    )
}