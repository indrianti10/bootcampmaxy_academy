import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BmiKalkulator from './screens/BmiKalkulator';
import KalkulatorScreen from './screens/KalkulatorScreen';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen 
          name="Calculator" 
          component={KalkulatorScreen} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="calculator" color='black' size={30} />
            ),
          }}
          />
        <Tab.Screen 
          name="BMI" 
          component={BmiKalkulator} 
          options={{
            tabBarIcon: ({ color, size }) => (
              <Icon name="weight" color='black' size={30} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
export default App;