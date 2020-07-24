import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { Todo } from '../../../redux/actions/todos/todos.types';

interface Props {
    todo: Todo
}

export default function ListItem(props: Props) {

    const { todo } = props;
    const color = todo.completed ? '#C5C8C9' : '#000';
    const textDecorationLine = todo.completed ? 'line-through' : 'none';
    const icon_name = todo.completed ? 'check-box' : 'check-box-outline-blank';
    return (
        <TouchableHighlight
            underlayColor={'#eee'}
            style={
                {
                    paddingTop: 6,
                    paddingBottom: 6,
                    backgroundColor: "#F8F8F8",
                    borderBottomWidth: 1,
                    borderColor: '#eee',
                    margin: 10
                }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <MaterialIcons
                    name={icon_name}
                    size={24}
                />
                <Text style={{ marginLeft: 5, fontSize: 18, color: color, textDecorationLine: textDecorationLine }}>{todo.title}</Text>
            </View>
        </TouchableHighlight>
    )

}

