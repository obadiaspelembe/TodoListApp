import React from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../../../redux/store/index';
import styles from './Home.css';
import { Todo } from '../../../redux/actions/todos/todos.types';
import * as TodoActions from '../../../redux/actions/todos/todos.actions';
import ListItem from '../../elements/listItem/index';


interface DispatchProps {
    loadRequest(): void
}

type Props = DispatchProps;

const HomeComponent = (props: Props) => {

    const { loadRequest } = props;

    const handleAction = () => {
        loadRequest();
        props.navigation.navigate("Loading");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo List</Text>
            <View style={styles.actionView}>
                <TouchableOpacity
                    onPress={() => handleAction()}
                    style={styles.button}>
                    <Text style={styles.button_text}>Próximo</Text>
                </TouchableOpacity>
            </View>
        </View >
    )
}


const mapStateToProps = (state: ApplicationState) => ({
})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(TodoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);