import { StatusBar } from 'expo-status-bar';
import { Modal, StyleSheet, ActivityIndicator, View } from 'react-native';


export const ScreenLoaderWithOpacity = ({controlState}) => {
    return (
        <Modal 
        animationType="fade" 
        transparent={true} 
        visible={controlState}>
            <View style={styles.centeredView}>
                <StatusBar style='dark'/>
                <View style={styles.modalView}>
                    <ActivityIndicator 
                    size="large" 
                    color="#493d8a" />
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
        marginTop: 22,
    },
    modalView: {
        margin: 20,
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 50,
        padding: 35,
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