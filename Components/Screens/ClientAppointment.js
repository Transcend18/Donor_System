import { useState } from "react"
import { KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, View, Text, ScrollView, TouchableOpacity  } from "react-native"
import { Dropdown } from "react-native-element-dropdown";
import { Button, Chip, Divider, HelperText, Switch } from "react-native-paper"
import Animated, { FadeIn, FadeInDown, FadeInLeft, FadeInUp } from "react-native-reanimated";
import { MatchLoader } from "../Loader/MatchLoader";
import { useNavigation } from "@react-navigation/native";

export function ClientMatching() {
    const bgColor = "#493d8a";
    const navigator = useNavigation()
    const [selected, setSelected] = useState("");
    const [isFocus, setIsFocuse] = useState(false);
    const [isSwitchOn, setIsSwitchOn] = useState(true);
    const [loadLoader, setLoadLoader] = useState(false);
    
    const [initialColor1, setInitialColor1] = useState("");
    const [initialColor2, setInitialColor2] = useState("");
    const [initialColor3, setInitialColor3] = useState("");
    const [initialColor4, setInitialColor4] = useState("");
    const [initialColor5, setInitialColor5] = useState("");
    const [initialColor6, setInitialColor6] = useState("");
    const [initialColor7, setInitialColor7] = useState("");
    const [initialColor8, setInitialColor8] = useState("");
    const [initialColor9, setInitialColor9] = useState("");
    const [initialColor10, setInitialColor10] = useState("");
    const [initialColor11, setInitialColor11] = useState("");
    const [initialColor12, setInitialColor12] = useState("");
    const [initialColor13, setInitialColor13] = useState("");
    const [initialColor14, setInitialColor14] = useState("");
    const [initialColor15, setInitialColor15] = useState("");
    const [initialColor16, setInitialColor16] = useState("");
    const [initialTextColor1, setInitialTextColor1] = useState(bgColor)
    const [initialTextColor2, setInitialTextColor2] = useState(bgColor)
    const [initialTextColor3, setInitialTextColor3] = useState(bgColor)
    const [initialTextColor4, setInitialTextColor4] = useState(bgColor)
    const [initialTextColor5, setInitialTextColor5] = useState(bgColor)
    const [initialTextColor6, setInitialTextColor6] = useState(bgColor)
    const [initialTextColor7, setInitialTextColor7] = useState(bgColor)
    const [initialTextColor8, setInitialTextColor8] = useState(bgColor)
    const [initialTextColor9, setInitialTextColor9] = useState(bgColor)
    const [initialTextColor10, setInitialTextColor10] = useState(bgColor)
    const [initialTextColor11, setInitialTextColor11] = useState(bgColor)
    const [initialTextColor12, setInitialTextColor12] = useState(bgColor)
    const [initialTextColor13, setInitialTextColor13] = useState(bgColor)
    const [initialTextColor14, setInitialTextColor14] = useState(bgColor)
    const [initialTextColor15, setInitialTextColor15] = useState(bgColor)
    const [initialTextColor16, setInitialTextColor16] = useState(bgColor)
    
    const listofitemstomatch = [
        { label: 'Heart Transplant', value: '1' },
        { label: 'Blood Transfusion', value: '2' },
        { label: 'Hair Transplant', value: '3' },
        { label: 'Pancrease Transplant', value: '4' },
        { label: 'Kidney Transplant', value: '5' },
        { label: 'Intestine Transplant', value: '6' },
        { label: 'Egg Fertilization', value: '7' },
        { label: 'Sperm Insemination', value: '8' },
    ];

    const ToggleButton = async () => {
        setIsSwitchOn(!isSwitchOn);
    };

    const matchClient = async () => {
        
        // await setLoadLoader(!loadLoader)
        // await setTimeout(() => {
        //     setLoadLoader(loadLoader)
        //     navigator.navigate("HomeScreen")
        // }, 18000);
    }

    return(
        <KeyboardAvoidingView  style={{flex: 1,  width: "100%",}} behavior={Platform.OS=="ios" ? "padding" : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={{width: "100%", flex: 1}}>
                    <MatchLoader controlState={loadLoader}/>
                    {/*  */}
                    <Animated.View entering={FadeInUp.duration(1000).damping()} style={{backgroundColor: bgColor, width: "100%", paddingTop: 60, paddingHorizontal: 10, paddingBottom: 20}}>
                        <View style={{width: "100%", flexDirection: "row", justifyContent: "space-between"}}>
                            <Text style={{marginTop: 10,color: "white",fontSize: 26,marginLeft: "35%",
                            fontWeight: "700", letterSpacing: 4}}>Match</Text>
                        </View>
                    </Animated.View>

                    {/* Body */}
                    <View style={{width: "100%", flex: 2, paddingHorizontal: 10, paddingTop: 10}}>
                        <ScrollView showsVerticalScrollIndicator={false} bounces={false}>
                            <View style={{width: "100%", marginBottom: 15}}>
                            <HelperText type="info" style={{fontSize: 16, fontWeight: "600"}}>
                                Please Select one from each section, if select more than two please go back and enter again...
                            </HelperText>
                                <Animated.View entering={FadeIn.delay(200).duration(2000).damping()} style={{width: "100%", flexDirection: "row", marginBottom: 15}}>
                                    <Text style={{fontSize: 18, fontWeight: "bold"}}>Gender</Text>
                                    <Divider style={{width: "100%", height: 2, alignSelf: "center"}}/>
                                </Animated.View>
                                <Animated.View entering={FadeInLeft.delay(400).duration(2000).damping()} style={{width: "100%", flexDirection: "row", justifyContent: "space-evenly"}}>
                                    <Button mode="outlined" icon="account" style={{backgroundColor: initialColor1}} textColor={initialTextColor1} rippleColor={bgColor} onPress={() => {
                                        setInitialColor1(bgColor)
                                        setInitialTextColor1("white")
                                        }}>Male</Button>
                                    <Button mode="outlined" icon="baby"style={{backgroundColor: initialColor2}} textColor={initialTextColor2} rippleColor={bgColor} onPress={() => {
                                        setInitialColor2(bgColor)
                                        setInitialTextColor2("white")
                                    }}>Female</Button>
                                    <Button mode="outlined" icon="emoticon-wink" style={{backgroundColor: initialColor3}} textColor={initialTextColor3} rippleColor={bgColor} onPress={() => {
                                        setInitialColor3(bgColor)
                                        setInitialTextColor3("white")
                                    }}>Rather not say</Button>
                                </Animated.View>
                            </View>

                            {/*  */}
                            <View style={{width: "100%", marginBottom: 15}}>
                                <Animated.View entering={FadeIn.delay(600).duration(2000).delay()} style={{width: "100%", flexDirection: "row", marginBottom: 10}}>
                                    <Text style={{fontSize: 18, fontWeight: "bold"}}>Blood Type</Text>
                                    <Divider style={{width: "100%", height: 2, alignSelf: "center"}}/>
                                </Animated.View>
                                <Animated.View entering={FadeInLeft.delay(800).duration(2000).damping()} style={{width: "100%", flexDirection: "row", justifyContent: "space-around"}}>
                                    <Button mode="outlined" icon="emoticon-wink" style={{backgroundColor: initialColor4}} textColor={initialTextColor4} rippleColor={bgColor} onPress={() => {
                                        setInitialColor4(bgColor);
                                        setInitialTextColor4("white");
                                    }}>0+</Button>
                                    <Button mode="outlined" icon="emoticon-wink" style={{backgroundColor: initialColor5}} textColor={initialTextColor5} rippleColor={bgColor} onPress={() => {
                                        setInitialColor5(bgColor);
                                        setInitialTextColor5("white");
                                    }}>0-</Button>
                                    <Button mode="outlined" icon="emoticon-wink" style={{backgroundColor: initialColor6}} textColor={initialTextColor6} rippleColor={bgColor} onPress={() => {
                                        setInitialColor6(bgColor);
                                        setInitialTextColor6("white");
                                    }}>A+</Button>
                                    <Button mode="outlined" icon="emoticon-wink" style={{backgroundColor: initialColor7}} textColor={initialTextColor7} rippleColor={bgColor} onPress={() => {
                                        setInitialColor7(bgColor);
                                        setInitialTextColor7("white");
                                    }}>A-</Button>
                                </Animated.View>
                                <Animated.View entering={FadeInUp.delay(1000).duration(2000).damping()} style={{width: "100%", flexDirection: "row", marginTop: 10, justifyContent: "space-evenly"}}>
                                    <Button mode="outlined" icon="emoticon-wink" style={{backgroundColor: initialColor8}} textColor={initialTextColor8} rippleColor={bgColor} onPress={() => {
                                        setInitialColor8(bgColor);
                                        setInitialTextColor8("white");
                                    }}>B+</Button>
                                    <Button mode="outlined" icon="emoticon-wink" style={{backgroundColor: initialColor9}} textColor={initialTextColor9} rippleColor={bgColor} onPress={() => {
                                        setInitialColor9(bgColor);
                                        setInitialTextColor9("white");
                                    }}>B-</Button>
                                    <Button mode="outlined" icon="emoticon-wink" style={{backgroundColor: initialColor10}} textColor={initialTextColor10} rippleColor={bgColor} onPress={() => {
                                        setInitialColor10(bgColor);
                                        setInitialTextColor10("white");
                                    }}>AB+</Button>
                                    <Button mode="outlined" icon="emoticon-wink" style={{backgroundColor: initialColor11}} textColor={initialTextColor11} rippleColor={bgColor} onPress={() => {
                                        setInitialColor11(bgColor);
                                        setInitialTextColor11("white");
                                    }}>AB-</Button>
                                </Animated.View>
                            </View>
                            {/*  */}
                            <View style={{width: "100%"}}>
                                <Animated.View entering={FadeInLeft.duration(2000).damping()} style={{width: "100%", flexDirection: "row", marginBottom: 10}}>
                                    <Text style={{fontSize: 18, fontWeight: "bold"}}>Genotype</Text>
                                    <Divider style={{width: "100%", height: 2, alignSelf: "center"}}/>
                                </Animated.View>
                                <Animated.View entering={FadeInUp.delay(1200).duration(2000).damping()} style={{width: "100%", flexDirection: "row", justifyContent: "space-evenly"}}>
                                    <Button mode="outlined" icon="emoticon-wink" style={{backgroundColor: initialColor12}} textColor={initialTextColor12} rippleColor={bgColor} onPress={() => {
                                        setInitialColor12(bgColor);
                                        setInitialTextColor12("white");
                                    }}>AA</Button>
                                    <Button mode="outlined" icon="emoticon-wink" style={{backgroundColor: initialColor13}} textColor={initialTextColor13} rippleColor={bgColor} onPress={() => {
                                        setInitialColor13(bgColor);
                                        setInitialTextColor13("white");
                                    }}>AC</Button>
                                    <Button mode="outlined" icon="emoticon-wink" style={{backgroundColor: initialColor14}} textColor={initialTextColor14} rippleColor={bgColor} onPress={() => {
                                        setInitialColor14(bgColor);
                                        setInitialTextColor14("white");
                                    }}>AS</Button>
                                    <Button mode="outlined" icon="emoticon-wink" style={{backgroundColor: initialColor15}} textColor={initialTextColor15} rippleColor={bgColor} onPress={() => {
                                        setInitialColor15(bgColor);
                                    }}>CC</Button>
                                </Animated.View>
                                <Animated.View entering={FadeInLeft.delay(1400).duration(2000).damping()} style={{width: "100%", flexDirection: "row", marginTop: 10}}>
                                    <Button mode="outlined" icon="emoticon-wink" style={{backgroundColor: initialColor16}} textColor={initialTextColor16} rippleColor={bgColor} onPress={() => {
                                        setInitialColor16(bgColor);
                                        setInitialTextColor16("white");
                                    }}>SS</Button>
                                </Animated.View>
                            </View>

                            <View style={{width: "100%", paddingHorizontal: 5, marginBottom: 20}}>
                                <Dropdown
                                style={{height: 55, borderColor: bgColor, borderRadius: 15, paddingHorizontal: 15, borderWidth: 2, marginTop: 15}}
                                placeholderStyle={{fontSize: 16}}
                                selectedTextStyle={{fontSize: 16}}
                                inputSearchStyle={{height: 40, fontSize: 16}}
                                iconStyle={{width: 20, height: 20}}
                                data={listofitemstomatch}
                                search
                                maxHeight={300}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? "Select Match Part" : "..."}
                                searchPlaceholder="Search..."
                                value={selected}
                                onFocus={() => setIsFocuse(true)}
                                onBlur={() => setIsFocuse(false)}
                                onChange={item => {
                                    setSelected(item.value)
                                    setIsFocuse(false)
                                }}
                                />
                            </View>
                            
                            <View style={{width: "100%", flexDirection: "row", marginVertical: 10}}>
                                <Switch value={isSwitchOn} onValueChange={ToggleButton}/>
                                <Text style={{fontSize: 16, fontWeight: "400", marginLeft: 10, marginTop: 5}}>Match Anonimously</Text>
                            </View>
                            {/* Button */}
                            <Animated.View entering={FadeInDown.delay(2000).duration(2000).damping()} style={{width: "100%", paddingHorizontal: 20}}>
                                <TouchableOpacity onPress={matchClient}>
                                    <View style={{width: "100%", backgroundColor: bgColor, borderRadius: 50, alignItems: "center", paddingVertical: 15}}>
                                        <Text style={{fontSize: 18, fontWeight: "bold", color: "white", letterSpacing: 3}}>Find Match</Text>
                                    </View>
                                </TouchableOpacity>
                            </Animated.View>
                        </ScrollView>
                    </View>
                    {/* End of Body */}
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}