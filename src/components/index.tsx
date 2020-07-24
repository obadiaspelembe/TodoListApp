import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';
import { ApplicationState } from '../redux/store/index';

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
        <View>
            <Text>Todo List</Text>
            <TouchableOpacity

                onPress={() => loadRequest()}
                style={{
                    backgroundColor: "#949858",
                    padding: 10,
                    margin: 10
                }}>
                <Text>Click </Text>
            </TouchableOpacity>
            {todos.map(todo => <ListItem key={todo.id} todo={todo} />)}
        </View>
    )
}


const mapStateToProps = (state: ApplicationState) => ({
    todos: state.todosReducer.data
})

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(TodoActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Root);