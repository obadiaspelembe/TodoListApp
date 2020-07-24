import React from 'react';
import { TouchableHighlight, View, Text } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import styled from './index.css';
import { Todo } from '../../../redux/actions/todos/todos.types';

interface Props {
    todo: Todo
}
/**
 * List item para renderizar cada componente da Lista de todo
 */
export default function ListItem(props: Props) {

    const { todo } = props;
    const color = todo.completed ? '#49a69b' : '#004d44';
    const textDecorationLine = todo.completed ? 'line-through' : 'none';
    const icon_name = todo.completed ? 'check-box' : 'check-box-outline-blank';
    return (
        <TouchableHighlight
            underlayColor={'#eee'}
            style={styled.item_container}>
            <View style={styled.item_body}>
                <MaterialIcons
                    name={icon_name}
                    size={24}
                />
                <Text style={
                    [styled.item_text,
                    { color: color, textDecorationLine: textDecorationLine }]}>{todo.title}</Text>
            </View>
        </TouchableHighlight>
    )

}

