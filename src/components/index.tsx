import React from 'react'
import { Text, View, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../redux/store/index';
import styles from './index.css';
import { Todo } from '../redux/actions/todos/todos.types';
import * as TodoActions from '../redux/actions/todos/todos.actions';
import ListItem from './elements/listItem/index';
interface StateProps {
    todos: Todo[]
}

interface DispatchProps {
    loadRequest(): void
}

type Props = StateProps & DispatchProps;

const Root = (props: Props) => {

    const { todos } = props;
    const { loadRequest } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Todo List</Text>
            <View style={styles.actionView}>
                <TouchableOpacity
                    onPress={() => loadRequest()}
                    style={styles.button}>
                    <Text style={styles.button_text}>Próximo</Text>
                </TouchableOpacity>
            </View>

            <View style={{
                margin: 10,
                alignItems:"center"
            }}>
                <Text style={styles.title}>My Tasks</Text>

                <FlatList data={todos}
                    renderItem={({ item }) => <ListItem key={String(item.id)} todo={item} />}
                />
            </View>
        </View >
    )
}


const mapStateToProps = (state: ApplicationState) => ({
    todos: state.todosReducer.data
})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(TodoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Root);