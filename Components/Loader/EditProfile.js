import { Modal, StyleSheet, ActivityIndicator, View, Text, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';
import { Dropdown } from 'react-native-element-dropdown';
import { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { doc, addDoc } from 'firebase/firestore';
import { db } from '../FirebaseConfig/Firebase.config.key';
import { AppContext } from '../Context/AppContext';
import { ScreenLoaderWithOpacity } from './ScreenLoaderWithOpacity';

export const EditProfile = ({controlState}) => {
    const bgColor = "#493d8a";
    const navigator = useNavigation()
    const {user, setGender, setBloodType, setGenoType} = useContext(AppContext)

    const [isFocus, setIsFocuse] = useState(false);
    const [visibily, setVisibility] = useState(false)

    const [selected1, setSelected1] = useState("");
    const [selected2, setSelected2] = useState("");
    const [selected3, setSelected3] = useState("");

    const bloodType = [
        { label: 'O+', value: '1' },
        { label: '0-', value: '2' },
        { label: 'A+', value: '3' },
        { label: 'A-t', value: '4' },
        { label: 'B+', value: '5' },
        { label: 'B-', value: '6' },
        { label: 'AB+', value: '7' },
        { label: 'AB-', value: '8' },
    ];
    const Genotype = [
        { label: 'AA', value: '1' },
        { label: 'AC', value: '2' },
        { label: 'AS', value: '3' },
        { label: 'CC', value: '4' },
        { label: 'SC', value: '5' },
        { label: 'SS', value: '6' },
    ];
    const Gender = [
        { label: 'Male', value: '1' },
        { label: 'Female', value: '2' },
        { label: 'Rather not say', value: '3' },
    ];

    const CompleteEdit = async () => {
        navigator.goBack()   
    }
    return (
        <Modal 
        animationType="fade" 
        transparent={true}
        onDismiss={() => setVisibility(false)}
        visible={controlState}>
            <View style={styles.centeredView}>
                <View style={{width: "100%", backgroundColor: "#FFE6E6", borderRadius: 30, borderLeftWidth: 3, borderRightWidth: 3, borderBottomWidth: 2}}>
                    <View style={{borderTopRightRadius: 30, borderTopLeftRadius: 30, width: "100%", backgroundColor: "#493d8a", paddingVertical: 15, paddingHorizontal: 10, marginBottom: 10}}>
                        <Text style={{fontSize: 20, fontWeight: "bold", letterSpacing: 3, color: "white"}}>Edit Records</Text>
                    </View>
                    <View style={{width: "100%", marginBottom: 10, paddingHorizontal: 15}}>
                         <Dropdown
                            style={{height: 55, borderColor: bgColor, borderRadius: 15, paddingHorizontal: 15, borderWidth: 2, marginTop: 15}}
                            placeholderStyle={{fontSize: 16}}
                            selectedTextStyle={{fontSize: 16}}
                            inputSearchStyle={{height: 40, fontSize: 16}}
                            iconStyle={{width: 20, height: 20}}
                            data={bloodType}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? "Select Blood type..." : "..."}
                            searchPlaceholder="Search..."
                            value={selected1}
                            onFocus={() => setIsFocuse(true)}
                            onBlur={() => setIsFocuse(false)}
                            onChange={item => {
                                setSelected1(item.value)
                                setIsFocuse(false)
                                setBloodType(item.label)
                            }}
                        />
                    </View>
                    <View style={{width: "100%", marginBottom: 10, paddingHorizontal: 15}}>
                        <Dropdown
                            style={{height: 55, borderColor: bgColor, borderRadius: 15, paddingHorizontal: 15, borderWidth: 2, marginTop: 15}}
                            placeholderStyle={{fontSize: 16}}
                            selectedTextStyle={{fontSize: 16}}
                            inputSearchStyle={{height: 40, fontSize: 16}}
                            iconStyle={{width: 20, height: 20}}
                            data={Genotype}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? "Select Genotype..." : "..."}
                            searchPlaceholder="Search..."
                            value={selected2}
                            onFocus={() => setIsFocuse(true)}
                            onBlur={() => setIsFocuse(false)}
                            onChange={item => {
                                setSelected2(item.value)
                                setIsFocuse(false)
                                setGenoType(item.label)
                            }}
                        />
                    </View>
                    <View style={{width: "100%", marginBottom: 10, paddingHorizontal: 15}}>
                        <Dropdown
                            style={{height: 55, borderColor: bgColor, borderRadius: 15, paddingHorizontal: 15, borderWidth: 2, marginTop: 15}}
                            placeholderStyle={{fontSize: 16}}
                            selectedTextStyle={{fontSize: 16}}
                            inputSearchStyle={{height: 40, fontSize: 16}}
                            iconStyle={{width: 20, height: 20}}
                            data={Gender}
                            search
                            maxHeight={300}
                            labelField="label"
                            valueField="value"
                            placeholder={!isFocus ? "Select Gender..." : "..."}
                            searchPlaceholder="Search..."
                            value={selected3}
                            onFocus={() => setIsFocuse(true)}
                            onBlur={() => setIsFocuse(false)}
                            onChange={item => {
                                setSelected3(item.value)
                                setIsFocuse(false)
                                setGender(item.label)
                            }}
                        />
                    </View>
                    <View style={{width: "100%", paddingHorizontal: 5, marginBottom: 15}}>
                        <TouchableOpacity onPress={CompleteEdit}>
                            <View style={{backgroundColor: "#493d8a", width: "100%", borderRadius: 50, paddingVertical: 15, alignItems: "center"}}>
                                <Text style={{fontSize: 18, fontWeight: "bold", color: "white", letterSpacing: 4}}>Save</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "100%",
        paddingHorizontal: 5,
        backgroundColor: 'rgba(255,255,255,0.5)',
    },
    modalView: {
        margin: 20,
        backgroundColor: 'rgba(255,255,255,0.5)',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
});