import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import { Home } from '../pages/Home';
import { News } from '../pages/News';
import { Notification } from '../pages/Notification';
import { Menu } from '../pages/Menu';
import { Guard } from '../pages/Guard';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './tabStyle'
import { LinearGradient } from 'expo-linear-gradient';

const Tab = createBottomTabNavigator();

export function TabNavigation() {
  return (
    <Tab.Navigator screenOptions={
      { headerShown: false,
        tabBarShowLabel: false,
        tabBarItemStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        },
        tabBarStyle: {
          backgroundColor: '#202126',
          paddingTop: 3,
          height: 50,
          borderColor: 'transparent',
          justifyContent: 'center',
        },
        tabBarActiveTintColor: '#16A1FF',
        tabBarInactiveTintColor: '#E3E4E9' 
      }}>
      <Tab.Screen name="TabsHome" component={Home} options={{
        tabBarIcon: ({focused, color, size}) => (
          <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
          >
            {focused && ( <LinearGradient
            colors={['#89BFD9', '#5697E9', '#3F73E3']}
            style={styles.tabTopBar}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            ></LinearGradient>)}

            <Ionicons name="pricetag" size={size - 4} color={color} />
          </View>
        )
      }}/>
      <Tab.Screen name="TabsNews" component={News} options={{
        tabBarIcon: ({focused, color, size}) => (
          <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          >
            {focused && ( <LinearGradient
            colors={['#89BFD9', '#5697E9', '#3F73E3']}
            style={styles.tabTopBar}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            ></LinearGradient>)}

            <Ionicons name="newspaper" size={size - 4} color={color} />
          </View>
        )
      }}/>
      <Tab.Screen name="TabsGuard" component={Guard} options={{
        tabBarIcon: ({focused, color, size}) => (
          <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          >
            {focused && ( <LinearGradient
            colors={['#89BFD9', '#5697E9', '#3F73E3']}
            style={styles.tabTopBar}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            ></LinearGradient>)}

            <Ionicons name="shield" size={size - 4} color={color} />
          </View>
        )
      }}/>
      <Tab.Screen name="TabsNotification" component={Notification} options={{
        tabBarIcon: ({focused, color, size}) => (
          <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          >
            {focused && ( <LinearGradient
            colors={['#89BFD9', '#5697E9', '#3F73E3']}
            style={styles.tabTopBar}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            ></LinearGradient>)}

            <Ionicons name="notifications" size={size - 4} color={color} />
          </View>
        )
      }}/>
      <Tab.Screen name="TabsMenu" component={Menu} options={{
        tabBarIcon: ({focused, color, size}) => (
          <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
          }}
          >
            {focused && ( <LinearGradient
            colors={['#89BFD9', '#5697E9', '#3F73E3']}
            style={styles.tabTopBar}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            ></LinearGradient>)}

            <Ionicons name="reorder-three" size={size + 6} color={color} />
          </View>
        )
      }}/>
    </Tab.Navigator>
  );
}