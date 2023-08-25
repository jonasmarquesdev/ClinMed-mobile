import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { optionsTabs } from '../utils/BottomTabsConfig';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={{
      tabBarStyle: {
        backgroundColor: "#002851",
      },
      tabBarActiveTintColor: "#339CFF",
      tabBarInactiveTintColor: "#FFF",
    }}>
      {optionsTabs.map((option) => (
        <Tab.Screen
          key={option.name}
          name={option.name}
          component={option.component}
          options={{ 
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={option.icon} color={color} size={size} />
            )
          }}
        />
      ))}
    </Tab.Navigator>
  );
}