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
            <Text style={styles.title}>A Carregar</Text>
            <Text style={styles.button_text}>Por favor aguarde...</Text>
        </View>
    )
}


const mapStateToProps = (state: ApplicationState) => ({
    loading: state.todosReducer.loading
})

export default connect(mapStateToProps)(LoadingComponent);