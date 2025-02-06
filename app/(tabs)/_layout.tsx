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
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? "home-sharp" : "home-outline"} size={24} color="black" />,
        }}
      />
      <Tabs.Screen
        name="friends"
        options={{
          title: 'Friends',
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? "people" : "people-outline"} size={26} color="black" />,
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: 'Upload',
          tabBarIcon: () => 
          <View style={styles.iconContainer}>
            <Ionicons name="add-circle" size={30} color="black" />,
          </View>
        }}
      />
      <Tabs.Screen
        name="inbox"
        options={{
          title: 'Inbox',
          tabBarIcon: ({ focused }) => 
          // <View style={styles.iconInbox}>
            <Ionicons name={focused ? "mail" : "mail-outline"} size={24} color="black" />,
          // </View>
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ focused }) => <Ionicons name={focused ? "person" : "person-outline"} size={24} color="black" />,
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    margin: 1,
    zIndex: 999, // Higher value brings it to the front
  },
  iconInbox: {
    position: 'absolute',
    margin: 1,
    zIndex: 998, // Higher value brings it to the front
  },
});