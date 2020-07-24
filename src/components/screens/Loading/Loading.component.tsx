import React from 'react'
import { Text, View } from 'react-native'
import { connect } from 'react-redux';
import { ApplicationState } from '../../../redux/store/index';
import styles from './Loading.css';

const LoadingComponent = (props: any) => {

    const { loading } = props;

    const isLoading = () => {

        if (loading) {
            setTimeout(function () { 
                props.navigation.navigate("Todos");
             }, 2000);
        }
    }

    isLoading();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Loading</Text>
            <Text style={styles.button_text}>Please wait...</Text>
        </View>
    )
}


const mapStateToProps = (state: ApplicationState) => ({
    loading: state.todosReducer.loading
})

export default connect(mapStateToProps)(LoadingComponent);