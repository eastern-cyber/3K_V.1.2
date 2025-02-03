import { View, Text, StyleSheet } from 'react-native';

export default function () {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Profile</Text>
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
});
