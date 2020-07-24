import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { ApplicationState } from '../../../redux/store/index';
import styles from './Todos.css';
import { Todo } from '../../../redux/actions/todos/todos.types';
import ListItem from '../../elements/listItem/index';

interface StateProps {
    todos: Todo[]
}

type Props = StateProps;

const TodosComponent = (props: Props) => {

    const { todos } = props;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My Tasks</Text>

            <View style={{
                margin: 10,
                alignItems: "center"
            }}>
                <FlatList data={todos}
                    keyExtractor={item => String(item.id)}
                    renderItem={({ item }) => <ListItem key={String(item.id)} todo={item} />}
                />
            </View>
        </View >
    )
}


const mapStateToProps = (state: ApplicationState) => ({
    todos: state.todosReducer.data
})


export default connect(mapStateToProps)(TodosComponent);