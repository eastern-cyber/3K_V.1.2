import { Link, useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function () {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Login</Text>
      <Link href="/(tabs)">This is a button</Link>
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(tabs)")}
      >
        <Text style={styles.buttonText}>This is a button</Text>
      </TouchableOpacity>
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
  text: {
    color: 'black',
    fontSize: 24, // text-3xl (24px in Tailwind)
    fontWeight: 'bold', // font-bold
  },
  button: {
    backgroundColor: 'black', // bg-black
    padding: 16, // p-4 (16px)
    borderRadius: 12, // rounded-lg (12px)
  },
  buttonText: {
    color: 'white', // Ensure text is visible on a black button
    textAlign: 'center',
    fontSize: 16,
  },
});
