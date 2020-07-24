import { StyleSheet } from 'react-native';

const styled = {
    item_container: {
        paddingTop: 6,
        paddingBottom: 6,
        borderBottomWidth: 1,
        borderColor: '#eee',
        margin: 10
    },
    item_body: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    item_text: { marginLeft: 5, fontSize: 18 }
};

const styles = StyleSheet.create(styled);
export default styles;