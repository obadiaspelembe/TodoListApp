import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeComponent from './screens/Home/Home.compoent';
import TodosComponent from './screens/Todos/Todos.component';
import LoadingComponent from './screens/Loading/Loading.component';

interface RouteProps { }

const Stack = createStackNavigator();

const Root: React.FC<RouteProps> = ({ }) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" headerMode="none">
                <Stack.Screen name="Home" component={HomeComponent} />
                <Stack.Screen name="Todos" component={TodosComponent} />
                <Stack.Screen name="Loading" component={LoadingComponent} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};


export default Root;