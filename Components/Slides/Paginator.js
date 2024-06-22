import { StyleSheet, View, Animated, useWindowDimensions } from "react-native";

export function Paginator({data, scrollX}){
    const {width} = useWindowDimensions();
    return(
        <View style={{flexDirection: "row", height: 64}}>
            {data.map((_, index) => {
                const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
                const dotWidth = scrollX.interpolate({
                    inputRange,
                    outputRange: [10, 20, 10],
                    extrapolate: 'clamp',
                })
                return (
                    <Animated.View 
                        key={index.toString()} 
                        style={[Styles.dot, {width: dotWidth }]} 
                    />
                );
            })};
        </View>
    )
}

const Styles = StyleSheet.create({
    dot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#493d8a',
        marginHorizontal: 8
    }
})