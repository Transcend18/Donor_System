import { View, Image, useWindowDimensions, StyleSheet, Text } from "react-native";

export function OnBoardingItem({item}){
    const {width} = useWindowDimensions();
    return(
        <View style={[styles.container, {width}]}>
            <Image source={item.image} style={[styles.image, {width, resizeMode: 'contain'}]}/>

            <View style={{flex: 0.3}}>
                <Text style={[styles.title, {letterSpacing: 2}]}>{item.title}</Text>
                <Text style={[styles.description, {letterSpacing: 2}]}>{item.description}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    image: {
        flex: 0.7,
        justifyContent: "center"
    },
    title:{
        fontWeight: "800",
        fontSize: 28,
        marginBottom: 10,
        color: "#493d8a",
        textAlign: "center"
    },
    description: {
        fontSize: 18,
        fontWeight: "300",
        color: "#62656b",
        textAlign: "center",
        paddingHorizontal: 64
    }
});