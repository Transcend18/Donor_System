import { KeyboardAvoidingView, TouchableWithoutFeedback, Platform, Keyboard, View  } from "react-native"

export function Notification() {
    const bgColor = "#493d8a"
    return(
        <KeyboardAvoidingView  style={{width: "100%",}} behavior={Platform.OS=="ios" ? "padding" : 'height'}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    
                </View>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    )
}