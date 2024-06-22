import { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { Modal, StyleSheet, ActivityIndicator, View, Text } from 'react-native';
import { MD3Colors, ProgressBar } from 'react-native-paper';
import Animated, { useAnimatedProps, useSharedValue, withTiming } from 'react-native-reanimated';
import { Circle, Svg } from 'react-native-svg';


export const MatchLoader = ({controlState}) => {
    const {width, height} = Dimensions.get("screen")

    const CIRCLE_LENGTH = 600;
    const RADIUS = CIRCLE_LENGTH / (2 * Math.PI);
    const circleProgress = useSharedValue(1);

    const AnimatedCircle = Animated.createAnimatedComponent(Circle)

    useEffect(() => {
        circleProgress.value = withTiming(0, {duration: 20000})
    })
    const animatedProp = useAnimatedProps(() => ({
        strokeDashoffset: CIRCLE_LENGTH * circleProgress.value
    }));

    return (
        <Modal 
        animationType="fade" 
        transparent={true} 
        visible={controlState}>
            <View style={styles.centeredView}>
                <Svg>
                    
                    <AnimatedCircle
                    cx={width / 2}
                    cy={height / 2}
                    r={RADIUS}
                    stroke="#493d8a"
                    strokeWidth={15}
                    strokeDasharray={CIRCLE_LENGTH}
                    strokeDashoffset={CIRCLE_LENGTH * circleProgress.value}
                    animatedProps={animatedProp}
                    strokeLinecap="round"
                    />
                </Svg>
                <Text style={{fontSize: 18, letterSpacing: 4, fontWeight: "600", marginBottom: 200 }}>Matching...</Text>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'rgba(255,255,255,0.5)',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        elevation: 5,
    },
});