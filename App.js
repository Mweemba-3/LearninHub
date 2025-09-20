import * as React from 'react';
import { useState, useEffect, useRef } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialIcons, FontAwesome } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Notifications from 'expo-notifications';
import * as Application from 'expo-application';
import { Alert, Platform } from 'react-native';

import HomeScreen from './Components/HomeScreen';
import ProfileScreen from './Components/ProfileScreen';
import LoadingScreen from './Components/Loading';
import Mweemba from './Components/Mweemba';

// Notification handler config
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const ENCOURAGEMENTS = [
  {
    quote: "Success is the sum of small efforts repeated daily.",
    verse: "James 1:12 - Blessed is the one who perseveres...",
    author: "Obvious Mweemba",
  },
  // Add more as needed
];

const Tab = createBottomTabNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);
  const [deviceId, setDeviceId] = useState(null); // Initialize as null
  const notificationListener = useRef();

  // Setup Notifications ONCE
  useEffect(() => {
    const setupNotifications = async () => {
      try {
        const { status } = await Notifications.requestPermissionsAsync();
        if (status !== 'granted') {
          console.log('Notification permission denied');
          return;
        }

        if (Platform.OS === 'android') {
          await Notifications.setNotificationChannelAsync('default', {
            name: 'Default',
            importance: Notifications.AndroidImportance.HIGH,
          });
        }

        // Check if already scheduled
        const alreadyScheduled = await AsyncStorage.getItem('@notificationsSet');
        if (alreadyScheduled) return;

        // Schedule 3 notifications
        [8, 14, 20].forEach(hour => {
          const msg = ENCOURAGEMENTS[0];
          if (!msg || !msg.quote || !msg.verse || !msg.author) {
            console.log('Invalid encouragement message');
            return;
          }
          Notifications.scheduleNotificationAsync({
            content: {
              title: `Good ${hour < 12 ? 'Morning' : hour < 17 ? 'Afternoon' : 'Evening'}`,
              body: `${msg.quote}\n${msg.verse}`,
              data: { author: msg.author },
            },
            trigger: { hour, minute: 0, repeats: true },
          });
        });

        await AsyncStorage.setItem('@notificationsSet', 'true');
      } catch (error) {
        console.error('Notification setup error:', error);
      }
    };

    setupNotifications();

    return () => {
      if (notificationListener.current) {
        Notifications.removeNotificationSubscription(notificationListener.current);
      }
    };
  }, []);

  // Device ID Setup
  useEffect(() => {
    const initializeApp = async () => {
      try {
        // Simulate loading
        await new Promise(resolve => setTimeout(resolve, 3000));

        // Get or create device ID
        let id = await AsyncStorage.getItem('@deviceId');

        if (!id) {
          id =
            Platform.OS === 'android' && Application.androidId
              ? Application.androidId
              : `ios_${Math.random().toString(36).substring(2, 15)}`;

          if (!id) {
            id = `user_${Date.now()}`;
          }

          await AsyncStorage.setItem('@deviceId', id);
        }

        setDeviceId(id);
      } catch (error) {
        console.error('Initialization error:', error);
        Alert.alert('Error', 'Failed to initialize application');
      } finally {
        setLoading(false);
      }
    };

    initializeApp();
  }, []);

  if (loading || !deviceId) {
    return <LoadingScreen />;
  }

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === 'Home') return <MaterialIcons name="home" size={size} color={color} />;
            if (route.name === 'Instituition') return <FontAwesome name="university" size={size} color={color} />;
            if (route.name === 'Profile') return <FontAwesome name="user" size={size} color={color} />;
          },
          tabBarActiveTintColor: 'orange',
          tabBarInactiveTintColor: 'black',
        })}
      >
        <Tab.Screen name="Home">
          {props => <HomeScreen {...props} deviceId={deviceId} />}
        </Tab.Screen>
        <Tab.Screen name="Instituition" component={Mweemba} options={{ title: 'Universities' }} />
        <Tab.Screen name="Profile">
          {props => <ProfileScreen {...props} deviceId={deviceId} />}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}