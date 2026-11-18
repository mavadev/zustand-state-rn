import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Text, View} from 'react-native';
import {
  HomeScreen,
  AboutScreen,
  SettingsScreen,
  CounterScreen,
} from '../screens';

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          let label = '';
          // Usamos indicadores estéticos minimalistas de alta resolución nativos
          if (route.name === 'Inicio') label = '🏠';
          if (route.name === 'Perfil') label = '👤';
          if (route.name === 'Ajustes') label = '⚙️';
          if (route.name === 'Contador') label = '🔢';

          return (
            <View style={{opacity: focused ? 1 : 0.5, marginTop: 4}}>
              <Text style={{fontSize: 20}}>{label}</Text>
            </View>
          );
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#6C757D',
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
          paddingBottom: 4,
          marginTop: 5
        },
        tabBarStyle: {
          height: 62,
          backgroundColor: '#FFFFFF',
          borderTopWidth: 1,
          borderTopColor: '#E9ECEF',
        },
        headerStyle: {
          backgroundColor: '#FFFFFF',
          shadowOpacity: 0,
          elevation: 0,
        },
        headerTitleStyle: {
          fontWeight: '700',
          fontSize: 20,
          color: '#212529',
        },
      })}>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={AboutScreen} />
      <Tab.Screen name="Ajustes" component={SettingsScreen} />
      <Tab.Screen name="Contador" component={CounterScreen} />
    </Tab.Navigator>
  );
}
