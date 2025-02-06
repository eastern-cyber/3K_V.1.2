import { Link, useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function () {
  const router = useRouter();
  return (
    <View style={styles.container}>
      {/* <Text style={styles.text}>Login</Text> */}
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(tabs)")}
      >
        <Text style={styles.buttonText}>Login</Text>
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
    paddingHorizontal: 16, // px-4 (1rem = 16px)
    paddingVertical: 8,   // py-2 (0.5rem = 8px)
    borderRadius: 12, // rounded-lg (12px)
  },
  buttonText: {
    color: 'white', // Ensure text is visible on a black button
    textAlign: 'center',
    fontSize: 16,
  },
});
