import { Link, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput } from 'react-native';

export default function () {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleLogin = () => {
    console.log(email, password)
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <View style={styles.loginContainer}>
        <TextInput
          placeholder="EMail"
          style={styles.inputField} 
        />
        <TextInput
          secureTextEntry={true}

          placeholder="Password"
          style={styles.inputField} 
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/(tabs)")}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  loginContainer: {
    width: '100%', // Equivalent to `w-full`
    padding: 16,   // Equivalent to `p-4` (since 1rem = 4px, p-4 = 16px)
  },
  text: {
    color: 'black',
    fontSize: 24, // text-3xl (24px in Tailwind)
    fontWeight: 'bold', // font-bold
  },
  button: {
    backgroundColor: 'black', // bg-black
    paddingHorizontal: 16, // px-4 (1rem = 16px)
    paddingVertical: 8,   // py-2 (0.5rem = 8px)
    borderRadius: 12, // rounded-lg (12px)
  },
  buttonText: {
    color: 'white', // Ensure text is visible on a black button
    textAlign: 'center',
    fontSize: 16,
  },
  inputField: {
    backgroundColor: 'white',
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 8,
    marginHorizontal: 28,
    marginVertical: 16,
    borderWidth: 1, // Optional: Adds a visible border
    borderColor: '#D1D5DB',
    width: '90%', // 👈 Equivalent to Tailwind's `w-full`
  },
  
});
