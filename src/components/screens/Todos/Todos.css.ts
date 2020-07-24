import { StyleSheet } from 'react-native';

const styled = {
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: 10,
    },
    title: {
        fontSize: 36, color: "#04b3a1", marginTop: 10
    },
    actionView: {
        paddingHorizontal: 20,
        paddingVertical: 15,
        flexDirection: 'row'
    },
    button: {
        backgroundColor: "#04b3a1",
        paddingVertical: 12,
        paddingHorizontal: 130,
        margin: 10
    },
    button_text: {
        color: "#fff", fontSize: 20
    }
};

const styles = StyleSheet.create(styled);
export default styles;