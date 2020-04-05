import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Landing from './Components/Landing'
import NewPlan from './Components/NewPlan'
import Plans from './Components/Plans'
import { createStore, applyMiddleware, compose} from 'redux';
import {planReducer} from './redux/reducers/reducer'
import thunk from "redux-thunk"
import {Provider} from 'react-redux'

const Stack = createStackNavigator();

const store = createStore(planReducer,compose(
  applyMiddleware(thunk)))

export default function App() {
  return (
     <Provider store={store}>
      <NavigationContainer> 
        <Stack.Navigator>

        <Stack.Screen
          name="Landing"
          component={Landing}
          options={{headerShown: false,}}
        />  
        <Stack.Screen
        name="NewPlan"
        component={NewPlan}
        options={{headerShown: false,}}
      />
        <Stack.Screen
          name="Plans"
          component={Plans}
          options={{headerShown: false,}}
        />  
        </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    
  );
}

