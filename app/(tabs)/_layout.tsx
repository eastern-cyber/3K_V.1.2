import { Tabs } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';



export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000',
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: () => <Ionicons name="home-sharp" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: 'Friends',
          tabBarIcon: () => <Ionicons name="people" size={26} color="black" />,
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: 'Camera',
          tabBarIcon: () => 
          // <View style={styles.iconContainer}>
            <Ionicons name="camera" size={26} color="black" />,
          // </View>
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: 'Inbox',
          tabBarIcon: () => <Ionicons name="mail" size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: () => <Ionicons name="person" size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}

// const styles = StyleSheet.create({
//   iconContainer: {
//     position: 'absolute',
//     margin: 1,
//   },
// });