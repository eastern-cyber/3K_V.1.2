import React from 'react';
import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';

export default function () {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="signup" options={{ headerShown: false }} />
    </Stack>
  );
}